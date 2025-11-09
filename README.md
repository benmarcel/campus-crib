# Campus Crib

Campus Crib is a responsive web app that helps students find affordable off-campus accommodation near their schools.
Built with React + TypeScript, styled with Tailwind CSS, and designed for static deployment (Vercel, Netlify, or GitHub Pages).

## ✨ Features

🔍 Search & Filter — find listings by school, location, price range, or house type.

🏘️ Property Listings Grid — responsive card layout showcasing each accommodation.

💾 Saved Listings — keep track of your favourite apartments (planned feature).

👯 Find-Roomie Section — connect with other students looking for roommates (planned).

📱 Mobile-First Design — optimized for both desktop and mobile users.

⚡ Static Deployment — no backend required; data loads from a JSON file.

## 🧱 Tech Stack
Category	Technology
Frontend	React 18 + TypeScript
Styling	Tailwind CSS
Routing	React Router DOM
Data Source	Static listings.json file
Deployment	Vercel / Netlify / GitHub Pages

## 🗂️ Project Structure
src/
 ┣ components/
 ┃ ┣ Navbar.tsx
 ┃ ┣ SearchBar.tsx
 ┃ ┣ ListingCard.tsx
 ┃ 
 ┣ pages/
 ┃ ┗ ListingsPage.tsx
 ┣ types/
 ┃ ┗ index.ts
 ┣ assets/
 ┃ ┗ campus-crib-logo.png
 ┣ listings.ts
 ┣ App.tsx
 ┗ main.tsx

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/yourusername/campus-crib.git
cd campus-crib


2️⃣ Install dependencies

npm install


3️⃣ Run the app in development

npm run dev


The app will be available at http://localhost:5173

4️⃣ Build for production

npm run build

## Note 
This just the code implementation of one of my designs so it focuses more on ui rather than functionality