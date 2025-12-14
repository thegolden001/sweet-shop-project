# VS Code Setup Guide for Preego Digital India E-commerce

## 🚀 Quick Setup (5 minutes)

### 1. **Install Node.js** (if not already installed)
- Download from: https://nodejs.org/
- Choose LTS version (recommended)
- Verify installation: `node --version` and `npm --version`

### 2. **Install VS Code Extensions** (Auto-prompted when you open the project)
The project includes `.vscode/extensions.json` that will automatically suggest these extensions:

**Essential Extensions:**
- **ES7+ React/Redux/React-Native snippets** - React code snippets
- **TypeScript Importer** - Auto import TypeScript modules
- **Tailwind CSS IntelliSense** - Tailwind class autocomplete
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Auto Rename Tag** - Rename HTML/JSX tags automatically
- **Bracket Pair Colorizer** - Color matching brackets
- **GitLens** - Enhanced Git capabilities

### 3. **Project Dependencies** (Already configured)
```bash
# All dependencies are in package.json
npm install  # This installs everything automatically
```

### 4. **Environment Variables Setup**
Create `.env` file in root directory:
```env
VITE_SUPABASE_URL=https://mqppuhapoaclznvumxcw.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcHB1aGFwb2FrbHpudnVteGN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMzMzNzksImV4cCI6MjA2NDgwOTM3OX0.bMt6cQqIoPH9pk5raq_YCXM19xv8npOGm18e4AAraMs
```

## 🔥 **How Backend Works in VS Code**

### **Supabase Integration:**
```typescript
// This runs in your browser, not on a local server
import { supabase } from './lib/supabase';

// All these work in VS Code development:
const { data, error } = await supabase
  .from('products')
  .select('*');
```

### **No Local Backend Server Needed:**
- ✅ Supabase handles database
- ✅ Supabase handles authentication  
- ✅ Supabase handles file storage
- ✅ All via HTTPS API calls

### **Development Workflow:**
1. **Code in VS Code** - Full IntelliSense support
2. **Run `npm run dev`** - Starts Vite dev server
3. **Browser opens** - Your app connects to Supabase cloud
4. **Real-time updates** - Changes reflect immediately

## 🎯 **VS Code Features You'll Get:**

### **IntelliSense & Autocomplete:**
- TypeScript definitions for all Supabase functions
- Tailwind CSS class suggestions
- React component props autocomplete
- Import path suggestions

### **Debugging:**
- Browser DevTools integration
- React Developer Tools
- Network tab for API calls
- Console logging

### **Code Quality:**
- ESLint error highlighting
- Prettier auto-formatting
- TypeScript error checking
- Git integration

## 🚀 **Running the Project:**

### **Terminal Commands in VS Code:**
```bash
# Install dependencies (one time)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

### **VS Code Integrated Terminal:**
- Press `Ctrl+` ` (or `Cmd+` ` on Mac)
- Run commands directly in VS Code
- Multiple terminal tabs supported

## 🔧 **Troubleshooting:**

### **If Supabase doesn't work:**
1. Check `.env` file exists and has correct values
2. Verify internet connection
3. Check browser console for errors
4. Ensure Supabase project is active

### **If TypeScript errors:**
1. Restart TypeScript server: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"
2. Check `tsconfig.json` is properly configured
3. Ensure all dependencies are installed

### **If Tailwind CSS doesn't work:**
1. Check `tailwind.config.js` exists
2. Verify `@tailwind` directives in `src/index.css`
3. Restart dev server

## 📱 **Mobile Development:**
- Responsive design works in browser
- Use browser DevTools device simulation
- Test on actual devices via network IP

## 🌐 **Production Deployment:**
- Build with `npm run build`
- Deploy `dist` folder to any static hosting
- Netlify, Vercel, GitHub Pages all work

## ✅ **What You DON'T Need:**
- ❌ Local database server
- ❌ Docker containers  
- ❌ Complex backend setup
- ❌ Server management
- ❌ Database administration

## 🎉 **Ready to Code!**
Everything is configured for immediate development in VS Code!