# Authentication App

## Tech Stack

- **Next.js**: React framework for SSR and performance optimization
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn**: UI components library
- **React Hook Form**: Form management
- **Zod**: Schema validation
- **ESLint**: Code linting
- **GitHub Actions**: CI automation

## Project Overview

This project is a small authentication web application using Next.js. It connects to an existing authentication API to handle user login and registration. The app ensures proper authentication and authorization by implementing route guards and redirects.

## Features

- User login and registration
- Form validation with React Hook Form & Zod
- Route protection (redirect unauthenticated users to the login page)
- Server-Side Rendering (SSR) without affecting authentication state
- Custom UI Kit using Tailwind CSS & Shadcn
- ESLint configuration for code quality
- CI/CD with GitHub Actions

## Setup & Installation


1. Clone the repository:

  
	`git clone https://github.com/SkyDmytro/next_auth.git`

	`cd next-auth`

2. Install dependencies:

	`npm install`

3. Set up environment variables (create a .env file):
	`NEXT_PUBLIC_API_URL=https://your-api-url.com`

5. Run the development server:
`npm run dev`