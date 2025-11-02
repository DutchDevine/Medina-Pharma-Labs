# MEDINA PharmaLabs & ENDOGENIC Webshop

## Overview

This is an e-commerce webshop for pharmaceutical products, featuring two brands: MEDINA PharmaLabs and ENDOGENIC. The application provides a catalog of professional pharmaceutical products including injectable steroids, peptides, SARMs, and oral supplements. The webshop is built as a full-stack TypeScript application with a React frontend and Express backend, designed with a clean, modern pharmaceutical aesthetic inspired by Apple Store and Glossier design patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**UI Component Library**: shadcn/ui (Radix UI primitives) configured with the "new-york" style variant. All components follow a design system based on Tailwind CSS with custom HSL color variables for theming support.

**Styling Approach**: 
- Tailwind CSS with custom configuration for pharmaceutical-grade professional aesthetics
- Custom CSS variables for light/dark mode theming
- Typography using Inter/DM Sans for primary text and Roboto Mono for technical specifications
- Consistent spacing primitives (2, 4, 6, 8, 12, 16, 20 units)
- Responsive grid system for product displays

**State Management**: 
- React Query (@tanstack/react-query) for server state management and API data fetching
- Local React state (useState) for UI state like cart management and search
- Cart state is maintained in-memory (not persisted)

**Routing**: Wouter for client-side routing (lightweight alternative to React Router)

**Key Design Patterns**:
- Component-based architecture with reusable UI components
- Shopping cart implemented as in-memory state with real-time updates
- Product catalog with category filtering and search functionality
- Mobile-first responsive design

### Backend Architecture

**Framework**: Express.js with TypeScript running on Node.js

**API Design**: RESTful API endpoints serving JSON responses
- `GET /api/products` - Retrieve all products or filter by category
- `GET /api/products/:id` - Retrieve single product by ID

**Data Storage**: Currently using in-memory storage (MemStorage class) with product data hardcoded in `client/src/lib/products.ts`. The application is architected to support database persistence but currently runs without a database.

**Data Models**:
- User (with authentication schema defined but not actively used)
- Product (with categories: injectable-steroids, hcg, oral-sarms, peptides)
- CartItem (client-side only)

**Server Architecture Patterns**:
- Middleware-based request handling
- Centralized route registration
- Request/response logging for API endpoints
- Vite development server integration for HMR in development

### Database Schema

**ORM**: Drizzle ORM configured for PostgreSQL dialect

**Schema Definition** (`shared/schema.ts`):
- Users table with UUID primary keys, username/password fields
- Database configuration points to PostgreSQL via DATABASE_URL environment variable
- Schema uses Drizzle-Zod for validation

**Current State**: Database schema is defined but not actively used. The application currently runs entirely on in-memory storage with hardcoded product data. PostgreSQL can be added later by provisioning a database and running migrations.

### External Dependencies

**UI Components & Styling**:
- @radix-ui/* - Headless UI component primitives (accordion, dialog, dropdown, navigation, etc.)
- Tailwind CSS - Utility-first CSS framework
- class-variance-authority - Component variant styling
- lucide-react - Icon library
- embla-carousel-react - Carousel functionality

**Forms & Validation**:
- react-hook-form - Form state management
- @hookform/resolvers - Form validation resolvers
- zod - Schema validation
- drizzle-zod - Database schema to Zod schema conversion

**Database & Data**:
- @neondatabase/serverless - Serverless PostgreSQL driver (configured but not in use)
- drizzle-orm - TypeScript ORM
- connect-pg-simple - PostgreSQL session store (installed but sessions not implemented)

**Development Tools**:
- Vite - Build tool and dev server
- @replit/vite-plugin-* - Replit-specific development plugins
- tsx - TypeScript execution for Node.js
- esbuild - JavaScript/TypeScript bundler

**Utilities**:
- date-fns - Date manipulation
- nanoid - Unique ID generation
- wouter - Lightweight routing

**Note on Authentication**: User authentication schema exists but is not implemented in the current application flow. No login/registration functionality is active.

**Note on Payment Integration**: No payment processing is currently integrated. Cart functionality exists for adding/removing items and calculating totals, but checkout is not implemented.