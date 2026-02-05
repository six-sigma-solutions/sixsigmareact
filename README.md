# Six Sigma Solutions - React Website

A modern React-based website for Six Sigma Solutions, converted from a static HTML/CSS/JS site.

## 🚀 Tech Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Icon library
- **AOS** - Animate on Scroll library

## 📁 Project Structure

```
six-sigma-react/
├── public/
│   └── img/              # Static images (logo, team photos, etc.)
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SocialIcons.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsConditions.jsx
│   ├── styles/           # CSS files
│   │   └── index.css
│   ├── App.jsx           # Main app with routing
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your images:**
   Copy your images to the `public/img/` folder:
   - `Six Sigma logo.png` - Company logo
   - `1.png`, `2.png`, `3.png` - Team member photos
   - `business.json` - Lottie animation file
   - Service images (optional)

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main landing page with hero, services, team, FAQ |
| `/contact` | Contact | Contact form with validation |
| `/privacy-policy` | Privacy Policy | Legal privacy information |
| `/terms-and-conditions` | Terms | Legal terms and conditions |

## 🔧 Configuration

### Tailwind CSS
Custom colors and fonts are configured in `tailwind.config.js`:
- `navy`: #0A2540
- `teal`: #14B8A6
- Fonts: Baloo Bhaijaan 2, Poppins

### Contact Form
The contact form submits to a Google Apps Script endpoint. Update the URL in `src/pages/Contact.jsx` if needed.

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Features

- Smooth scroll navigation
- Animated service cards with hover effects
- FAQ accordion
- Form validation with debounced feedback
- Social media icons with hover animations
- AOS scroll animations
- Mobile-friendly navigation

## 📝 License

© 2026 Six Sigma Solutions. All rights reserved.
