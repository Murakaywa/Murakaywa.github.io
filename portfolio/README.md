# Moffat Masila — Portfolio

A static portfolio site: landing page, a Work hub with three subpages
(Graphic Design, POS System Design, Social Media Management), and a
Contact page.

## Structure

```
index.html              landing page
contact.html            contact page
work/index.html         work hub (links to the three subpages)
work/graphic-design.html
work/pos-design.html
work/social-media.html
css/style.css           all styling
js/script.js            mobile nav + image lightbox + form placeholder
images/                 your uploaded posters and logos
```


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
