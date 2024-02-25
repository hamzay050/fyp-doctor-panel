export const ClearAllCookies = () => {
  const allCookies = document.cookie.split(";");

  // Iterate through all cookies and remove each one
  allCookies.forEach((cookie) => {
    const cookieName = cookie.split("=")[0].trim();
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
};
