# Modern Blog Application

![Blog App](https://img.shields.io/badge/Blog-App-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Prisma](https://img.shields.io/badge/Prisma-Latest-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## 🚀 Overview

A modern, feature-rich blog application built with Next.js, Prisma, and Tailwind CSS. This application provides a beautiful UI for creating, editing, and managing blog articles with a robust dashboard for content management.

## ✨ Features

- **Modern UI Design**: Clean, responsive interface with animations and modern design elements
- **User Authentication**: Secure login and registration using Clerk
- **Dashboard**: Comprehensive admin dashboard for content management
- **Article Management**: Create, edit, and delete articles with rich text editing
- **Image Uploads**: Cloudinary integration for image storage and management
- **Comments System**: Interactive commenting system for reader engagement
- **Likes System**: Allow readers to like and interact with articles
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Theme toggle for user preference

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (configurable)
- **Authentication**: Clerk
- **Image Storage**: Cloudinary
- **Rich Text Editing**: React Quill
- **Styling**: Tailwind CSS with custom components

## 🚀 Deployment

### Prerequisites

- Node.js 18+ installed
- GitHub account
- Vercel account (for deployment)
- Cloudinary account (for image uploads)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="your-database-connection-string"

CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Clerk Authentication
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"

```

### Deployment Steps

1. Push your code to GitHub
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. Connect your GitHub repository to Vercel
   - Create a new project in Vercel
   - Import your GitHub repository
   - Configure the environment variables
   - Deploy!

## 🏃‍♂️ Local Development

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd blogapp
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   - Create a `.env` file with the variables listed above

4. Run database migrations
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.dev/)
- [Cloudinary](https://cloudinary.com/)
- [React Quill](https://github.com/zenoamaro/react-quill)
