# Rathore Creators Hub

A Next.js App Router website for the two YouTube channels, with an email subscription form (Supabase) and Google Ads website conversion tracking.

## Important before you start

- This website is a technical implementation, not a guarantee of Google Ads promotional-credit eligibility.
- Your specific offer requires a new website conversion action created directly in Google Ads, the Google tag on every page, and the first valid website conversion on an active campaign within 30 days after offer activation. Google may also require minimum ad spend and successful billing.
- Do not submit your own/test form or ask friends to submit it just to manufacture a conversion. The conversion should represent a real visitor's genuine subscription after interacting with an eligible active campaign.
- The subscription form stores email addresses. Publish accurate contact details and a privacy policy, protect the Supabase service-role key, and only email people who have explicitly opted in. Set up an unsubscribe process before sending marketing emails.

## 1. Prerequisites

- Node.js 20.9+ (use a current supported LTS release)
- A GitHub account
- A Vercel account
- A Supabase account
- A Google Ads account with the promotion visible under Billing > Promotions

## 2. Create the Supabase database

1. Create a Supabase project.
2. Open **SQL Editor** in the Supabase dashboard.
3. Paste and run `supabase/schema.sql`.
4. Open **Project Settings > API** and copy the Project URL and `service_role` key.
5. Keep the service-role key secret. It must only be used by the server and must never be prefixed with `NEXT_PUBLIC_`.

## 3. Configure locally

```bash
cp .env.example .env.local
```

Set the following values in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-123456789
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YOUR_CONVERSION_LABEL
```

For local development, you can leave the Google Ads values as placeholders until Google Ads gives you the real tag ID and conversion label. Do not invent either value.

Install and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 4. Deploy to Vercel

1. Push this project to a private GitHub repository.
2. In Vercel, choose **Add New > Project** and import the repository.
3. Keep the framework preset as **Next.js**.
4. Add all four environment variables from `.env.local` in Vercel **Project Settings > Environment Variables**. Use Production (and Preview only if desired).
5. Deploy. Vercel will provide a free `*.vercel.app` address.
6. After changing environment variables, redeploy the project.
7. Open the live website and test the pages and subscription flow.

## 5. Configure Google Ads conversion tracking

Do this carefully because the promotion terms are time-limited.

1. In Google Ads, confirm the promotion is activated and note the activation date/deadline in **Billing > Promotions**.
2. Create a **new website conversion action directly in Google Ads** (do not rely only on an imported Google Analytics goal). Choose a lead/form-submission category and name it `Website Email Subscription`.
3. Choose the Google tag setup. Google Ads will show a Google tag ID (usually `AW-...`) and an event snippet / conversion label. Copy the exact values into the Vercel environment variables above.
4. The global Google tag is loaded in `app/layout.tsx` through `components/GoogleAds.tsx`, so it is present across the site. The conversion event is fired only after the API confirms a newly inserted email subscription. Duplicate submissions do not fire a conversion.
5. This implementation asks visitors for advertising measurement consent. The tag starts with ad-related consent denied; the visitor can accept or reject using the consent banner. If they reject, the conversion event is not sent. Do not bypass consent choices.
6. Verify the tag using Google Tag Assistant and Google Ads conversion diagnostics. Allow time for status updates.
7. Run an eligible active campaign that sends real visitors to this website. The first valid conversion must be attributable to that active campaign to meet the offer's stated requirement. An organic visit or your own test is not a qualifying campaign conversion.

Google Ads UI labels can change. Follow the current instructions shown in your own account and Google's official help pages.

## 6. Form and conversion behaviour

- The form requires a valid email, at least one channel interest, and explicit opt-in.
- The API writes to `public.email_subscribers` using the server-only Supabase service-role key.
- Duplicate email submissions return an “already subscribed” message and are not counted as a new conversion.
- A conversion is fired only when the server confirms a new row was created and the visitor accepted ad measurement consent.
- The thank-you page is informational. The conversion event is fired from the successful form response rather than from a page view, to reduce accidental duplicate counting.

## 7. Before public launch

- Replace the example contact email in the footer and privacy page with a real monitored email address.
- Review the privacy policy for your actual data practices and legal obligations. It is a starter template, not legal advice.
- Add a way to honour unsubscribe and deletion requests before sending any email campaigns.
- Consider adding CAPTCHA or server-side rate limiting if the form receives spam. The included hidden honeypot is only a basic deterrent.
- Do not publicly expose Supabase service-role credentials.
- Check Google Ads billing and the promotion terms; credit is not guaranteed merely by deploying this website.

## Project structure

```text
app/
  api/subscribe/route.ts   # Server-side subscription endpoint
  about/page.tsx
  privacy/page.tsx
  subscribe-success/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  ConsentBanner.tsx
  GoogleAds.tsx
  SubscribeForm.tsx
lib/
  supabase.ts
supabase/
  schema.sql
```
