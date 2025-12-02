# @soundbluemusic/config

Shared configuration package for SoundBlueMusic projects (ESLint, TypeScript, Prettier, Vite, Browserslist)

## Installation

```bash
npm install @soundbluemusic/config --save-dev
```

## Usage

### ESLint

Create `eslint.config.js` in your project:

```js
import baseConfig from '@soundbluemusic/config/eslint';

export default baseConfig;
```

Or extend with custom rules:

```js
import baseConfig from '@soundbluemusic/config/eslint';

export default [
  ...baseConfig,
  {
    rules: {
      // your custom rules
    },
  },
];
```

### Prettier

Add to your `package.json`:

```json
{
  "prettier": "@soundbluemusic/config/prettier"
}
```

Or create `prettier.config.js`:

```js
import prettierConfig from '@soundbluemusic/config/prettier';

export default prettierConfig;
```

### TypeScript

Create `tsconfig.json` in your project:

**For base TypeScript projects:**

```json
{
  "extends": "@soundbluemusic/config/typescript/base"
}
```

**For React projects:**

```json
{
  "extends": "@soundbluemusic/config/typescript/react",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### Vite

Create `vite.config.ts` in your project:

```ts
import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import baseConfig from '@soundbluemusic/config/vite';

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [react()],
    // your project-specific config
  })
);
```

### Browserslist

Add to your `package.json`:

```json
{
  "browserslist": ["extends @soundbluemusic/config/browserslist"]
}
```

Or create `.browserslistrc`:

```
extends @soundbluemusic/config/browserslist
```

## Included Configurations

| Config | Description |
|--------|-------------|
| `eslint` | ESLint flat config with TypeScript, React Hooks, React Refresh, and React Compiler support |
| `prettier` | Prettier formatting rules |
| `typescript/base` | Base TypeScript configuration |
| `typescript/react` | TypeScript configuration for React projects (extends base) |
| `vite` | Vite build configuration with optimized defaults |
| `browserslist` | Browser support targets |

## Peer Dependencies

This package requires the following peer dependencies:

- `eslint` ^9.9.0
- `prettier` ^3.4.2
- `typescript` ^5.5.3
- `vite` ^7.2.6

## License

MIT
