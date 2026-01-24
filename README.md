# 🛒 Product Builder

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A modern, responsive **Product Management Application** built with React 19, TypeScript, and Tailwind CSS. Create, edit, and manage products with an intuitive user interface featuring modal dialogs, form validation, and color selection.

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Project Structure](#-project-structure) • [Technologies](#-technologies-used)

</div>

---

## ✨ Features

### 🎯 Core Functionality

| Feature | Description |
|---------|-------------|
| ➕ **Create Products** | Add new products with title, description, image URL, price, colors, and category |
| ✏️ **Edit Products** | Modify existing product details through an intuitive edit modal |
| 🗑️ **Delete Products** | Remove products with a confirmation dialog to prevent accidental deletions |
| 📋 **Product Listing** | View all products in a responsive grid layout |

### 🎨 User Interface

- **Responsive Design** - Fully responsive grid system (1-4 columns based on screen size)
- **Modal Dialogs** - Beautiful modal windows powered by Headless UI
- **Toast Notifications** - User feedback with react-hot-toast
- **Color Picker** - Visual color selection with clickable color circles
- **Category Selector** - Dropdown select with image previews
- **Form Validation** - Real-time validation with descriptive error messages

### ✅ Validation Rules

| Field | Validation |
|-------|------------|
| **Title** | 10-80 characters required |
| **Description** | 10-900 characters required |
| **Image URL** | Valid HTTP/HTTPS/FTP URL required |
| **Price** | Valid numeric value required |

---

## 🚀 Demo

### Product Card Preview
Each product card displays:
- 📸 Product image with aspect ratio preservation
- 📝 Title and truncated description
- 🎨 Available color options
- 💰 Price display
- 🏷️ Category icon
- 🔘 Edit & Delete action buttons

---

## 📦 Installation

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** or **pnpm**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ghaida-jaaisa/product-builder-reactjs.git
   cd product-builder-reactjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript compile + Vite build) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📁 Project Structure

```
product-builder-reactjs/
├── 📄 index.html              # Entry HTML file
├── 📄 package.json            # Dependencies and scripts
├── 📄 vite.config.ts          # Vite configuration
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 eslint.config.js        # ESLint configuration
│
├── 📁 public/                 # Static assets
│
└── 📁 src/
    ├── 📄 main.tsx            # Application entry point
    ├── 📄 App.tsx             # Main application component
    ├── 📄 App.css             # Application styles
    ├── 📄 index.css           # Global styles (Tailwind)
    │
    ├── 📁 assets/             # Static assets (images, fonts)
    │
    ├── 📁 components/
    │   ├── 📄 Image.tsx       # Reusable image component
    │   ├── 📄 ProductCard.tsx # Product card display component
    │   │
    │   └── 📁 ui/             # Reusable UI components
    │       ├── 📄 Button.tsx      # Custom button component
    │       ├── 📄 CircleColor.tsx # Color picker circle
    │       ├── 📄 ErrorMessage.tsx# Form error display
    │       ├── 📄 Input.tsx       # Custom input component
    │       ├── 📄 Modal.tsx       # Modal dialog (Headless UI)
    │       └── 📄 Select.tsx      # Category dropdown selector
    │
    ├── 📁 data/
    │   └── 📄 index.ts        # Sample data (products, categories, colors)
    │
    ├── 📁 interfaces/
    │   └── 📄 index.ts        # TypeScript interfaces (IProduct, ICategory, IFormInput)
    │
    ├── 📁 types/
    │   └── 📄 index.ts        # TypeScript type definitions
    │
    ├── 📁 utils/
    │   └── 📄 functions.ts    # Utility functions (txtSlicer)
    │
    └── 📁 validation/
        └── 📄 index.ts        # Form validation logic
```

---

## 🔧 Technologies Used

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19.2.0 | UI library for building component-based interfaces |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 | Type-safe JavaScript with enhanced IDE support |
| [Vite](https://vitejs.dev/) | 7.2.5 | Next-generation frontend build tool |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.18 | Utility-first CSS framework |

### UI Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| [Headless UI](https://headlessui.com/) | 2.2.9 | Unstyled, accessible UI components (Modal, Select) |
| [Heroicons](https://heroicons.com/) | 2.2.0 | Beautiful hand-crafted SVG icons |
| [React Hot Toast](https://react-hot-toast.com/) | 2.6.0 | Lightweight toast notifications |

### Utilities

| Library | Version | Purpose |
|---------|---------|---------|
| [UUID](https://www.npmjs.com/package/uuid) | 13.0.0 | Generate unique identifiers for products |

### Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| [ESLint](https://eslint.org/) | 9.39.1 | JavaScript/TypeScript linting |
| [PostCSS](https://postcss.org/) | 8.5.6 | CSS transformations |
| [Autoprefixer](https://autoprefixer.github.io/) | 10.4.23 | Auto vendor prefixing |

---

## 📊 Data Structures

### Product Interface

```typescript
interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}
```

### Category Interface

```typescript
interface ICategory {
  id?: string;
  name: string;
  imageURL: string;
}
```

### Form Input Interface

```typescript
interface IFormInput {
  id: string;
  name: 'title' | 'description' | 'imageURL' | 'price';
  label: string;
  type: string;
}
```

---

## 🎨 UI Components

### Reusable Components

| Component | Description | Props |
|-----------|-------------|-------|
| `Button` | Customizable button with Tailwind classes | `children`, `className`, `width` |
| `Input` | Styled input field with focus states | Extends `InputHTMLAttributes` |
| `Modal` | Dialog overlay using Headless UI | `isOpen`, `closeModal`, `title`, `children` |
| `Select` | Category dropdown with image previews | `selected`, `setSelected` |
| `CircleColor` | Clickable color circle for selection | `color`, `onClick` |
| `ErrorMessage` | Form validation error display | `msg` |
| `Image` | Optimized image component | `imageURL`, `alt`, `className` |
| `ProductCard` | Product display card with actions | `product`, handlers |

---

## ⚙️ Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration with React plugin |
| `tsconfig.json` | Base TypeScript configuration |
| `tsconfig.app.json` | App-specific TypeScript settings |
| `tsconfig.node.json` | Node.js TypeScript settings |
| `eslint.config.js` | ESLint rules and plugins |

---

## 🔒 Form Validation

The application includes comprehensive client-side validation:

```typescript
// Validation function validates:
// - Title: 10-80 characters
// - Description: 10-900 characters  
// - Image URL: Valid URL format (http/https/ftp)
// - Price: Valid numeric value
```

Real-time error messages guide users to correct invalid inputs before submission.

---

## 📱 Responsive Design

The product grid automatically adjusts based on screen size:

| Screen Size | Columns |
|-------------|---------|
| Mobile (`<768px`) | 1 column |
| Tablet (`768px-1024px`) | 2 columns |
| Desktop (`1024px-1280px`) | 3 columns |
| Large Desktop (`>1280px`) | 4 columns |

---

## 🚀 Future Enhancements

- [ ] Persistent storage (Local Storage / Database)
- [ ] Product search and filtering
- [ ] Image upload functionality
- [ ] User authentication
- [ ] Shopping cart integration
- [ ] Product sorting options

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Ghaida Jaaisa**

- GitHub: [@Ghaida-jaaisa](https://github.com/Ghaida-jaaisa)

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)
- [Unsplash](https://unsplash.com/) for sample product images

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**

Made with ❤️ using React & TypeScript

</div>
