# UFC Cleaning Website - Implementation Guide

## Quick Start

### 1. Install & Run
```bash
cd ufc-cleaning-redesign
npm install
npm run dev
```

Visit http://localhost:3000 - Website is live and ready to customize.

### 2. Replace Images

Create `public/images/` and add your photos. Then update these files:

**Homepage Image Placeholders:**
- `/app/page.tsx` - Hero section (~line 60)
- `/app/page.tsx` - Residential section (~line 270)
- `/app/page.tsx` - Commercial section (~line 320)
- `/app/page.tsx` - Demolition section (~line 430)

Replace placeholder divs with Next.js Image components:
```jsx
import Image from 'next/image';

<Image
  src="/images/residential-cleaning-before-after.jpg"
  alt="Professional residential cleaning results"
  width={500}
  height={400}
  className="rounded-2xl"
/>
```

### 3. Update Contact Information

**File:** `components/Footer.tsx`
- Update phone numbers
- Update email
- Update address

**File:** `app/contact/page.tsx`
- Update hours of operation
- Update service areas

### 4. Customize Testimonials

**File:** `app/page.tsx` (~line 680)
```typescript
const testimonials = [
  {
    name: "Real Customer Name",
    location: "City, TX",
    service: "Service Type",
    quote: "Their actual quote here...",
  },
  // Add more real testimonials
];
```

### 5. Adjust Pricing

Each service page has pricing. Update here:
- `/app/services/residential-cleaning/page.tsx` - Starting price $169
- `/app/services/deep-cleaning/page.tsx` - Starting price $199
- `/app/services/commercial-cleaning/page.tsx` - Starting price $120
- `/app/services/post-construction/page.tsx` - Starting price $349
- `/app/services/junk-removal/page.tsx` - Starting price $149
- `/app/services/power-washing/page.tsx` - Starting price $99
- `/app/services/handyman/page.tsx` - $89/hr
- `/app/services/moving/page.tsx` - Starting price $299

### 6. Add Quote Form Backend

The form is built but needs backend integration:

**Option A: Formspree**
```javascript
// In /app/quote/page.tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

**Option B: Vercel KV + SendGrid**
```javascript
// Create API route: /app/api/quote/route.ts
import { kv } from '@vercel/kv';

export async function POST(request: Request) {
  const data = await request.json();
  await kv.set(`quote:${Date.now()}`, data);
  // Send email via SendGrid
  return Response.json({ success: true });
}
```

**Option C: Simple Email**
```javascript
// Use a service like SendGrid or Mailgun
const response = await fetch('/api/send-email', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

### 7. Set Up Analytics

Add to `app/layout.tsx`:
```jsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

### 8. Deploy to Production

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Alternative Hosting**
- Netlify
- Railway
- AWS Amplify
- Your own server

## Content Customization

### Services List
Update main services grid: `/app/page.tsx` (~line 80)
```javascript
const services = [
  {
    title: "Residential Cleaning",
    price: "From $169",
    description: "Your description",
    href: "/services/residential-cleaning",
    icon: "🏠",
  },
  // Add/remove as needed
];
```

### Locations
Update cities served: `/app/locations/page.tsx` (~line 25)
```javascript
const cities = [
  {
    name: "Rowlett",
    description: "Your description",
    distance: "Headquarters",
  },
  // Add your cities
];
```

### Trust Indicators
Update in homepage and component: `/app/page.tsx` (~line 70)
- Insurance amount
- Review count
- Team qualifications
- Any guarantees

### Recurring Plan Discounts
Update in `/app/page.tsx` (~line 250)
```javascript
// Weekly: 20% off
// Bi-Weekly: 15% off
// Monthly: 5% off
```

## Design Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: "#0284c7", // Your primary color
  },
  accent: {
    600: "#15803d", // Your accent color
  },
}
```

### Fonts
Currently using system fonts. To add custom fonts:
```javascript
// In app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ['latin'],
});
```

### Spacing
Global spacing uses 16px base. Edit in `app/globals.css`:
```css
h1 { font-size: 3.5rem; /* Adjust as needed */ }
```

### Buttons
Button styles in `app/globals.css`:
```css
.btn-primary { /* Update colors, sizes */ }
.btn-secondary { /* Update colors, sizes */ }
```

## SEO Optimization

### Page Titles & Meta
Already optimized. To update, edit each page's `metadata`:

```typescript
export const metadata: Metadata = {
  title: "Your Custom Title",
  description: "Your description",
  keywords: "your, keywords",
};
```

### Structured Data
Add to `app/layout.tsx`:
```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Universal Facility Cleaning LLC",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8001 Munich Dr",
        "addressLocality": "Rowlett",
        "addressRegion": "TX",
        "postalCode": "75089",
      },
      "telephone": "(214) 817-9212",
    }),
  }}
/>
```

## Features to Add Later

### Phase 2
- [ ] Blog/Articles
- [ ] Before/After photo gallery
- [ ] Video testimonials
- [ ] Live chat support
- [ ] Appointment scheduling
- [ ] Google reviews widget
- [ ] Multiple language support

### Phase 3
- [ ] Mobile app
- [ ] Team member profiles
- [ ] Case study/portfolio section
- [ ] FAQ page
- [ ] Video tours
- [ ] Email newsletter signup

## Performance Optimization

### Current Status ✅
- Images optimized for web
- Tailwind CSS purified
- No unused dependencies
- Minimal JavaScript

### Further Optimization
```bash
npm run build
# Check bundle size
npm run analyze
```

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Mobile Optimization

### Already Optimized ✅
- Responsive navigation
- Touch-friendly buttons
- Mobile-first CSS
- Performance optimized for slow networks

### Testing
```bash
# Test on actual devices
npm run dev
# Visit on iPhone, Android, etc.
```

## Deployment Checklist

- [ ] All images replaced with real photos
- [ ] Phone numbers verified
- [ ] Email address correct
- [ ] Testimonials are real customer reviews
- [ ] Pricing accurate
- [ ] Service descriptions match your offerings
- [ ] Locations are complete
- [ ] Form backend configured
- [ ] Analytics enabled
- [ ] SSL certificate installed
- [ ] DNS configured
- [ ] 301 redirects from old site setup
- [ ] Tested on mobile devices
- [ ] Lighthouse score checked
- [ ] Google Search Console verified
- [ ] Google My Business linked
- [ ] Social media links added

## Support Files

- `README.md` - Full technical documentation
- `package.json` - Dependencies and scripts
- `tailwind.config.js` - Style configuration
- `.env.local` - Environment variables (create this)

## Estimated Implementation Time

- **Basic Customization:** 2-4 hours
  - Update contact info
  - Add testimonials
  - Replace images
  
- **Complete Customization:** 8-12 hours
  - All above
  - Form backend setup
  - Analytics configuration
  - SEO optimization
  - Performance tuning

- **Deployment:** 1-2 hours
  - Domain setup
  - SSL certificate
  - CDN configuration
  - DNS changes

## Questions?

Refer to:
- `README.md` for detailed technical info
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

---

**Last Updated:** 2026  
**Version:** 1.0.0
