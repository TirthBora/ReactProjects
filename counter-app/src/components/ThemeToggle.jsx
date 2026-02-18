function ThemeToggle({ dark, setDark }) {
  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );
}

export default ThemeToggle;

