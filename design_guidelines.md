# Design Guidelines: MEDINA Pharma Labs Corporate + Webshop

## Design Approach
**Reference-Based:** Inspired by Apple's product presentation clarity, Pfizer's pharmaceutical professionalism, and Stripe's modern minimalism. Combining corporate credibility with premium e-commerce functionality. Focus on scientific precision, trust-building, and seamless integration of information and commerce.

## Color Palette
**Primary:** Deep Medical Blue (#1E40AF to #2563EB range)
**Secondary:** Cool Gray spectrum (#F8FAFC, #E2E8F0, #64748B)
**Accents:** Vibrant Blue (#3B82F6) for CTAs, Success Green (#10B981) for confirmations
**Backgrounds:** Pure white (#FFFFFF), Light Gray (#F9FAFB), subtle blue tints (#EFF6FF)
**Text:** Charcoal (#1E293B) for primary, Slate (#475569) for secondary

## Typography Hierarchy
**Primary Font:** Inter via Google Fonts CDN
- Hero Headlines: font-bold text-5xl lg:text-7xl tracking-tight leading-tight
- Section Titles: font-bold text-4xl lg:text-5xl tracking-tight
- Subsection Headers: font-semibold text-2xl lg:text-3xl
- Product Names: font-semibold text-xl
- Body Text: font-normal text-base lg:text-lg leading-relaxed
- Prices: font-bold text-3xl
- Technical Specs: font-normal text-sm tracking-wide

**Secondary Font:** JetBrains Mono for scientific/technical data
- Chemical formulas: font-mono text-sm
- Product codes: font-mono text-xs uppercase tracking-widest
- Lab results: font-mono text-sm

## Layout System
**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24
- Section padding: py-16 (mobile), py-24 lg:py-32 (desktop)
- Component spacing: p-6 to p-8
- Card gaps: gap-8
- Container: max-w-7xl with px-6 lg:px-8

## Page Structure

### Homepage
**Hero Section (90vh):** Full-width background image of modern laboratory/research facility with gradient overlay
- Centered content: "Advancing Pharmaceutical Excellence" headline
- Subtext: Scientific innovation + quality commitment tagline
- Dual CTAs: "Explore Products" (primary blue), "Our Research" (secondary blurred background)
- Trust indicators below: "25+ Years Research" • "ISO Certified" • "Global Distribution"

**Company Overview (py-24):** 2-column split layout
- Left: Mission statement, values (max-w-prose)
- Right: Statistics grid (4 metrics in 2x2: products developed, countries served, research papers, certifications)

**Product Categories (py-24):** 4-column grid on desktop, 2 on tablet, 1 on mobile
Each category card: Icon (Heroicons: beaker, capsule, shield-check, cpu-chip) + title + brief description + "Browse" link
1. Injectable Solutions
2. Oral Formulations
3. Peptide Research
4. Specialty Compounds

**Research & Innovation (py-24):** Full-width section with background tint
- 3-column feature grid: "Clinical Testing" • "Quality Control" • "R&D Pipeline"
- Each with icon, headline, supporting text

**Featured Products Carousel:** Horizontal scroll/grid showing 4-6 products
- Product cards with image, name, category badge, price, "View Details" button

**Trust Section (py-20):** Centered content
- Certification badges row (ISO, GMP, FDA equivalent badges)
- Client testimonial/case study highlight
- Partnership logos grid if applicable

**CTA Banner (py-16):** Full-width with blue background
- "Ready to Order?" + supporting text + "Access Webshop" button

### Webshop Pages
**Product Catalog:** 
- Sticky filter sidebar (desktop) or top filter bar (mobile)
- Category pills, search input, sort dropdown
- Product grid: 3-4 columns desktop, responsive
- Product cards: Clean white cards with shadow-md hover:shadow-xl
  - Product image placeholder (pharmaceutical vial/bottle)
  - Category badge (small pill shape, blue background)
  - Product name (bold)
  - Chemical/scientific name (mono font, smaller)
  - Specs line: concentration • quantity
  - Price (prominent)
  - "Add to Cart" button (full-width, rounded-lg)
  
**Product Detail:**
- 2-column layout (image left, details right)
- Large product image area
- Comprehensive info stack: title, scientific name, specifications table, dosage info, quality certifications
- Quantity selector + prominent "Add to Cart"
- Tabs below: Description, Technical Specs, Safety Data, Reviews

**Shopping Cart (Slide-in Panel):** Fixed right sidebar (w-96)
- Header with cart count + close icon
- Cart items list: thumbnail + name + quantity controls + price
- Subtotal + "Proceed to Checkout" button
- Empty state with relevant messaging

### Corporate Pages
**About Us:** Hero image (team/facility) + multi-section layout
- Company history timeline
- Leadership team grid (photos + names + titles)
- Facilities showcase

**Research & Development:** 
- Current projects grid
- Published papers section
- Partnership opportunities

**Quality & Compliance:**
- Certification details
- Testing protocols
- Regulatory information

## Navigation
**Header:** Sticky with backdrop-blur, shadow on scroll
- Left: "MEDINA Pharma Labs" text logo (Inter bold)
- Center: Main nav links (Products, Research, About, Quality, Contact)
- Right: Search icon, Cart icon with badge
- Mega dropdown for Products (4-column category preview)

**Footer:** 5-column layout (stack on mobile)
- Column 1: Brand name + tagline
- Column 2: Products (category links)
- Column 3: Company (about, research, careers)
- Column 4: Support (FAQ, shipping, returns)
- Column 5: Contact info + newsletter signup
- Bottom bar: Copyright, privacy links, payment icons

## Component Library

### Buttons
- Primary: Blue background, white text, rounded-lg, px-8 py-4
- Secondary: White background with blue border, blue text
- Ghost: Transparent with blue text
- On images: Blurred background (backdrop-blur-md) with white text

### Cards
- Product: White background, rounded-xl, shadow-md, hover lift effect
- Info: Light gray background, rounded-lg, subtle border
- Stat: Centered content, large number (text-5xl), label below

### Forms
- Input fields: Border gray-300, rounded-lg, px-4 py-3, focus:border-blue-500
- Labels: font-medium text-sm text-gray-700
- Error states: Red border, error message below

### Icons
Use Heroicons via CDN throughout for consistency (solid for filled states, outline for default)

## Images

**Hero Sections:** 
- Homepage: Modern pharmaceutical laboratory with scientists in clean room environment, professional equipment visible
- Product pages: Clean clinical product photography on white backgrounds
- About page: Corporate headquarters or research facility exterior/interior

**Product Images:** Pharmaceutical vials, bottles, packaging on pure white backgrounds with subtle shadows, consistent lighting

**Supporting Imagery:** Scientific imagery (molecular structures, microscopy), facility photos, quality control processes

## Trust Elements
- Certification badges (prominent placement in footer and quality sections)
- Security indicators for e-commerce (SSL, secure payment icons)
- Professional photography throughout
- Consistent scientific terminology
- Clean, clinical aesthetic maintaining medical precision

## Interactions
Minimal, purposeful animations only:
- Card hover: Subtle lift (translateY -2px) + shadow increase
- Button hover: Slight scale (1.02) + brightness increase
- Cart slide-in: Smooth transform from right
- Smooth scroll behavior throughout
- No distracting motion - maintain professional demeanor