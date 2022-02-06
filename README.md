# next.start

Next.js, Typescript, Stitches, Radix-UI Components Starter Project

## Features

- ⚡️ Next.js 12
- ⚛️ React 17
- ⛑ TypeScript
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 📄 Commitizen — To define a standard way of committing rules
- 🚓 Commitlint — Make sure your commit messages follow the convention
- 🖌 Renovate — Keep your dependencies up to date
- 🚫 lint-staged — To run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on all Pull Requests
- ⚙️ EditorConfig - Maintain consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

### Get started

```
npx create-next-app -e https://github.com/chvndler/next.start
# or
yarn create next-app -e https://github.com/chvndler/next.start
```

### Development

To start the project locally, run:

```bash
npm install
```

Open `http://localhost:3000` with your browser to see the result.

### Scripts

npx

- `next dev` — Starts the application in development mode at `http://localhost:3000`.
- `next build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
