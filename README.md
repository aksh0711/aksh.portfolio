# Aksh Portfolio (Vite + React)

This is a minimal, responsive portfolio scaffolded with Vite + React. It includes sections for projects, skills, contact, social links and a downloadable resume. It's configured to be deployed to Vercel and installable as a PWA.

Quick start (Windows cmd.exe):

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
npm run preview
```

Deploy to Vercel:
- Push this repo to GitHub
- Import the repo in Vercel and set the framework to "Vite"
- Vercel will detect the build command `npm run build` and the output directory `dist` automatically.

Customizing:
- Replace `resume.pdf` in the project root with your real resume.
- Edit `src/App.jsx` to update projects (add your GitHub repos and YouTube demo video links), social links, and location.
- Update styles in `src/styles.css`.
- For the contact form: Sign up at [Formspree](https://formspree.io), create a form, and replace `your-form-id` in `src/components/Contact.jsx` with your actual form ID. You'll receive emails at the address you set up.
