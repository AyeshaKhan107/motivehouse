import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() { return <main className="not-found"><span className="eyebrow">404 — Page Not Found</span><h1>This page took<br/>a creative detour.</h1><p>The page you’re looking for may have moved or no longer exists.</p><Link className="button button-red" href="/"><ArrowLeft size={15}/> Back to Home</Link></main>; }
