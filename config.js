
/*
 * Onecord Website Configuration
 * File: config.js
 */

window.ONECORD_CONFIG = {
  // Your deployed Node.js backend URL
  API_BASE_URL: "https://test1-4a7v.onrender.com",

  // API endpoints
  CHAT_ENDPOINT: "/api/chat",
  STATUS_ENDPOINT: "/api/status",
  USER_ENDPOINT: "/auth/me",
  LOGIN_ENDPOINT: "/auth/discord",
  LOGOUT_ENDPOINT: "/auth/logout",
  SERVERS_ENDPOINT: "/api/servers",

  // Website settings
  APP_NAME: "Onecord",
  VERSION: "1.0.0",

  // Enable UI animations
  ANIMATIONS: true,

  // Enable personalized greetings
  PERSONALIZED_GREETING: true,

  // Request settings
  REQUEST_TIMEOUT: 30000
};
