let platformApiUrl = process.env.PUBLIC_PLATFORM_API_BASE_URL;
if (!platformApiUrl) platformApiUrl = "https://dev-tower.net";

export { platformApiUrl };
