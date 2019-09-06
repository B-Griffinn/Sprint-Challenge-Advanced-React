import Reach from 'react';
// import useDarkMode from ....

const Navbar =() => {
// hook that will take our custom hook (useDarkMode) to toggle state of dark mode
const [darkMode, setDarkMode] = useDarkMode(false); // initial state of darkmode = false

// Toggle Dark Mode handler
const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
};

    return (
        <nav className="navbar">
            <h1>Women's World Cup</h1>
            <div className="dark-mode_toggle">
                <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    )
}

export default Navbar;