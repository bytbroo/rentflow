# 🏠 RentFlow Pro

<div align="center">

![RentFlow Pro Banner](https://img.shields.io/badge/RentFlow-Pro-blue?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

**A comprehensive rental property management system built with the MERN stack**

*Designed specifically for Indian landlords, PG owners, and property managers*

[🚀 Live Demo](https://bytbroo.github.io/rentflow/) • [📖 Documentation](#) • [🐛 Report Bug](https://github.com/bytbroo/rentflow/issues) • [✨ Request Feature](https://github.com/bytbroo/rentflow/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Why RentFlow Pro?](#-why-rentflow-pro)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Usage Guide](#-usage-guide)
- [Screenshots](#-screenshots)
- [API Documentation](#-api-documentation)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

RentFlow Pro is an all-in-one rental management solution that simplifies property management for Indian landlords. Say goodbye to messy Excel sheets and paper receipts! Manage tenants, track payments, generate professional receipts, handle maintenance, and maintain complete financial records - all from one powerful dashboard.

### 💡 Why RentFlow Pro?

**Before RentFlow:**
- ❌ Scattered Excel sheets for different properties
- ❌ Manual receipt generation and printing
- ❌ Difficulty tracking pending payments
- ❌ No centralized expense management
- ❌ Lost maintenance request history
- ❌ Time-consuming monthly reconciliation

**After RentFlow:**
- ✅ Everything in one organized dashboard
- ✅ Instant PDF receipts with one click
- ✅ Real-time payment status tracking
- ✅ Automated rent reminders
- ✅ Complete maintenance history
- ✅ Monthly reports ready in seconds

---

## ✨ Key Features

### 🏘️ Tenant Management
- **Complete Tenant Profiles**: Store personal details, contact info, ID proofs
- **Lease Tracking**: Monitor lease start/end dates, security deposits, rent amount
- **Occupancy Status**: Active, Vacant, or Late - see at a glance
- **Tenant History**: Access complete payment and maintenance history
- **Quick Actions**: Call, WhatsApp, or email tenants directly from the app

### 💰 Payment Tracking
- **Multiple Payment Modes**: Cash, UPI, Bank Transfer, Cheque
- **Smart Calendar View**: Visual representation of all payments
- **Status Filters**: Pending, Overdue, Paid - filter and sort easily
- **Auto-Receipt Generation**: Professional PDF receipts created instantly
- **Payment Reminders**: Automated alerts for pending payments
- **Late Fee Calculation**: Automatic late fee computation based on your rules

### 🧾 Receipt Generation
- ✨ **One-Click PDF Generation**: Professional receipts in seconds
- 📝 **Indian Format**: Amount in words (Rupees and Paise)
- 🖼️ **Custom Branding**: Add your logo and property details
- 📅 **Complete Details**: Payment mode, date, period covered
- 📱 **Instant Sharing**: Download or share via WhatsApp
- 💾 **Auto-Save**: All receipts saved and accessible anytime

### 💸 Expense Management
- **Category-wise Tracking**: Electricity, Maintenance, Water, Salaries, Repairs
- **Monthly Summaries**: View expenses by month or category
- **Receipt Attachments**: Upload and store expense bills
- **Budget Alerts**: Get notified when expenses exceed budget
- **Income vs Expense**: Detailed comparison and net profit calculation
- **Tax Reports**: Export data for ITR filing

### 📢 Notice Management
- **Pre-built Templates**: 
  - 🏠 Vacate Notice (30/60 days)
  - 📈 Rent Increase Notice
  - ⚠️ Warning/Violation Notice
  - 🔧 Maintenance Schedule Notice
- **PDF Generation**: Professional formatted notices
- **Digital Delivery**: Email or WhatsApp directly to tenants
- **Notice History**: Track all notices sent with timestamps

### 🔧 Maintenance Requests
- **Issue Tracking**: Log and manage all maintenance requests
- **Priority Levels**: Low, Medium, High, Urgent
- **Status Management**: Open → Assigned → In Progress → Resolved
- **Service Provider Assignment**: Assign to plumbers, electricians, etc.
- **Cost Tracking**: Record maintenance expenses
- **Photo Attachments**: Upload before/after photos
- **Tenant Notifications**: Auto-notify when issue is resolved

### 📊 Reports & Analytics
- **Dashboard Overview**:
  - Total Active Tenants
  - Monthly Rent Collection (₹)
  - Pending Payments Count
  - Occupancy Rate (%)
  - Monthly Expenses
  - Net Profit/Loss
  
- **Financial Reports**:
  - Monthly Income Statement
  - Expense Breakdown by Category
  - Rent Collection Rate (%)
  - Year-over-Year Comparison
  - Property-wise Performance

- **Export Options**:
  - PDF Reports
  - Excel Spreadsheets
  - CSV for Tally/accounting software

---

## 🛠️ Tech Stack

### Frontend
```
React.js 18.x          - UI Framework
React Router v6        - Navigation
Axios                  - HTTP Client
Chart.js               - Data Visualization
Material-UI / Tailwind - Styling
Date-fns               - Date Handling
jsPDF                  - PDF Generation
```

### Backend
```
Node.js 14+           - Runtime Environment
Express.js            - Web Framework
MongoDB               - Database
Mongoose              - ODM
JWT                   - Authentication
Bcrypt                - Password Hashing
Nodemailer            - Email Service
Multer                - File Upload
```

### DevOps
```
Git                   - Version Control
GitHub Actions        - CI/CD
Docker                - Containerization
AWS/Heroku            - Hosting
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4+) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Installation

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/bytbroo/rentflow.git
cd rentflow
```

#### 2️⃣ Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

**Configure your `.env` file:**
```env
# Database
MONGODB_URI=mongodb://localhost:27017/rentflow
# or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/rentflow

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Server
PORT=5000
NODE_ENV=development

# Email (Optional - for notifications)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

**Start the backend server:**
```bash
npm run dev
# or for production
npm start
```

Backend will run on `http://localhost:5000`

#### 3️⃣ Frontend Setup
```bash
# Open new terminal and navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env file
touch .env
```

**Configure frontend `.env`:**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NAME=RentFlow Pro
```

**Start the frontend server:**
```bash
npm start
```

Frontend will open at `http://localhost:3000`

#### 4️⃣ Seed Database (Optional)
```bash
# From backend directory
npm run seed
```

This creates sample data for testing.

---

## 📱 Usage Guide

### First Time Setup

1. **Register/Login**: Create your owner account
2. **Profile Setup**: Add your property details and logo
3. **Add Properties**: If managing multiple properties
4. **Add Tenants**: Enter tenant information
5. **Set Rent Details**: Configure rent amount and due dates

### Daily Workflow

**Morning:**
- 📊 Check dashboard for pending payments
- 📧 Review any new maintenance requests
- 🔔 Check notifications

**When Tenant Pays:**
1. Go to "Payments" → "Record Payment"
2. Select tenant and enter amount
3. Choose payment mode
4. Click "Generate Receipt"
5. Download/Share via WhatsApp

**End of Month:**
1. Review "Financial Reports"
2. Download monthly statement
3. Export for tax filing
4. Send reminders to pending tenants

### Common Tasks

#### Adding a New Tenant
```
Dashboard → Tenants → Add New Tenant
→ Fill details → Upload ID proof → Save
```

#### Recording a Payment
```
Payments → Record Payment → Select Tenant
→ Enter Amount → Choose Mode → Generate Receipt
```

#### Raising Maintenance Issue
```
Maintenance → New Request → Describe Issue
→ Select Priority → Assign Service Provider → Submit
```

#### Generating Monthly Report
```
Reports → Monthly Report → Select Month
→ Choose Format (PDF/Excel) → Download
```

---

## 🎨 Screenshots

### Dashboard Overview
```
[Screenshot - Main dashboard with metrics and charts]
```

### Tenant Management
```
[Screenshot - Tenant list with status indicators]
```

### Payment Tracking
```
[Screenshot - Payment calendar view]
```

### Receipt Generation
```
[Screenshot - Sample receipt PDF]
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "Kundan Kumar",
  "email": "kundankr7172@gmail.com",
  "password": "SecurePass123",
  "phone": "9876543210"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "kundankr7172@gmail.com",
  "password": "SecurePass123"
}
```

### Tenant Endpoints

#### Get All Tenants
```http
GET /tenants
Authorization: Bearer {token}
```

#### Create Tenant
```http
POST /tenants
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "roomNumber": "101",
  "rentAmount": 15000,
  "securityDeposit": 30000,
  "leaseStart": "2024-01-01",
  "leaseEnd": "2024-12-31"
}
```

#### Update Tenant
```http
PUT /tenants/:id
Authorization: Bearer {token}
```

#### Delete Tenant
```http
DELETE /tenants/:id
Authorization: Bearer {token}
```

*[View complete API documentation](docs/API.md)*

---

## 🗺️ Roadmap

### Phase 1 (Current) ✅
- [x] Tenant Management
- [x] Payment Tracking
- [x] Receipt Generation
- [x] Basic Reports

### Phase 2 (In Progress) 🚧
- [ ] WhatsApp Integration for receipts
- [ ] SMS Reminders for pending payments
- [ ] Email Notifications
- [ ] Multi-property support

### Phase 3 (Planned) 📋
- [ ] Mobile App (React Native)
- [ ] Tenant Self-Service Portal
- [ ] Online Payment Gateway Integration
- [ ] Advanced Analytics Dashboard
- [ ] AI-powered Rent Predictions

### Phase 4 (Future) 🔮
- [ ] Smart Home Integration
- [ ] Blockchain for Lease Agreements
- [ ] Multi-language Support
- [ ] Voice Commands (Alexa/Google)

---

## 🤝 Contributing

We love contributions! Here's how you can help make RentFlow Pro even better:

### Ways to Contribute
- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests

### Contribution Process

1. **Fork the Repository**
```bash
# Click 'Fork' button on GitHub
```

2. **Clone Your Fork**
```bash
git clone https://github.com/YOUR_USERNAME/rentflow.git
cd rentflow
```

3. **Create a Branch**
```bash
git checkout -b feature/AmazingFeature
# or
git checkout -b fix/BugFix
```

4. **Make Changes**
- Write clean, commented code
- Follow existing code style
- Test your changes thoroughly

5. **Commit Changes**
```bash
git add .
git commit -m "Add: Amazing new feature"
```

6. **Push to GitHub**
```bash
git push origin feature/AmazingFeature
```

7. **Open Pull Request**
- Go to your fork on GitHub
- Click "New Pull Request"
- Describe your changes
- Submit for review

### Coding Standards
- Use meaningful variable names
- Comment complex logic
- Follow ES6+ syntax
- Write unit tests for new features

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Kundan Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

See [LICENSE](LICENSE) file for full details.

---

## 👨‍💻 Author

<div align="center">

### Kundan Kumar

[![GitHub](https://img.shields.io/badge/GitHub-bytbroo-181717?style=for-the-badge&logo=github)](https://github.com/bytbroo)
[![Twitter](https://img.shields.io/badge/Twitter-@bytbroo-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/@bytbroo)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/bytbroo)
[![Email](https://img.shields.io/badge/Email-kundankr7172@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:kundankr7172@gmail.com)

</div>

---

## 🙏 Acknowledgments

- 🏠 Inspired by real challenges faced by Indian landlords
- 💻 Built with love using MERN stack
- 🎨 Icons from [Lucide Icons](https://lucide.dev/)
- 📚 Documentation inspired by [Best README Template](https://github.com/othneildrew/Best-README-Template)
- 🌟 Special thanks to all contributors

---

## 📞 Support & Contact

### Need Help?

- 📧 **Email**: kundankr7172@gmail.com
- 🐛 **Bug Reports**: [Open an Issue](https://github.com/bytbroo/rentflow/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/bytbroo/rentflow/discussions)
- 📖 **Documentation**: [Wiki](https://github.com/bytbroo/rentflow/wiki)

### Community

Join our growing community:
- 💬 [Discord Server](#)
- 📱 [WhatsApp Group](#)
- 🐦 Follow on [Twitter](https://twitter.com/@bytbroo)

---

## ⭐ Show Your Support

If you find RentFlow Pro helpful, please consider:

- ⭐ **Star this repository** on GitHub
- 🐦 **Share** on Twitter with #RentFlowPro
- 📝 **Write a review** or blog post
- 💰 **Sponsor** development via [GitHub Sponsors](#)

---

<div align="center">

### 🏠 Made with ❤️ for Indian Landlords

**Perfect for:**
- Individual landlords with 1-10 properties
- PG owners managing 10-50 tenants
- Small property management companies
- Anyone tired of Excel sheets and paper receipts

---

**[⬆ Back to Top](#-rentflow-pro)**

*Last Updated: December 2024*

</div>

