// Immediate redirect (works even with text/plain MIME type)
window.location.replace("https://www.exposar.net");

// Fallback for browsers that block JS
document.body.innerHTML = `
  <p>Redirecting... <a href="https://www.exposar.net">Click here</a> if not redirected.</p>
`;
