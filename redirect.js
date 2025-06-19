// 1. Instant redirect (works in 99% of browsers)
try {
  window.location.replace("https://www.exposar.net");
} catch (e) {
  // 2. Fallback for rare JS-blocking scenarios
  document.body.innerHTML = `
    <title>Redirecting...</title>
    <p>If not redirected, <a href="https://www.exposar.net">click here</a>.</p>
    <meta http-equiv="refresh" content="0; url=https://www.exposar.net">
  `;
}
