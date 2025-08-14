# 🏡 Productive Real Estate

A modern, responsive real estate web application built with React, Vite, and Tailwind CSS. Find your dream home with our intuitive property search and browsing experience.

![Productive Real Estate](https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

### 🔍 Property Search & Discovery
- **Advanced Search**: Filter properties by location, type, price range, and bedrooms
- **Interactive Property Cards**: Beautiful cards with property images, details, and favorite functionality
- **Property Details**: Comprehensive property pages with image galleries and specifications
- **Mobile-First Design**: Optimized for mobile devices with responsive layouts

### 👥 Agent Profiles
- **Expert Team**: Meet our professional real estate agents
- **Agent Specialties**: View each agent's areas of expertise and experience
- **Direct Contact**: Call or email agents directly from their profiles
- **Performance Metrics**: See agent ratings, sales history, and client testimonials

### 📞 Contact & Communication
- **Contact Forms**: Multiple inquiry types for different needs
- **Business Information**: Office hours, location, and contact details
- **Consultation Booking**: Schedule free consultations with our experts

### 🎨 Modern UI/UX
- **Clean Design**: Modern, card-based interface with soft shadows and rounded corners
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Consistent Branding**: Professional color scheme with cyan/teal accents
- **Accessibility**: Built with accessibility best practices in mind

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/naimulhasannabil/Real-Estate-App.git
   cd real_estate_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── PropertyCard.jsx      # Reusable property card component
│   ├── home/
│   │   ├── HeroSection.jsx       # Main hero section
│   │   ├── FeaturedProperties.jsx # Featured properties showcase
│   │   ├── SearchSection.jsx     # Property search functionality
│   │   ├── StatsSection.jsx      # Company statistics
│   │   ├── ServicesSection.jsx   # Services overview
│   │   ├── TestimonialsSection.jsx # Client testimonials
│   │   └── CTASection.jsx        # Call-to-action section
│   └── layout/
│       ├── Header.jsx            # Navigation header
│       └── Footer.jsx            # Site footer
├── data/
│   └── properties.js             # Property and agent data
├── pages/
│   ├── HomePage.jsx              # Home page
│   ├── PropertiesPage.jsx        # Property listings
│   ├── PropertyDetailsPage.jsx   # Individual property details
│   ├── AgentsPage.jsx            # Agent profiles
│   └── ContactPage.jsx           # Contact form and info
├── App.jsx                       # Main app component
├── main.jsx                      # App entry point
└── index.css                     # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Cyan/Teal (`#06b6d4`, `#0891b2`)
- **Secondary**: Blue (`#0ea5e9`, `#0284c7`)
- **Accent**: Rose (`#f43f5e`, `#e11d48`)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800
- **Line Heights**: 1.6 for body text, 1.2 for headings

### Components
- **Cards**: Rounded corners (2xl), soft shadows, hover effects
- **Buttons**: Primary and secondary variants with hover states
- **Inputs**: Consistent styling with focus states
- **Animations**: Fade-in, slide-up, and float animations

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)

## 🔧 Customization

### Adding New Properties
Edit `src/data/properties.js` to add new properties:

```javascript
{
  id: 7,
  title: "Your Property Title",
  price: 500000,
  type: "House",
  bedrooms: 3,
  bathrooms: 2,
  sqft: 2000,
  address: "123 Main St, City, State",
  description: "Property description...",
  images: ["image1.jpg", "image2.jpg"],
  featured: true,
  agent: "Agent Name",
  agentId: 1,
  // ... other properties
}
```

### Styling Customization
Modify `tailwind.config.js` to customize colors, fonts, and other design tokens:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

## 🌟 Features Roadmap

- [ ] User authentication and profiles
- [ ] Property favorites and saved searches
- [ ] Virtual property tours
- [ ] Mortgage calculator integration
- [ ] Real-time chat with agents
- [ ] Property comparison tool
- [ ] Advanced map integration
- [ ] Email notifications for new listings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



---

<div align="center">
  <p>Built with ❤️ by the Productive Real Estate Team</p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-contributing">Contributing</a>
  </p>
</div>
