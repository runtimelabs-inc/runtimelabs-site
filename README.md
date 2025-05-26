# Runtime Labs – Landing Page

This is the public landing site for [Runtime Labs](https://runtimelabs.ai), built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It introduces the project’s vision and links to documentation, GitHub, and contact.

## Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/) for deployment

## Getting Started (Local Dev)

Clone the repo and install dependencies:

```
git clone https://github.com/runtimelabs-inc/runtimelabs-site.git  
cd runtimelabs-site  
npm install  
npm run dev
```

Then visit http://localhost:3000 to view the site.

## Deployment on Vercel

1. Go to https://vercel.com and log in.
2. Click “Add New Project”.
3. Import your GitHub repository (`runtimelabs-site`).
4. Accept default settings (Next.js auto-detected).
5. Click “Deploy”.

## Custom Domain Configuration

### Add Domain in Vercel

- Go to your deployed project → Settings > Domains
- Add `runtimelabs.ai`

### Configure DNS at Registrar (e.g., GoDaddy)

If using root domain:

```
Type: A  
Name: @  
Value: 76.76.21.21
```

Save and wait 5–15 minutes for propagation. HTTPS is handled automatically.



## Tailwind CSS Setup

Tailwind is configured using JIT mode and dark mode support via class strategy. Make sure the following setup is in place:

### 1. Global Styles

Ensure `styles/global.css` includes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  @apply font-sans bg-black text-gray-100 leading-relaxed tracking-tight;
}
```

### 2. Tailwind Configuration

```js
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        runtime: {
          primary: '#3B82F6',
          accent: '#4ADE80',
          dark: '#111827',
          gray: '#4B5563'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
```

### 3. `_app.tsx` Imports 

```tsx
import '../styles/global.css'
```


### 4. Restart Dev Server 

```
npm run dev
```


## Contact

- Email: derek@runtimelabs.ai
- GitHub: https://github.com/runtimelabs-inc
- Docs: https://docs.runtimelabs.ai
