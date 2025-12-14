# Preego Digital India E-commerce Website

A modern, full-featured e-commerce website built with React, TypeScript, and Supabase for Preego Digital India Pvt Ltd.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **User Authentication**: Secure sign-up/sign-in with Supabase Auth
- **Product Catalog**: Browse products with filtering and search
- **Shopping Cart**: Add/remove items with persistent storage
- **Order Management**: Complete order processing system
- **Database Integration**: Supabase PostgreSQL database
- **Real-time Updates**: Live data synchronization

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: Zustand
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd preego-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🗄️ Database Setup

The project uses Supabase for the backend. Run the migration files to set up the database schema:

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Run the migration files in the `supabase/migrations` folder

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── services/           # API service functions
├── store/              # State management
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── constants/          # Application constants
└── data/               # Static data and mock data
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The design follows modern e-commerce best practices with:

- Clean, minimalist design
- Consistent color scheme
- Responsive breakpoints
- Smooth animations and transitions
- Accessible UI components

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### VS Code Setup

The project includes VS Code configuration for optimal development experience:

- Recommended extensions
- Auto-formatting on save
- TypeScript and Tailwind CSS IntelliSense
- ESLint integration

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your hosting platform**
   The `dist` folder contains the production build

## 📱 Features Overview

### User Features
- Browse product catalog
- Search and filter products
- Add items to cart
- User registration and login
- Order placement and tracking
- Responsive mobile experience

### Admin Features (Future)
- Product management
- Order management
- User management
- Analytics dashboard

## 🔒 Security

- Secure authentication with Supabase Auth
- Row Level Security (RLS) policies
- Input validation and sanitization
- HTTPS enforcement in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Preego Digital India Pvt Ltd.

## 📞 Support

For support, email info@preegodigital.com or contact +91 98765 43210.