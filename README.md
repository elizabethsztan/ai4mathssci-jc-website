# AI4Maths&Science journal club

A responsive static site for GitHub Pages. No build step or package installation is needed.

## Update the content

Edit `schedule.js` to add each session's title, speaker, abstract, location and time. Empty fields display friendly “to be announced” messages. Add entries to `resources` when past-speaker links are ready; an example is included in the file. For multi-paragraph abstracts, use `\n\n` inside the string.

The screenshot's seven Tuesday dates are set to **2026**, matching the current term. Sessions run from 4–5pm. Update the term labels in `index.html` alongside the dates when rolling over to a new term.

The contact section links directly to Liz, Rachel and Ishaan by email. There is no signup database.

## Preview locally

Open `index.html` in your browser, or run:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Host on GitHub Pages

1. Put these files in the root of a GitHub repository and push to `main`.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose **main** and **/ (root)**, and save.
4. Your site will be available at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

All local asset links are relative so repository-based Pages URLs work. The site uses system monospace fonts and has no external font dependencies.

