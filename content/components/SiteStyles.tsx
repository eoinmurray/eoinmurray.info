export default function SiteStyles() {
  return (
    <style>{`
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap");

:root {
  --bg: #f6f3ee;
  --ink: #111111;
  --muted: #4b4b4b;
  --rule: #d6d1c9;
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.01em;
}

a {
  color: var(--ink);
  text-decoration: underline;
  text-decoration-color: var(--muted);
  text-underline-offset: 0.25rem;
}

a:hover {
  text-decoration-color: var(--ink);
}
`}</style>
  );
}
