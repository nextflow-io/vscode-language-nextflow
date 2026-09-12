// TODO: Restore to cloud.seqera.io
export const SEQERA_PLATFORM_URL = `https://pr-8246.dev-tower.net`;
export const SEQERA_API_URL = `${SEQERA_PLATFORM_URL}/api`;
export const SEQERA_HUB_API_URL = `https://hub.seqera.io`;
export const SEQERA_INTERN_API_URL = `https://intern.seqera.io`;

// TODO: Use env var to store the Auth0 secret
// TODO: Update to production Auth0 app
// TODO: Security implications of rolling up this secret into the built extension
export const AUTH0_CLIENT_SECRET =
  "tZ3N8vHuvpLQlzdGEhel4Vz5DeluNNyTtid-2jFBdDiXmIGNbX9yhjDmQ2Pg6VT-";
export const AUTH0_CLIENT_ID = "7PJnvIXiXK3HkQR43c4zBf3bWuxISp9W";
export const AUTH0_SCOPES = "openid profile email offline_access";
export const AUTH0_DOMAIN = `seqera-development.eu.auth0.com`;
