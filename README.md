# Onecord-inspired website + Discord OAuth backend

## Files
- `index.html`, `styles.css`, `app.js`: responsive frontend and animations
- `config.js`: public backend URL (no secrets)
- `server.js`: Node.js API and Discord OAuth2 backend
- `.env.example`: environment variable template

## Run the backend locally
1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env` and fill in the Discord OAuth application values.
3. Run `npm install`, then `npm start`.
4. Set `FRONTEND_ORIGIN` to the exact origin serving the frontend. For local testing, a static server such as Acode preview or `http://localhost:5500` can be used.
5. Set `API_BASE_URL` in `config.js` to your backend origin.

## Configure Discord OAuth
1. Open the Discord Developer Portal and create/select an application.
2. In OAuth2, add the exact redirect URL from `DISCORD_REDIRECT_URI`, e.g. `https://your-backend.example.com/auth/callback`.
3. Copy the Client ID and Client Secret into backend environment variables. Never put the client secret or bot token in frontend files or GitHub.
4. Deploy `server.js` on a Node-capable host such as Render. Set `NODE_ENV=production`, `SESSION_SECRET` to a long random value, `FRONTEND_ORIGIN` to your published GitHub Pages origin, and the Discord OAuth variables.
5. If frontend and backend use different sites, both must use HTTPS for the session cookie to work. Some browsers block third-party cookies; a same-site custom domain or reverse proxy may be needed.

## What works
- Discord OAuth login with `identify guilds` scopes.
- Personalized, rotating welcome message after login.
- Server picker populated from Discord; currently filters to servers where the signed-in user has Manage Server or Administrator.
- Animated three-dot AI thinking indicator while waiting for API response.
- Logout and session check.

## Important limitations
- `/api/chat` is a safe placeholder, not an AI model. Add an AI provider server-side to generate real responses.
- This starter lists servers the user can manage. It does not install your bot or change server settings. Those actions require bot installation, permission checks, and specific bot API endpoints.
- The default Express session store is in-memory and suitable only for initial testing. For production, use a persistent session store and HTTPS.
- GitHub Pages only hosts the static frontend; it cannot run `server.js`.
