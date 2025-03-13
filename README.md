# Portfolio website

### Tech Stack

**Frontend:**
- Framework: **Next.js**
- Styling: **TailwindCSS**
- Animations: **Framer Motion**
- Icon library: **Lucide-react**
- Markdown rendering: **MDX Bundler**
- Utility libraries: **Date-fns**, **React-wrap-balancer**

**Backend:**
- ORM: **Prisma**
- Database Adapter: **@prisma/adapter-neon**
- Environment management: **@t3-oss/env-nextjs**
- Sentry integration: **@sentry/nextjs**
- CMS: **basehub**

**Testing:**
- Framework: **Vitest**
- React Testing: **@testing-library/react**, **@testing-library/dom**
- JSDOM: **jsdom**

**Other Tools and Utilities:**
- Feature flags: **@vercel/flags**
- Toolkit: **@vercel/toolbar**
- Text search: **Fuse.js**
- Image processing: **Sharp**
- Syntax highlighting: **Shiki**
- Validation: **Zod**
- Clerk integration: **@clerk/nextjs**


# Prerequisites

| Operating system                  | Node.js version |
|-----------------------------------| ------- |
| macOS Sequoia 15.0.1 (24A348)     | 20.12.2    |
| Ubuntu 24.04 Arm64                | 20.18.0     |
| Fedora, Release 41                | 22.11.0    |
| Windows 11 Pro 24H2 (26100.2033)  | 20.18.0        |

* Package manager: pnpm https://pnpm.io/installation)
* Stripe CLI: https://docs.stripe.com/stripe-cli
* Mintlify CLI: https://mintlify.com/docs/development
* Vercel CLI: https://vercel.com/docs/cli

### Accounts

* Arcjet, for **application security**.
* BetterStack, for **logging and uptime monitoring**.
* Clerk, for **authentication**.
* Google Analytics, for **web analytics**.
* Posthog, for **product analytics**.
* Resend, for **transactional emails**.
* Sentry, for **error tracking**.
* Stripe, for **payments**.


### Run development

Install all dependencies 

```shell
pnpm install
```

Vercel Link and Env variables

```shell
vercel link ./apps/app
vercel link ./apps/api
vercel link ./apps/web

cd apps/<app-name>
vercel env pull 
```

```shell
pnpm dev
```

Build

```shell
pnpm build
```

Migration

```shell
pnpm migration
```

---

### Contacts
- **Damir Akzhigitov**: [LinkedIn](https://www.linkedin.com/in/damir-akzhigitov/)
- **Website**: [da-mr.com](https://da-mr.com)