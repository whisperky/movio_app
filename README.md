# Movio - Movie Management Application

A modern web application for managing and viewing movies, built with Next.js, Chakra UI, and TypeScript.

## Features

- 🎬 Movie Management (Create, Edit, View)
- 🔐 User Authentication
- 📱 Responsive Design
- 🎨 Modern UI with Chakra UI
- 🌙 Dark Mode Support

## Tech Stack

- [Next.js](https://nextjs.org/) - React Framework
- [Chakra UI](https://chakra-ui.com/) - Component Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd movio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── create-movie/   # Create Movie Page
│   ├── edit-movie/     # Edit Movie Page
│   ├── login/          # Login Page
│   └── movies/         # Movies List Page
├── components/         # Reusable Components
├── services/          # API Services
└── ui/                # UI Components
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started)
