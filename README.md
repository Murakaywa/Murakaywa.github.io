# Moffat Masila — Portfolio

A static portfolio site: landing page, a Work hub with three subpages
(Design & Systems, Digital Skills, Coding), and a Contact page.

## Structure

```
index.html              landing page
contact.html            contact page
work/index.html         work hub (links to the three subpages)
work/design-systems.html   posters, logos and the POS system
work/digital-skills.html   Ajira Digital skills + social media management
work/coding.html           coding training + Msimbo Kids channel
css/style.css           all styling
js/script.js            mobile nav + image lightbox + form placeholder
images/                 your uploaded posters and logos
```

## Things to update before you publish

1. **Social links** — search every HTML file for `PLACEHOLDER` comments
   above the Instagram/LinkedIn icons (in the nav and footer of every
   page, plus the contact page) and replace `href="#"` with your real
   profile URLs.
2. **Contact details** — open `contact.html` and replace the email,
   phone, Instagram handle, and LinkedIn URL placeholders (each is
   marked with a small "placeholder" tag).
3. **Contact form** — the form currently just shows a message instead
   of sending anything (GitHub Pages can't run server code). To make
   it work:
   - Create a free form at [formspree.io](https://formspree.io)
   - In `contact.html`, add `action="https://formspree.io/f/yourID"
     method="POST"` to the `<form id="contact-form">` tag
   - Remove the `e.preventDefault()` line in `js/script.js`'s form
     handler (or just delete that whole form-submit block) so the
     browser submits normally
4. **Msimbo Kids link** — in `work/coding.html`, replace `href="#"` on the
   "Watch on YouTube" button with your channel URL and delete the small
   "placeholder link" tag next to it.
5. **More work** — to add another poster/logo/post, copy one
   `.gallery-item` block in the relevant page (e.g. `design-systems.html`) and point `data-full`,
   the `<img src>`, and the caption text at your new image.

## Hosting on GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio` or
   `yourusername.github.io` for a root domain).
2. Push this folder's contents to the repository:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a
   branch**, set branch to `main` and folder to `/ (root)`, then Save.
5. Your site will be live at:
   - `https://yourusername.github.io/your-repo/` (normal repo), or
   - `https://yourusername.github.io/` (if the repo is named
     `yourusername.github.io`)

It can take a minute or two for the first deploy to go live.
