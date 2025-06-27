# Dashboard App

A modern, responsive dashboard application built with Next.js 15 and TypeScript, featuring a beautiful UI with charts, analytics, and data visualization components.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) with [Radix UI](https://radix-ui.com) primitives
- **Icons**: [Lucide React](https://lucide.dev)
- **Charts**: [Recharts](https://recharts.org)
- **React Version**: React 19

## 🛠 Key Features

- **Responsive Design**: Mobile-first approach with responsive sidebar navigation
- **Modern UI Components**: Built with shadcn/ui components including cards, tooltips, dropdowns, and sheets
- **Data Visualization**: Interactive charts and analytics dashboard
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Modular component structure with reusable UI elements

## 📦 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── chart/          # Chart components
│   ├── sales/          # Sales-related components
│   ├── sidebar/        # Navigation sidebar
│   └── ui/             # Reusable UI components (shadcn/ui)
└── lib/                # Utilities and helpers
```

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Development

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Adding New Components

This project uses [shadcn/ui](https://ui.shadcn.com) for UI components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

### Styling

The project uses Tailwind CSS 4 with CSS variables for theming. Global styles are defined in `src/app/globals.css`.

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [shadcn/ui](https://ui.shadcn.com) - Re-usable components built using Radix UI and Tailwind CSS
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Recharts](https://recharts.org/en-US/) - Redefined chart library built with React and D3
- [Lucide Icons](https://lucide.dev) - Beautiful & consistent icon toolkit

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
