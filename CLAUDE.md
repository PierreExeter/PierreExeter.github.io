# CLAUDE.md

## Project Overview

Personal website of Pierre Aumjaud (AI Engineer) — https://pierreexeter.github.io — built on the
**al-folio** academic Jekyll theme. Content: blog posts, portfolio/projects, publications
(BibTeX-driven), CV, an interactive career timeline, and news items.

This is a customized **fork** of the upstream theme. `README.md`, `INSTALL.md`, `CUSTOMIZE.md`, and
`FAQ.md` are upstream theme docs. Personal content lives in `_data/`, `_pages/`, `_posts/`,
`_projects/`, `_bibliography/papers.bib`, and `_config.yml` (site-wide settings).

## Tech Stack

- **Jekyll 4.4.1** (Ruby, `Gemfile`) with Liquid templates and SCSS
- Markdown via kramdown, syntax highlighting via rouge
- **jekyll-scholar** for publications (config: `_config.yml:264`)
- Full plugin list: `_config.yml:196` — archives, feed, imagemagick, minifier, paginate-v2, sitemap, toc, etc.
- CSS is minified by sass itself; jekyll-minifier's `compress_css` is off (`_config.yml:231` — cssminify2 corrupts `var()` inside `calc()`)
- Custom Ruby plugins in `_plugins/` (citation counts, external posts, cache-busting)
- Node/npm is dev-only: prettier + Liquid plugin (`package.json`, `.prettierrc`)
- Docker for local development; GitHub Actions deploys to the `gh-pages` branch

## Key Directories

| Directory            | Purpose                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| `_pages/`            | Standalone pages (about, blog, cv, timeline, publications, portfolio, code, datasparked, outdoors, 404) |
| `_posts/`            | Blog posts (`YYYY-MM-DD-title.md`)                                                                      |
| `_projects/`         | Projects collection (shown on portfolio page)                                                           |
| `_news/`             | News/announcement items (shown on homepage)                                                             |
| `_books/`            | Book reviews collection                                                                                 |
| `_bibliography/`     | `papers.bib` — BibTeX source for publications page                                                      |
| `_data/`             | YAML data: `cv.yml`, `timeline.yml`, `repositories.yml`, `socials.yml`, `venues.yml`, `coauthors.yml`   |
| `_layouts/`          | Page templates (root: `default.liquid`)                                                                 |
| `_includes/`         | Reusable Liquid partials (subdirs: `cv/`, `repository/`, `resume/`)                                     |
| `_sass/`             | SCSS partials; theming in `_themes.scss`                                                                |
| `_plugins/`          | Custom Ruby Jekyll plugins                                                                              |
| `assets/`            | Images, JS, CSS, PDFs                                                                                   |
| `.github/workflows/` | CI/CD (deploy, prettier, broken links, lighthouse, a11y)                                                |
| `_site/`             | **Build artifact — never edit**                                                                         |

## Essential Commands

```bash
# Local development (recommended) — http://0.0.0.0:8080, livereload on :35729
docker compose up

# Native (requires Ruby + bundler)
bundle exec jekyll serve
JEKYLL_ENV=production bundle exec jekyll build
```

Deployment is automatic: `.github/workflows/deploy.yml` runs on push to main (Ruby 3.3.5,
imagemagick, nbconvert, jekyll build, purgecss, then deploys `_site/` to `gh-pages`).

## Content Editing Quick Reference

- **New blog post**: add `_posts/YYYY-MM-DD-title.md` (front matter pattern: `_posts/2025-07-01-optimisation.md:1`)
- **New project**: add a file to `_projects/` (`importance` orders, `category` groups them)
- **New publication**: append a BibTeX entry to `_bibliography/papers.bib`
- **Edit CV**: `_data/cv.yml` (structured YAML, rendered by `_layouts/cv.liquid`)
- **Timeline entry**: add an item to `_data/timeline.yml` (field reference in the file header; `category` sets the colour, entries are sorted by `start_date` at render time)
- **Navbar**: controlled by `nav: true` + `nav_order` in page front matter (e.g. `_pages/publications.md:6-7`)
- **Site settings, feature toggles, third-party libs**: `_config.yml`

## Additional Documentation

- `.claude/docs/architectural_patterns.md` — layout inheritance, collections model, data-driven
  content, parameterized includes, light/dark theming, publications pipeline, asset optimization.
  Read before modifying layouts, includes, SCSS, or the scholar/bibliography setup.
- `CUSTOMIZE.md` — upstream theme customization guide (config options, styling)
- `INSTALL.md` — upstream install/deploy alternatives
- `FAQ.md` — upstream troubleshooting
