# Onecord-inspired interface

A responsive static frontend inspired by the screenshots supplied in the conversation. It includes a landing composer, server picker, plugin popover, model-level selector, sidebar navigation, image-template gallery, and a configurable API client.

## Folder structure

```text
onecord-inspired/
├── index.html
├── styles.css
├── app.js
├── config.js
└── assets/
```

## Run it locally

Open `index.html` in a browser, or use a local static server. It is also suitable for GitHub Pages.

## Connect an API

Edit `config.js` and set `API_BASE_URL` to your backend's public URL:

```js
window.ONECORD_CONFIG = {
  API_BASE_URL: "https://your-backend.example.com",
  CHAT_ENDPOINT: "/api/chat",
  STATUS_ENDPOINT: "/api/status"
};
```

The chat endpoint should accept `POST /api/chat` with JSON such as:

```json
{
  "message": "Summarize the community's recent activity",
  "server": "Example Discord server",
  "model": "GPT-6 Luna",
  "level": "Low"
}
```

It should respond with JSON containing a string `reply`, for example `{ "reply": "Here is the summary..." }`. The optional status endpoint should return JSON such as `{ "status": "online" }`.

The static frontend does not include Discord OAuth, actual server discovery, plugin installation, or image generation. Add those through a trusted backend. **Never put a Discord bot token or private API key in `config.js`, `app.js`, or any other file deployed to GitHub Pages.** Configure CORS on your backend to permit your published site origin.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload the files inside this folder (so `index.html` is at the repository root).
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose the default branch and `/(root)`, then save.
5. Wait for GitHub Pages to publish the site. The API can be hosted separately, such as on Render.
