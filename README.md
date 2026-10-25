# Motive House — Next.js starter

A responsive multi-page Next.js 14 website inspired by the supplied Motive House design references.

## Pages included
- `/` — Home page
- `/services/graphic-design` — Graphic Design
- `/services/social-media` — Social Media Management
- `/services/bookkeeping-accounting` — Bookkeeping & Accounting
- `/services/tax-preparation` — Tax Preparation & Filing
- Custom 404 page

## Run locally
1. Install Node.js 20 LTS (or a compatible current LTS).
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
- This is a frontend starter; the contact form opens the visitor's default email app using a `mailto:` link. It does not store enquiries in a database or send email in the background. Connect an email provider/API before production if you need a true contact system.
- The brand name, colors, page copy, navigation, cards, testimonials, and contact details are easy to customize in `lib/site-data.ts`, `components/`, and `app/globals.css`.
- Contact details and sample testimonials are placeholders. Replace them with the client's real details before launch.
- The visual references use warm office, brand-design, social-media, and accounting photography. Replace the CSS image backgrounds with licensed client imagery when available. The site has CSS-generated visual panels so the layout remains usable before real images are added.
- Do not present sample performance statistics or testimonials as verified client results; replace with accurate data before publishing.
