function ThemeToggle({ dark, setDark }) {
    return (
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}

export default ThemeToggle;
