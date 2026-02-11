<!-- markdownlint-disable -->
# NextPosts - Next.js Data Mutation & Server Actions Deep Dive

A full-stack Next.js application designed to explore advanced data mutation patterns, server-side logic, and efficient state management using the latest App Router features.


### Built with 

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)


## About

This project is a hands-on exploration of data mutations in Next.js. It's a post-sharing platform where users can create posts with images, browse a real-time feed, and interact with content — all built to demonstrate real-world patterns like Server Actions and optimized cache management.

The app uses **Next.js** for both frontend and backend logic, with **SQLite** for persistence and **Cloudinary** for image storage.

---

## What I Learned

### Data Mutation & Server Actions
- **Server Actions** — Handling form submissions and data logic directly on the server using `"use server"`.
- **Form State Management** — Leveraging `useActionState` (fka `useFormState`) to handle server-side validation and feedback.
- **Pending UI States** — Using `useFormStatus` to provide real-time visual feedback (e.g., "Creating...") during submissions.
- **Cache Invalidation** — Mastering `revalidatePath` to ensure the UI stays in sync with the database immediately after mutations.

### Routing & Rendering
- **App Router** — Organizing the application structure using nested routes and segments.
- **Server Components** — Standardizing data fetching within server-side components for better performance.
- **Client Components** — Efficiently using `"use client"` only where interactivity is needed (e.g., forms, like buttons).
- **Special Files** — Implementing `loading.js` for automatic loading states and `error.js` for robust error boundaries.

### Integration & Persistence
- **SQL Database** — Integrating `better-sqlite3` for local persistent storage.
- **Image Handling** — Processing file uploads and integrating with the **Cloudinary** API for cloud-based asset management.
- **Full-Stack Synergy** — Connecting UI components to server-side actions, creating a seamless data flow from form to database.

---

## Project Structure

```
app/
├── feed/
│   ├── page.js             # Posts feed list view
│   ├── loading.js          # Automatic loading state for feed
│   └── error.js            # Error boundary for feed segment
├── new-post/
│   ├── page.js             # Page for the new post creation form
│   └── error.js            # Error boundary for post creation
├── layout.js               # Root layout with main header
└── page.js                 # Landing page view
actions/
├── post.js                 # Server action for creating posts
└── like.js                 # Server action for liking/unliking posts
components/
├── post-form.js            # Form component for post creation
├── form-submit.js          # Submit button with pending status
├── posts.js                # Post list and item rendering
├── like-icon.js            # Interactive heart button
└── header.js               # Main navigation header
lib/
├── posts.js                # Database interaction and initialization logic
├── cloudinary.js           # Asset storage utility
└── format.js               # Formatting helpers (dates, etc.)
```

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment Variables:**
   Create a `.env.local` file with your Cloudinary credentials:
   ```env
   CLOUDINARY_CLOUD_NAME=your_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## Built With

| Tech | Purpose |
|------|---------|
| Next.js | Frontend & Backend Framework (App Router) |
| React | UI Library |
| SQLite | Data Persistence |
| Cloudinary | Cloud Image Storage |
| CSS | Custom Styling |

 
