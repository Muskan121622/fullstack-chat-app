module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        card: 'var(--card)',
        popover: 'var(--popover)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        ring: 'var(--ring)',
      },
    },
  },
  plugins: [],
}
