# mdp-sdk-package

This TypeScript-based SDK simplifies API integrations, allowing seamless interaction with REST APIs using Axios. Designed with type safety in mind, it leverages DTOs, Mappers, and Branded Types to ensure a modular architecture and robust data handling. The package provides a streamlined approach to making HTTP requests (GET, POST, PUT, DELETE), offering a clean and efficient interface layer between your application and the API.

## ✨ Features

- 🔧 Type-safe API service layer using Axios.
- 🔁 DTO & Mapper-based transformation for data consistency.
- 🧩 Modular architecture for flexibility.
- 📦 Supports ESM & CJS (dual-package).
- 🔒 TypeScript Branded Types for identifiers.
- ⚙️ Built with `tsup` and released via `release-it`.

---

## 📦 Installation

Install the package using your preferred package manager:

```bash
pnpm add mdp-sdk-package
# or
npm install mdp-sdk-package
# or
yarn add mdp-sdk-package
```

---

## 🔧 Usage

### 1. Create an Axios client:

To use the SDK, you need to create a client and pass the `baseURL` where your API is hosted. In this case, we are using the free `jsonplaceholder` API for demo purposes.

```ts
import { createClient } from 'mdp-sdk-package';

const client = createClient('https://jsonplaceholder.typicode.com');

// Use the userServices to interact with user-related API endpoints.
const user = await client.userServices.get({ id: 1 });
console.log(user);
```

In this example, the `baseURL` is set to `https://jsonplaceholder.typicode.com/`. You can replace it with the base URL of your own API if necessary.

### 2. `createClient`:

The `createClient` function allows you to set the base URL of your API and provides access to the service methods. You can initialize the client like this:

```ts
const client = createClient('https://jsonplaceholder.typicode.com');
```

This client provides access to the `userServices` which allows you to make API calls related to users.

---

## 🏗️ Build

To build the project, use the following command:

```bash
pnpm build
```

This will generate the following files in the `dist/` directory:

- `index.cjs`
- `index.mjs`
- `index.d.ts`

These files are ready to be published or used in your projects.

---

## 🚀 Release

To release a new version, use:

```bash
pnpm release
```

This command is handled by `release-it` and will automate version bumping, changelog generation, and publishing.

---
