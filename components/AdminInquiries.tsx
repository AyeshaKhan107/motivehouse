"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { LogOut, Search } from "lucide-react";

const statuses = ["New", "Contacted", "In Progress", "Completed"] as const;
type InquiryStatus = (typeof statuses)[number];

type Inquiry = {
  _id: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  details: string;
  status: InquiryStatus;
  createdAt: string;
};

const fieldClass =
  "min-h-11 w-full rounded-xl border border-[#6b1a2b]/15 bg-white px-3.5 py-2.5 text-sm text-[#1a0b0f] outline-none focus:border-[#8b2332] focus:ring-4 focus:ring-[#8b2332]/10";

export function AdminInquiries() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const loadInquiries = useCallback(async () => {
    const query = new URLSearchParams();
    if (status) query.set("status", status);
    if (search.trim()) query.set("q", search.trim());
    const response = await fetch(`/api/admin/inquiries?${query.toString()}`, {
      cache: "no-store",
    });
    const result = (await response.json()) as {
      inquiries?: Inquiry[];
      message?: string;
    };
    if (!response.ok) {
      if (response.status === 401) setAuthenticated(false);
      throw new Error(result.message || "Unable to load inquiries.");
    }
    setAuthenticated(true);
    setInquiries(result.inquiries || []);
    setError("");
  }, [search, status]);

  useEffect(() => {
    if (!authenticated) return;
    const timer = window.setTimeout(() => {
      loadInquiries().catch((loadError: unknown) => {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Unable to load inquiries.",
        );
      });
    }, 180);
    return () => window.clearTimeout(timer);
  }, [authenticated, loadInquiries]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to sign in.");
      setPassword("");
      setAuthenticated(true);
    } catch (loginError) {
      setError(
        loginError instanceof Error ? loginError.message : "Unable to sign in.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function updateStatus(id: string, nextStatus: InquiryStatus) {
    setError("");
    try {
      const response = await fetch("/api/admin/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nextStatus }),
      });
      const result = (await response.json()) as {
        inquiry?: Inquiry;
        message?: string;
      };
      const updatedInquiry = result.inquiry;
      if (!response.ok || !updatedInquiry) {
        throw new Error(result.message || "Unable to update inquiry.");
      }
      setInquiries((current) =>
        current.map((inquiry) =>
          inquiry._id === id ? updatedInquiry : inquiry,
        ),
      );
    } catch (updateError) {
      setError(
        updateError instanceof Error
          ? updateError.message
          : "Unable to update inquiry.",
      );
    }
  }

  async function logout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setAuthenticated(false);
      setInquiries([]);
      setError("");
    } catch {
      setError("Unable to sign out. Please try again.");
    }
  }

  return (
    <main className="min-h-[70vh] bg-[#fffdf9] px-5 py-12 text-[#1a0b0f] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {!authenticated ? (
          <section className="mx-auto max-w-md rounded-3xl border border-[#6b1a2b]/10 bg-white p-7 shadow-[0_24px_70px_-42px_rgba(26,11,15,0.4)] sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b2332]">
              Motive House
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#6b1a2b]">
              Admin sign in
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#1a0b0f]/65">
              Sign in to view and manage private project inquiries.
            </p>
            <form className="mt-7 space-y-4" onSubmit={login}>
              <label className="block text-sm font-semibold">
                Admin password
                <input
                  className={`${fieldClass} mt-2`}
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </label>
              <button
                className="min-h-11 w-full rounded-xl bg-[#8b2332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6b1a2b] disabled:opacity-60"
                disabled={busy}
              >
                {busy ? "Signing in…" : "Sign in"}
              </button>
            </form>
            {error && (
              <p role="alert" className="mt-4 text-sm leading-6 text-[#8b2332]">
                {error}
              </p>
            )}
          </section>
        ) : (
          <>
            <div className="flex flex-col gap-5 border-b border-[#6b1a2b]/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b2332]">
                  Private dashboard
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#6b1a2b] sm:text-4xl">
                  Project inquiries
                </h1>
              </div>
              <button
                onClick={logout}
                className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-xl border border-[#6b1a2b]/15 px-4 py-2 text-sm font-semibold text-[#6b1a2b] transition hover:bg-[#f5eee8] sm:self-auto"
              >
                <LogOut size={16} aria-hidden="true" />
                Sign out
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_220px]">
              <label className="relative block">
                <span className="sr-only">Search inquiries</span>
                <Search
                  size={17}
                  aria-hidden="true"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b1a2b]/55"
                />
                <input
                  className={`${fieldClass} pl-10`}
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search name, email, service, or details"
                />
              </label>
              <label>
                <span className="sr-only">Filter by status</span>
                <select
                  className={fieldClass}
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <option value="">All statuses</option>
                  {statuses.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {error && (
              <p role="alert" className="mt-4 text-sm leading-6 text-[#8b2332]">
                {error}
              </p>
            )}

            <div className="mt-6 space-y-4">
              {inquiries.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[#6b1a2b]/20 bg-white p-8 text-center text-sm text-[#1a0b0f]/60">
                  No inquiries match your filters.
                </div>
              ) : (
                inquiries.map((inquiry) => (
                  <article
                    key={inquiry._id}
                    className="rounded-2xl border border-[#6b1a2b]/10 bg-white p-5 shadow-[0_12px_36px_-30px_rgba(26,11,15,0.45)] sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h2 className="break-words text-lg font-semibold text-[#6b1a2b]">
                          {[inquiry.firstName, inquiry.lastName]
                            .filter(Boolean)
                            .join(" ") || inquiry.name || "Unnamed inquiry"}
                        </h2>
                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#1a0b0f]/65">
                          <a
                            href={`mailto:${inquiry.email}`}
                            className="break-all text-[#8b2332] underline-offset-2 hover:underline"
                          >
                            {inquiry.email}
                          </a>
                          {inquiry.company && <span>{inquiry.company}</span>}
                        </div>
                      </div>
                      <label className="w-full shrink-0 text-xs font-semibold text-[#1a0b0f]/60 sm:w-44">
                        Inquiry status
                        <select
                          className={`${fieldClass} mt-1.5`}
                          value={inquiry.status}
                          onChange={(event) =>
                            updateStatus(
                              inquiry._id,
                              event.target.value as InquiryStatus,
                            )
                          }
                        >
                          {statuses.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="rounded-full bg-[#f5eee8] px-3 py-1.5 text-[#6b1a2b]">
                        {inquiry.service}
                      </span>
                      {inquiry.budget && (
                        <span className="rounded-full bg-[#f5eee8] px-3 py-1.5 text-[#6b1a2b]">
                          {inquiry.budget}
                        </span>
                      )}
                      {inquiry.phone && (
                        <span className="rounded-full bg-[#f5eee8] px-3 py-1.5 text-[#6b1a2b]">
                          {inquiry.phone}
                        </span>
                      )}
                    </div>
                    <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-[#1a0b0f]/80">
                      {inquiry.details}
                    </p>
                    <p className="mt-4 text-xs text-[#1a0b0f]/50">
                      Submitted{" "}
                      {new Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }).format(new Date(inquiry.createdAt))}
                    </p>
                  </article>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
