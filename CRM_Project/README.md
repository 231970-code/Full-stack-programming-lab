# CRM System — MERN + Next.js
### Full Stack Programming — Final Term Project

---

## FOLDER STRUCTURE

```
Final_Term_Project_CRM/
│
├── README.md                          ← You are here
│
├── backend/                           ← Node.js + Express + MongoDB
│   ├── .env                           ← Environment variables
│   ├── package.json                   ← Backend dependencies
│   ├── server.js                      ← Main server entry point
│   ├── seed.js                        ← Script to add 15 sample customers
│   ├── controllers/
│   │   ├── authController.js          ← Register / Login logic
│   │   ├── customerController.js      ← CRUD for customers
│   │   └── invoiceController.js       ← Invoice logic
│   ├── middleware/
│   │   └── authMiddleware.js          ← JWT token verification
│   ├── models/
│   │   ├── User.js                    ← User schema (MongoDB)
│   │   ├── Customer.js                ← Customer schema
│   │   └── Invoice.js                 ← Invoice schema
│   └── routes/
│       ├── authRoutes.js              ← /api/auth routes
│       ├── customerRoutes.js          ← /api/customers routes
│       └── invoiceRoutes.js           ← /api/invoices routes
│
└── frontend/                          ← Next.js + React
    ├── .env.local                     ← Frontend environment variables
    ├── package.json                   ← Frontend dependencies
    ├── next.config.js                 ← Next.js configuration
    ├── components/
    │   └── layout/
    │       ├── Layout.js              ← Sidebar navigation wrapper
    │       └── ProtectedRoute.js      ← Guards dashboard from non-logged users
    ├── context/
    │   └── AuthContext.js             ← Global login/logout state
    ├── lib/
    │   └── api.js                     ← All Axios API calls to backend
    ├── pages/
    │   ├── _app.js                    ← App entry (wraps everything)
    │   ├── index.js                   ← Redirects to login or dashboard
    │   ├── login.js                   ← Login page
    │   ├── register.js                ← Register page
    │   └── dashboard/
    │       ├── index.js               ← Dashboard home (stats)
    │       ├── chatbot.js             ← Rule-based chatbot
    │       ├── customers/
    │       │   ├── index.js           ← Customer list + search + filter
    │       │   ├── add.js             ← Add new customer form
    │       │   └── edit/[id].js       ← Edit existing customer
    │       └── invoices/
    │           ├── index.js           ← Invoice list + PDF download
    │           └── create.js          ← Create new invoice
    └── styles/
        └── globals.css                ← Global CSS styles
```

---

## STEP 1 — INSTALL REQUIRED SOFTWARE

Before anything, install these on your computer:

### A) Node.js (JavaScript runtime)
- Download from: https://nodejs.org
- Choose the LTS version (e.g. v20)
- Install it normally (Next, Next, Finish)
- Verify: open Command Prompt and type:
  ```
  node -v
  npm -v
  ```
  You should see version numbers like v20.x.x

### B) MongoDB (Database)
- Download from: https://www.mongodb.com/try/download/community
- Choose: Windows → MSI → Download
- During install, tick "Install MongoDB as a Service" — this auto-starts the database
- Verify: open Command Prompt and type:
  ```
  mongod --version
  ```

### C) Git (for GitHub)
- Download from: https://git-scm.com
- Install with default settings
- Verify:
  ```
  git --version
  ```

---

## STEP 2 — GITHUB SETUP

1. Create account at: https://github.com

2. Create a new repository:
   - Repository name: `Full-Stack-Programming-Lab`
   - Set to Public
   - Click "Create repository"

3. Add your lecturer as collaborator:
   - Go to your repo → Settings → Collaborators → Add people
   - Enter: sharifali.aulecturer@gmail.com

4. Clone the repo to your computer:
   Open Command Prompt, go to where you want the project, and run:
   ```
   git clone https://github.com/YOUR_USERNAME/Full-Stack-Programming-Lab.git
   cd Full-Stack-Programming-Lab
   ```

5. Create the project folder inside it:
   ```
   mkdir Final_Term_Project_CRM
   ```

6. Copy ALL files from this zip into the `Final_Term_Project_CRM` folder.
   Your structure should look like:
   ```
   Full-Stack-Programming-Lab/
   └── Final_Term_Project_CRM/
       ├── README.md
       ├── backend/
       └── frontend/
   ```

---

## STEP 3 — START MONGODB

MongoDB should already be running as a Windows service.
If it is not running, open Command Prompt AS ADMINISTRATOR and type:
```
net start MongoDB
```

To check it is running:
```
sc query MongoDB
```
You should see: STATE: RUNNING

---

## STEP 4 — INSTALL BACKEND MODULES

Open Command Prompt. Navigate into the backend folder:
```
cd Full-Stack-Programming-Lab\Final_Term_Project_CRM\backend
```

Now install all dependencies:
```
npm install
```

This will read `package.json` and download: express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv, nodemon.
Wait for it to finish. You will see a `node_modules` folder appear inside `backend/`.

---

## STEP 5 — START THE BACKEND SERVER

While still inside the `backend` folder, run:
```
npm run dev
```

You should see:
```
✅ MongoDB Connected
🚀 Server running on port 5000
```

KEEP THIS TERMINAL OPEN. The backend must stay running.

---

## STEP 6 — INSTALL FRONTEND MODULES

Open a NEW Command Prompt window (do not close the backend one).
Navigate into the frontend folder:
```
cd Full-Stack-Programming-Lab\Final_Term_Project_CRM\frontend
```

Install all dependencies:
```
npm install
```

This will download: next, react, axios, react-hot-toast, jspdf, react-icons, etc.
This may take 1-2 minutes.

---

## STEP 7 — START THE FRONTEND

While still inside the `frontend` folder, run:
```
npm run dev
```

You should see:
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

KEEP THIS TERMINAL OPEN TOO.

---

## STEP 8 — OPEN THE WEBSITE

Open your browser and go to:
```
http://localhost:3000
```

You will be redirected to the Login page.

1. Click "Register here" to create your account
2. Fill in your name, email, password
3. You will be redirected to the Dashboard automatically

---

## STEP 9 — ADD 15 SAMPLE CUSTOMERS (SEED)

Open a THIRD Command Prompt window.
Navigate to the backend folder:
```
cd Full-Stack-Programming-Lab\Final_Term_Project_CRM\backend
```

First install axios for the seed script:
```
npm install axios
```

Now run the seed script (replace with YOUR email and password you registered with):
```
node seed.js youremail@example.com yourpassword
```

Example:
```
node seed.js ahmed@test.com password123
```

You should see:
```
✅ Logged in as Ahmed
✅ Added: Ahmed Khan
✅ Added: Sara Malik
... (15 customers total)
🎉 Done! Added 15 customers.
```

Refresh your browser — you will see all 15 customers in the dashboard!

---

## STEP 10 — PUSH TO GITHUB

After everything is working, go to the root of your cloned repo:
```
cd Full-Stack-Programming-Lab
```

Run these commands one by one:
```
git add .
git commit -m "Final Term Project CRM - MERN + Next.js complete"
git push origin main
```

Your project is now live on GitHub. Copy the URL (e.g. https://github.com/YOUR_USERNAME/Full-Stack-Programming-Lab) for your submission document.

---

## HOW TO RUN THE WEBSITE (EVERY TIME)

Each time you want to work on the project, do this:

### Terminal 1 — Start Backend:
```
cd path\to\Final_Term_Project_CRM\backend
npm run dev
```

### Terminal 2 — Start Frontend:
```
cd path\to\Final_Term_Project_CRM\frontend
npm run dev
```

### Then open browser:
```
http://localhost:3000
```

---

## WEBSITE PAGES & FEATURES

| Page | URL | What it does |
|------|-----|--------------|
| Login | /login | Sign in with email + password |
| Register | /register | Create new account |
| Dashboard | /dashboard | Stats: total, active, leads |
| Customers | /dashboard/customers | List all 15 customers |
| Add Customer | /dashboard/customers/add | Add new customer |
| Edit Customer | /dashboard/customers/edit/[id] | Update customer info |
| Invoices | /dashboard/invoices | View all invoices + download PDF |
| Create Invoice | /dashboard/invoices/create | Generate invoice for a customer |
| Chatbot | /dashboard/chatbot | Type commands to navigate |

---

## CHATBOT COMMANDS

Go to Dashboard → Chatbot and type:

| Command | What happens |
|---------|--------------|
| help | Shows all commands |
| list customers | Shows your customer list |
| add customer | Opens add customer page |
| invoices | Opens invoices page |
| create invoice | Opens create invoice page |
| dashboard | Goes to dashboard home |
| stats | Shows quick statistics |

---

## API ENDPOINTS (For Reference)

Backend runs at: http://localhost:5000

### Authentication
| Method | URL | Description |
|--------|-----|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login |
| GET | /api/auth/me | Get current user |

### Customers (require login)
| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/customers | Get all customers |
| GET | /api/customers?search=name | Search by name |
| GET | /api/customers?status=Active | Filter by status |
| GET | /api/customers/stats | Get count stats |
| POST | /api/customers | Add customer |
| PUT | /api/customers/:id | Update customer |
| DELETE | /api/customers/:id | Delete customer |

### Invoices (require login)
| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/invoices | Get all invoices |
| POST | /api/invoices | Create invoice |
| DELETE | /api/invoices/:id | Delete invoice |

---

## TROUBLESHOOTING

**"MongoDB not connected" error:**
Run as Administrator: `net start MongoDB`

**"Port 3000 already in use":**
Kill the process: `npx kill-port 3000` then retry `npm run dev`

**"Port 5000 already in use":**
Kill the process: `npx kill-port 5000` then retry `npm run dev`

**"Cannot find module" error:**
Make sure you ran `npm install` inside BOTH backend and frontend folders

**Seed script fails "Invalid email or password":**
Make sure you registered first on the website, then use that exact email/password in the seed command

**White screen / redirect loop:**
Clear browser storage: F12 → Application → Local Storage → Clear all → Refresh

---

*Built with: Node.js · Express.js · MongoDB · Mongoose · Next.js · React · JWT · bcryptjs · jsPDF*
