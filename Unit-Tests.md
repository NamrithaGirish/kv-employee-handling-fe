npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react


Update the folder structure like below

```bash
src/
├── api-service/
├── assets/
├── components/
├── hooks/
├── pages/
├── store/
├── tests/
│   ├── pages/
│   │   └── login.test.tsx
│   └── setup.ts
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
├── vitest.config.ts


```

setup.ts

```ts

import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
}) 
```

vitest.config.ts

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/tests/setup.ts'],
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
}) 

```

Under package.json add scripts fro tests
```json
 "test": "vitest",
 "test:coverage": "vitest run --coverage",
 "test:ci": "vitest run --reporter=verbose --coverage"

```

Mocks


Test 1
Match Snapshot
```js
should match snapshot

```

Test 2
Render login form with all required elements

Check if username is present in screen
Check if password is present in screen
Check if button of type submit is present in screen

Test 3
Should show error when username is too long

Get reference to username input
Fire on change event of input

Check if the error message is in the screen

Test 4
Should handle successful login

Get reference to username, password and button
Fire events for onchange and submit button

Check if navigation and mock function has been clicked

Test 5
Should handle login failure

Check for error message in document

Test 6
Should focus username input on mount


Test 7
Should clear error when username length is valid
