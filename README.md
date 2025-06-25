# 💸 PayBill – Smart Online Bill Payment Platform

**Live Site:** []()

> **PayBill** is a secure and modern bill payment platform built with React, Firebase Authentication, and Tailwind CSS. It enables users to register, log in, view pending bills, make real-time payments, and track their payment history — all within a sleek, fully responsive interface.

---

## 🛠 Technologies Used

- ⚛️ React.js  
- 🔀 React Router DOM  
- 🔐 Firebase Authentication  
- 🎨 Tailwind CSS  
- 🌐 React Context API  
- 📢 React Toastify  
- 🖼️ React Icons  

---

## 🚀 Features

### 🔐 Authentication System

- Email/Password registration and login  
- Optional Google Sign-In  
- Protected routes for authenticated users (e.g., My Profile, My Bills, Pay Now)

---

### 💳 Smart Bill Payment Flow

- View a list of pending bills with organization logos  
- Click **Pay Now** to view bill details and confirm payment  
- Payment amount is deducted from user's profile balance in real-time  
- Payment info is stored in-memory and reflected in the UI  
- Confirmation messages shown on successful transactions  

---

### 📜 My Bills (Payment History)

- View a list of all previously paid bills  
- Accessible only to authenticated users  
- Redirects to login if user is not authenticated  

---

### 👤 My Profile Page

- Displays user's email, display name, and profile photo (if available)  
- Live balance updates after each payment  
- Organized and visually clean layout  

---

### 🔔 Notifications & Feedback

- Smooth toast messages for actions (success, error) using **React Toastify**  
- Modal confirmations before critical actions like payment  

---

### 🎨 Responsive & Clean UI

- Fully responsive layout for mobile, tablet, and desktop  
- Minimal and modern design implemented with **Tailwind CSS**  
- Consistent and intuitive user experience across all devices  

---

## 📁 Project Structure

The project is organized into the following main folders and files:

```
src/
├── assets/             # Logos, icons, and static assets
├── components/         # Reusable UI components (Navbar, Modals, Cards, etc.)
├── context/            # React Context (e.g., AuthContext)
├── pages/              # Application pages (Home, Login, Register, Profile, Bills, PayPage)
├── routes/             # ProtectedRoute and routing setup
├── App.jsx             # Root component with route definitions
├── main.jsx            # Entry point
└── index.css           # Tailwind base styles
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in your project root and add your Firebase credentials:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

> ⚠️ *Do not commit your actual API keys or sensitive information to version control.*

---

## 🧪 Local Setup Instructions

To run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/paybill-platform.git
cd paybill-platform
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## ✅ Future Improvements

- Store payment data in a database (e.g., Firebase Firestore)
- Add balance top-up functionality
- Improve accessibility and keyboard navigation
- Add test coverage for key components

---


> 🚀 **PayBill** — A smarter way to pay your bills, faster and safer.
