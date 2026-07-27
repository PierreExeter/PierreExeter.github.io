# pierreexeter.github.io

[![deploy](https://github.com/PierreExeter/PierreExeter.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/PierreExeter/PierreExeter.github.io/actions/workflows/deploy.yml)

Personal website of **Pierre Aumjaud** — AI Engineer. Live at [pierreexeter.github.io](https://pierreexeter.github.io).

Built with [Jekyll](https://jekyllrb.com/) on a customized fork of the [al-folio](https://github.com/alshedivat/al-folio) academic theme.

## Site contents

- **Blog** — posts on machine learning, reinforcement learning, and optimization (`_posts/`)
- **Portfolio** — project showcase (`_projects/`, `_pages/portfolio.md`)
- **Publications** — generated from BibTeX via jekyll-scholar (`_bibliography/papers.bib`)
- **CV** — data-driven from `_data/cv.yml`
- **Timeline** — chronological work/education/volunteering view, data-driven from `_data/timeline.yml` (`_pages/timeline.md`)
- **News** — short announcements shown on the homepage (`_news/`)
- Custom pages: code (`_pages/code.md`), DataSparked (`_pages/datasparked.md`), outdoors (`_pages/outdoors.md`)

## Tech stack

- Jekyll 4.4 (Ruby) with Liquid templates and SCSS
- jekyll-scholar for the publications page; custom Ruby plugins in `_plugins/` (citation counts, external posts, cache-busting)
- Docker for local development
- GitHub Actions for CI/CD, deploying to the `gh-pages` branch

## Repository structure

| Directory        | Purpose                                                                    |
| ---------------- | -------------------------------------------------------------------------- |
| `_pages/`        | Standalone pages (about, blog, cv, timeline, publications, portfolio, 404) |
| `_posts/`        | Blog posts (`YYYY-MM-DD-title.md`)                                         |
| `_projects/`     | Projects collection (portfolio page)                                       |
| `_news/`         | News items (homepage)                                                      |
| `_books/`        | Book reviews collection                                                    |
| `_bibliography/` | `papers.bib` — BibTeX source for publications                              |
| `_data/`         | YAML data: `cv.yml`, `timeline.yml`, `repositories.yml`, `socials.yml`, …  |
| `_layouts/`      | Liquid page templates                                                      |
| `_includes/`     | Reusable Liquid partials                                                   |
| `_sass/`         | SCSS partials (light/dark theming in `_themes.scss`)                       |
| `_plugins/`      | Custom Ruby Jekyll plugins                                                 |
| `assets/`        | Images, JS, CSS, PDFs                                                      |
| `_site/`         | Generated output — do not edit                                             |

## Run locally

```bash
docker compose up
```

The site is served at [http://0.0.0.0:8080/](http://0.0.0.0:8080/) with livereload on port 35729.

Without Docker (requires Ruby and bundler):

```bash
bundle install
bundle exec jekyll serve
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site with `JEKYLL_ENV=production`, strips unused CSS with purgecss, and publishes `_site/` to the `gh-pages` branch.

## Code formatting

Formatting is checked in CI by [`.github/workflows/prettier.yml`](.github/workflows/prettier.yml). To run it locally:

```bash
npm install

# check formatting (no changes made)
npx prettier . --check

# auto-fix formatting in place
npx prettier . --write
```

Configuration is in `.prettierrc`, which loads `@shopify/prettier-plugin-liquid` for `.liquid` files.

## Updating content

- **New blog post**: add `_posts/YYYY-MM-DD-title.md`
- **New project**: add a file to `_projects/` (`importance` sets the order)
- **New publication**: append a BibTeX entry to `_bibliography/papers.bib`
- **CV**: edit `_data/cv.yml`
- **Timeline**: add an entry to `_data/timeline.yml` (fields documented at the top of the file)
- **Site settings and feature toggles**: `_config.yml`

## Credits & license

Based on the [al-folio](https://github.com/alshedivat/al-folio) theme (MIT). The upstream theme docs are kept in this repo: [INSTALL.md](INSTALL.md), [CUSTOMIZE.md](CUSTOMIZE.md), [FAQ.md](FAQ.md).

Released under the [MIT License](LICENSE).
