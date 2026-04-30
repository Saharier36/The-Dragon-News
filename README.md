# 🐉 The Dragon News

A modern, responsive news website built with Next.js, featuring user authentication, categorized news articles, and an intuitive user interface.

## Purpose

The Dragon News was built to provide users with a seamless news reading experience, allowing them to explore articles by categories, stay updated with breaking news, and manage their accounts securely. It solves the problem of cluttered news consumption by organizing content efficiently and offering a clean, mobile-friendly design.

## Live URL

🔗 [the-dragon-news-kappa.vercel.app](https://the-dragon-news-kappa.vercel.app/)

## Key Features

- **User Authentication**: Secure login and registration with Better Auth
- **News Categories**: Browse news by categories with a dynamic sidebar
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Breaking News**: Real-time marquee displaying latest headlines
- **News Details**: In-depth article pages with full content
- **User Dashboard**: Personalized welcome message and avatar display
- **Form Validation**: Robust input validation using React Hook Form

## Tech Stack

| Layer            | Technology                     |
| ---------------- | ------------------------------ |
| Framework        | Next.js 16.2.4                 |
| UI Library       | React 19.2.4                   |
| Styling          | Tailwind CSS 4, DaisyUI 5.5.19 |
| Authentication   | Better Auth 1.6.9              |
| Database         | MongoDB 7.2.0                  |
| State Management | React Hooks                    |
| Icons            | React Icons 5.6.0              |
| Forms            | React Hook Form 7.74.0         |
| Notifications    | React Toastify 11.1.0          |
| Marquee          | React Fast Marquee 1.6.5       |
| Date Handling    | date-fns 4.1.0                 |

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Saharier36/The-Dragon-News.git
cd the-dragon-news
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
the-dragon-news/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.jsx          # Login page
│   │   │   └── register/
│   │   │       └── page.jsx          # Registration page
│   │   ├── (main)/
│   │   │   ├── page.jsx              # Home page (redirects to category)
│   │   │   ├── about-us/
│   │   │   │   └── page.jsx          # About page
│   │   │   ├── career/
│   │   │   │   └── page.jsx          # Career page
│   │   │   ├── category/
│   │   │   │   └── [id]/
│   │   │   │       └── page.jsx      # Category news page
│   │   │   └── news/
│   │   │       └── [id]/
│   │   │           └── page.jsx      # Individual news article page
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.js       # Authentication API routes
│   │   ├── globals.css               # Global styles
│   │   ├── layout.jsx                # Root layout
│   │   ├── loading.jsx               # Loading component
│   │   └── not-found.jsx             # 404 page
│   ├── assets/                       # Static assets (images, icons)
│   ├── components/
│   │   ├── homepage/
│   │   │   └── news/
│   │   │       ├── EmptyNews.jsx     # No news placeholder
│   │   │       ├── LeftSidebar.jsx   # Category sidebar
│   │   │       ├── NewsCard.jsx      # News article card
│   │   │       └── RightSidebar.jsx  # Additional content sidebar
│   │   └── shared/
│   │       ├── BreakingNews.jsx      # Breaking news marquee
│   │       ├── Header.jsx            # Site header
│   │       ├── Navbar.jsx            # Navigation bar with auth
│   │       └── NavLink.jsx           # Navigation link component
│   ├── lib/
│   │   ├── auth-client.js            # Better Auth client setup
│   │   └── auth.js                   # Authentication configuration
│   └── service/
│       └── data.js                   # API service functions
├── public/                           # Public assets
├── package.json                      # Dependencies and scripts
├── tailwind.config.mjs               # Tailwind configuration
├── next.config.mjs                   # Next.js configuration
├── postcss.config.mjs                # PostCSS configuration
├── jsconfig.json                     # JavaScript configuration
├── eslint.config.mjs                 # ESLint configuration
└── README.md                         # Project documentation
```

## Author

**Saharier Omi**

- GitHub: [Saharier36](https://github.com/Saharier36)
- LinkedIn: [in/saharier-omi](https://www.linkedin.com/in/saharier-omi/)
