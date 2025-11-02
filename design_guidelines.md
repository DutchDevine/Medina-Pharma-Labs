# Design Guidelines: MEDINA PharmaLabs & ENDOGENIC Webshop

## Design Approach
**Reference-Based:** Drawing inspiration from Apple Store's clean product presentation, Glossier's modern wellness aesthetic, and pharmaceutical-grade professional interfaces. Focus on trust, clarity, and medical precision while maintaining contemporary e-commerce appeal.

## Typography Hierarchy

**Primary Font:** Inter or DM Sans via Google Fonts CDN
- Hero Headlines: font-bold text-5xl lg:text-6xl tracking-tight
- Section Titles: font-bold text-3xl lg:text-4xl
- Product Names: font-semibold text-xl
- Chemical Names: font-normal text-sm text-gray-600 (italic)
- Body Text: font-normal text-base leading-relaxed
- Prices: font-bold text-2xl for primary, text-lg for comparative

**Secondary Font:** Roboto Mono for technical specifications
- Concentrations/Dosages: font-mono text-sm
- Product codes: font-mono text-xs uppercase tracking-wider

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Component padding: p-4 to p-8
- Section spacing: py-12 (mobile), py-20 (desktop)
- Card gaps: gap-6 on mobile, gap-8 on desktop
- Container max-width: max-w-7xl with px-4 lg:px-8

**Grid System:**
- Product grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Category sections: grid-cols-2 lg:grid-cols-4
- Hero split: 2-column layout (content + product showcase)

## Component Library

### Navigation
**Header:** Fixed top navigation with blur backdrop
- MEDINA logo left, ENDOGENIC logo integrated subtly
- Category dropdown menu (4 main categories)
- Search bar with icon (Heroicons: magnifying-glass)
- Cart icon with badge counter (Heroicons: shopping-cart)
- Sticky on scroll with subtle shadow

### Hero Section
**Layout:** Full-width split design (h-screen or min-h-[600px])
- Left: Headline "Professionele Farmaceutische Producten" + subtext + CTA
- Right: Product showcase imagery (vials, packaging with MEDINA/ENDOGENIC branding)
- Background: Subtle gradient overlay
- CTAs: "Bekijk Catalogus" (primary), "Over Ons" (secondary with blurred background over image)

### Product Cards
**Structure:** Rounded corners (rounded-xl), subtle shadow (shadow-md hover:shadow-xl)
- Product image placeholder (pharmaceutical vial/package visualization)
- Brand badge (MEDINA or ENDOGENIC) as small pill-shaped tag
- Product name (bold)
- Chemical name (italic, smaller)
- Specs row: concentration • quantity (using bullet separator)
- Price display: EUR with margin price prominent
- "Toevoegen" button (full-width, rounded-lg)
- Hover: Lift effect with transform scale-105 transition

### Category Sections
**Organization:** 4 main sections with visual separation
1. 💉 Injecteerbare Steroïden (MEDINA)
2. 🧪 HCG & Gonadotropinen
3. 💊 Tabletten, Orale Middelen & SARMs
4. 🧬 Peptiden & Hormonen (ENDOGENIC)

Each category: Section header with icon + product grid below

### Shopping Cart
**Sidebar Panel:** Slide-in from right (w-96)
- Header: "Winkelwagen" with close icon
- Cart items: Product thumbnail + name + quantity controls (-, +) + price
- Subtotal calculation
- "Afrekenen" button (prominent, full-width)
- Empty state: Icon + "Uw winkelwagen is leeg"

### Product Detail Modal/Page
**Layout:** 2-column responsive
- Left: Large product image
- Right: Product info stack
  - Brand badge
  - Product name (large)
  - Chemical name
  - Specifications table (concentration, quantity, form)
  - Price (prominent with currency)
  - Quantity selector + "Toevoegen aan Winkelwagen"
  - Technical details accordion

### Filter/Search Bar
**Sticky Filter Panel:** Below header
- Category pills (clickable, active state)
- Search input with icon
- Results counter: "X producten gevonden"

### Footer
**Multi-Column Layout:** 4 columns on desktop, stack on mobile
- Column 1: MEDINA + ENDOGENIC logos stacked
- Column 2: "Producten" links (4 categories)
- Column 3: "Informatie" (Over Ons, Contact, Verzending)
- Column 4: "Klantenservice" (FAQ, Retourneren, Privacy)
- Bottom: Copyright + payment icons

## Images

**Hero Section:** Large background image featuring pharmaceutical vials, laboratory setting, or clean product photography with MEDINA/ENDOGENIC branded packaging. Image should convey professionalism and medical precision. Use overlay gradient for text readability.

**Product Cards:** Placeholder pharmaceutical product imagery - vials, ampoules, tablet bottles with clean white/clinical backgrounds. Each product category should have consistent visual treatment.

**Category Headers:** Icon-based (syringe, pill, molecule symbols) - no large images needed

**Brand Logos:** MEDINA PharmaLabs logo in header, ENDOGENIC logo badge on peptide products and in footer

## Trust & Professional Elements
- Medical certification badges in footer
- Secure payment icons
- "Professioneel advies beschikbaar" trust banner
- Clean, clinical aesthetic throughout
- Consistent use of medical terminology
- Professional product photography style

## Interactions (Minimal)
- Smooth scroll behavior
- Card hover lift (transform + shadow)
- Cart slide-in animation
- Quantity button feedback (scale on click)
- No excessive animations - maintain professional medical aesthetic