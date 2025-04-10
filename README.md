# Commity – AI Coding Assistant with GitHub/GitLab Integration

Commity is an AI-powered coding assistant that connects to your GitHub or GitLab repositories, allowing you to manage your codebase and tasks through a simple chat interface.

![screenshot](landing.png)

> Think: GitHub Copilot meets ChatGPT meets DevOps automation.

---

## ✨ Features

- 🔍 Browse and select repositories
- 💬 Chat with an AI assistant that knows your repo
- 🛠️ Generate or refactor code
- 🐛 Create and manage GitHub/GitLab issues
- 🚀 Open pull/merge requests
- ✅ Generate unit tests and CI configs
- 🧠 Suggest ideas and improvements
- 🔐 Self-hosted ready (Docker)


---

## 🧑‍💻 Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Node.js, REST APIs
- **Database**: PostgreSQL (via Supabase or Prisma)
- **AI**: OpenAI GPT-4o / local LLM support
- **VCS**: GitHub & GitLab API integration

---

## 🚀 Getting Started

```bash
git clone https://github.com/yourusername/gitgeist.git
cd gitgeist
cp .env.example .env
npm install
npm run dev
```


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

