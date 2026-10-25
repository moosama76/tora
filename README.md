# Tora

Creative technology and playable-ad portfolio.

A static website: HTML, CSS, JavaScript and local media. No build step, tracking, external fonts or API service is required.

## Hosting

This repository contains the public Tora portfolio website only. GitHub Pages publishes the `main` branch from the repository root. `.nojekyll` preserves the static files directly; later pushes to `main` update the website.

The main Tora product/engine project is separate and must remain private. Its source, credentials and development artifacts are not included here.


## Edit

- Headline, project cards and contact: `index.html`
- Palette and layout: `style.css`
- Entrance and scroll behavior: `script.js`
- Images, font and playable-size records: `assets/`

Brand: **Tora**. Contact: **mohamed.osama189110@gmail.com**.

The size badges describe the raw standalone playable HTML; browser companion sizes are recorded separately. KB = 1,000 bytes.

## Artwork and licenses

- Tora wordmark and favicon: original editable SVG artwork.
- Surreal illustrations: original AI-generated illustrations, not licensed franchise artwork.
- Manrope font: SIL Open Font License; see `assets/manrope-OFL.txt`.
- Gameplay screenshots: Tora portfolio work using Kenney assets; original pack provenance remains in the private development project. These demos are not third-party campaign endorsements.

## Play Beat the Market

`beat-market/play.html` is the playable browser companion, with an explicit development MRAID host. `beat-market/index.html` is the matching raw standalone creative and requires an actual host. This is an original-branded fictional trading portfolio demo, not an authorized financial campaign or native-approved Unity production export. It makes no external data requests, executes no real trades and opens no app/store destination.

Rebuild in the private engine with `node scripts/beat-market/build-web-preview.mjs`, copy only the two generated HTML files, refresh the screenshot/size identities, test, then push this website repository. No engine source or credentials belong in this public repository.

## Live games

All project cards open interactive games. `traffic-tycoon/play.html` and `mini-golf/play.html` supply explicit browser test hosts around exact production exports. Their matching `index.html` files require real hosts. Browser CTA requests are recorded and show a demo message, without opening stores. Videos and the video player have been removed from this website.

Regenerate the two companions in the private engine with `node scripts/build-portfolio-games.mjs`, after verifying the existing production receipts. Copy the generated HTML only; preserve raw SHA identities. This does not establish new device or SDK acceptance.
