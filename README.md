# Baku Electronics

A modern e-commerce platform built with Next.js, featuring a sleek UI and comprehensive shopping experience for electronics products.

## 🚀 Features

- **Product Catalog** - Browse and search through a wide range of electronics
- **Shopping Cart** - Add products to cart with persistent storage
- **Wishlist** - Save favorite products for later
- **Hero Section** - Dynamic slider showcasing featured products
- **Services Section** - Display key services and features
- **Blog Section** - Latest news and articles
- **Partners** - Showcase trusted brand partners
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Fully responsive layout for all devices
- **Category Navigation** - Easy product category browsing

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15.3.2
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **UI Library**: [React](https://react.dev/) 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Carousel**: [React Slick](https://react-slick.neostack.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/baku-electronics.git
   cd baku-electronics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
baku-electronics/
├── pages/                 # Next.js pages and API routes
│   ├── api/              # API services and endpoints
│   ├── _app.tsx          # App wrapper with providers
│   ├── _document.tsx     # Custom document
│   ├── index.tsx         # Home page
│   ├── cart.tsx          # Shopping cart page
│   └── wishlist.tsx      # Wishlist page
├── src/
│   ├── components/       # React components
│   │   ├── home/         # Home page components
│   │   └── layout/       # Layout components
│   ├── context/          # React context providers
│   ├── shared/           # Shared utilities and mocks
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
│   └── assets/           # Images, fonts, icons
├── styles/               # Global styles
└── package.json          # Dependencies and scripts
```

## 🔌 API Configuration

The project supports API integration. To use a real API:

1. Create a `.env.local` file in the root directory
2. Add your API base URL:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
   ```

By default, the project uses mock data, so no API configuration is required for development.

## 🎨 Features in Detail

### Shopping Cart
- Add/remove products
- Persistent storage using localStorage
- Real-time cart updates

### Wishlist
- Save favorite products
- Persistent storage
- Easy product management

### Dark Mode
- Toggle between light and dark themes
- User preference persistence

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- All contributors and open-source libraries used in this project

---

Made with ❤️ using Next.js
