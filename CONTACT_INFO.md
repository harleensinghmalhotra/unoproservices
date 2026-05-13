# Uno Pro Services — Contact Information Reference

This file documents the canonical business contact details used across the website. The single source of truth for runtime values is `public/config.json`. Update that file first; this file is a human-readable summary.

## Company Name
**Uno Pro Services**

## Brand Colors
- Primary: `#B51E1E` (deep red)
- Secondary: `#7A0F0F` (darker red)
- Accent: `#D86B1F` (orange)
- Green: `#2E8B57` (sea green)
- Light: `#F5F1E8` (cream/sand)

## Contact Information

### Phone
**(773) 376-8058**
- tel: `+17733768058`
- Used in: Header, Footer, Homepage, Contact, Careers, JSON-LD schemas

### Email
**unoproservices@gmail.com**
- Used in: Header, Footer, Contact page, JSON-LD schemas

### Address
**4139 S Halsted St**
**Chicago, IL 60609**
- Used in: Footer, Contact page, LocalBusiness schema

## Business Hours
- Monday – Friday: 8:00 AM – 5:00 PM
- Saturday: 8:00 AM – 12:00 PM
- Sunday: Closed

## Service Areas (Chicago + Chicagoland)
- Chicago
- Cicero
- Berwyn
- Oak Park
- Evanston
- Skokie
- Elmwood Park
- Norridge
- Harwood Heights
- Lincolnwood

## Languages
- English
- Español (Se Habla Español)

## Services Offered
- Weekly Lawn Maintenance
- Bi-Weekly Lawn Maintenance
- Fertilizing
- Leaf Clean Up (Spring + Fall)
- Snow Shoveling
- Gardening

## Company Stats (verify with owner before updating site)
- **10+ Years** Experience
- **100+** Residential & Commercial Properties served
- **3.7★** Google Reviews

## How to Update Contact Information

1. Edit `/public/config.json` (single source of truth — Header, Footer, Contact page read from it at runtime).
2. Update the LocalBusiness JSON-LD blocks in:
   - `/index.html`
   - `/src/pages/HomePage.tsx`
3. Update this file to match.

Files that may reference contact data:
- `/public/config.json`
- `/src/components/Header.tsx`
- `/src/components/Footer.tsx`
- `/src/pages/HomePage.tsx`
- `/src/pages/ContactPage.tsx`
- `/src/pages/CareersPage.tsx`
- `/index.html` (JSON-LD)
- `/tailwind.config.js` (for colors)
