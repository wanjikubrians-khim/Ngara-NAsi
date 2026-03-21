# 🧺 Ng'ara Supuu – Cleaning & Laundry Service Website

A modern, responsive website for Ng'ara Supuu, a professional cleaning and laundry service based in Roysambu, Nairobi. The site showcases services, pricing, gallery, and enables customers to book appointments and inquire online.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Services Offered](#services-offered)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [How to Customize](#how-to-customize)
- [Contact](#contact)

## ✨ Features

- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices
- **Mobile Menu** – Hamburger navigation for seamless mobile browsing
- **Smooth Scrolling** – Elegant scroll behavior with active navigation highlighting
- **Service Showcasing** – Dedicated sections for different cleaning services
- **Pricing Table** – Clear, transparent pricing information
- **Gallery Section** – Visual display of completed projects
- **Booking Form** – Online appointment request submission via FormSubmit
- **Toast Notifications** – Real-time feedback for user actions
- **Professional Design** – Custom color scheme with a modern, clean aesthetic
- **SEO Optimized** – Proper meta tags and semantic HTML

## 📁 Project Structure

```
Ngara-NAsi/
├── index.html       # Main HTML file with all sections
├── style.css        # Complete stylesheet with responsive design
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

### File Descriptions

| File | Purpose |
|------|---------|
| **index.html** | Contains the website structure including navigation, hero section, services, pricing, gallery, about, and contact/booking form |
| **style.css** | Responsive styling with custom color variables, animations, and mobile-first approach |
| **script.js** | Client-side functionality: mobile menu toggle, form submission, and active navigation highlighting |

## 🧹 Services Offered

- Professional laundry services
- Deep cleaning
- Sofa & mattress sanitizing
- Office cleaning
- Additional custom services upon request

## 💻 Technologies Used

- **HTML5** – Semantic markup
- **CSS3** – Modern styling with CSS variables, flexbox, and grid
- **JavaScript (Vanilla)** – DOM manipulation and interactivity
- **Google Fonts** – Syne & Plus Jakarta Sans typography
- **FormSubmit.co** – Email form backend integration
- **Responsive Design** – Mobile-first approach

### Color Palette

| Color | CSS Variable | Usage |
|-------|--------------|-------|
| Teal | `--teal`, `--teal2`, `--teal-lt` | Primary accent color |
| Gold | `--gold`, `--gold-lt` | Highlights and accents |
| Coral | `--coral`, `--coral-lt` | Secondary accent |
| Sky Blue | `--sky`, `--sky-lt` | Additional accents |
| Lime | `--lime`, `--lime-lt` | Additional accents |

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side setup required – it's a static website

### Steps

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/wanjikubrians-khim/Ngara-NAsi.git
   cd Ngara-NAsi
   ```

2. **Open in browser**
   - Double-click `index.html` to open locally, or
   - Use a local server for better development:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   ```

3. **Access the site**
   - Open `http://localhost:8000` in your browser

## 📖 Usage

### Navigation Sections

- **Home** – Hero section with brand introduction
- **Services** – Details of all offered services
- **Pricing** – Service pricing and packages
- **Gallery** – Photo gallery of completed work
- **About** – Company/service information
- **Contact** – Booking form and inquiry submission

### JavaScript Functions

| Function | Purpose |
|----------|---------|
| `toggleMenu()` | Toggle mobile menu open/closed |
| `closeMenu()` | Close mobile menu |
| `submitForm(e)` | Handle booking form submission via FormSubmit.co |
| `showToast()` | Display notification toast |

## 🎨 How to Customize

### Change Service Email
Edit `script.js` line with FormSubmit email:
```javascript
fetch('https://formsubmit.co/ajax/YOUR-EMAIL@example.com', {
```

### Update Services Section
Edit the services content in `index.html` under the `#services` section.

### Modify Colors
Edit CSS variables in `style.css` `:root` section:
```css
:root {
  --teal: #0f7b6c;
  --gold: #e8a020;
  /* ... change as needed ... */
}
```

### Update Pricing
Edit the pricing table in `index.html` under the `#pricing` section.

### Add Gallery Images
Add images to the gallery section in `index.html` and ensure proper file paths.

### Customize Footer
Edit footer content in the `<footer>` section of `index.html`.

## 📞 Contact

- **Location** – Roysambu, Nairobi
- **Email** – ngarafresh@yopmail.com
- **Services** – Professional cleaning and laundry
- **Booking** – Use the booking form on the website or contact WhatsApp/call

## 📜 License

This project is maintained by wanjikubrians-khim. Please contact for usage permissions.

---

**Built with ❤️ for Ng'ara Supuu**