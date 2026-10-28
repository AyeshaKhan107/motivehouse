# Motive House — Next.js starter

A responsive multi-page Next.js 14 website inspired by the supplied Motive House design references.

## Pages included
- `/` — Home page
- `/contact` — Contact and project inquiry form
- `/admin/inquiries` — Password-protected inquiry dashboard
- `/services/graphic-design` — Graphic Design
- `/services/social-media` — Social Media Management
- `/services/bookkeeping-accounting` — Bookkeeping & Accounting
- `/services/tax-preparation` — Tax Preparation & Filing
- Custom 404 page

## Run locally
1. Install Node.js 20.19 or newer (or a compatible current LTS).
2. Extract the ZIP and open the extracted `motive-house-nextjs` folder in VS Code.
3. Open Terminal in that folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000`.

To check production build:
```bash
npm run build
npm start
```

## Important setup notes
- Copy `.env.example` to `.env.local` and configure these server-only environment variables locally and in each Vercel environment that should accept inquiries:
  - `MONGODB_URI` — MongoDB Atlas connection string. The app explicitly selects database `MotiveHouse`, regardless of a database name in the URI.
  - `ADMIN_PASSWORD` — A strong, unique password for `/admin/inquiries`.
  - `ADMIN_SESSION_SECRET` — At least 32 random characters used to sign the secure admin session cookie. Generate one with `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`.
  - `WHATSAPP_BUSINESS_NUMBER` — Optional business number in international format, digits only (for example, `15551234567`). The WhatsApp contact option is hidden until configured.
- Contact submissions are stored in the `Contact` collection in `MotiveHouse`. Restart the development server after changing `.env.local`. In MongoDB Atlas, allow connections from the deployment environment and use a database user with only the permissions the site needs. Never prefix these values with `NEXT_PUBLIC_`.
- If `MONGODB_URI` is missing or the database is unavailable, the inquiry form reports an error and does not show a success message. Contact inquiries are not emailed automatically; configure an email provider separately if email notifications are required.
- The admin dashboard uses an HTTP-only, signed, same-site session cookie. Set both admin environment variables before using it. The built-in IP rate limit is per running application instance; use a shared rate-limiting service for deployments that need limits shared across serverless instances.
- The brand name, colors, page copy, navigation, cards, testimonials, and contact details are easy to customize in `lib/site-data.ts`, `components/`, and `app/globals.css`.
- Contact details and sample testimonials are placeholders. Replace them with the client's real details before launch.
- The visual references use warm office, brand-design, social-media, and accounting photography. Replace the CSS image backgrounds with licensed client imagery when available. The site has CSS-generated visual panels so the layout remains usable before real images are added.
- Do not present sample performance statistics or testimonials as verified client results; replace with accurate data before publishing.
