import { useState, useEffect, createContext } from 'react';

// CREATE NEW CONTEXT
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // Stores current theme for app
  const [theme, setTheme] = useState("dark");

  // (i) When the component loads check if a theme is set in the theme state
  useEffect(() => {
    // (ii) Call loadUserSettings WHEN NO THEME IS SET (ie. new visit)
    if(!theme) {
      loadUserSettings();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function loadUserSettings() {
    // (iii) Load the user settings from local storage, in case user visited previously!
    let userSettings = localStorage.getItem('userSettings') 

    // (iv) If userSettings are defined set them up. In this case we load the theme into the theme state
    if (userSettings) {
      userSettings = JSON.parse(userSettings)
      setTheme(userSettings.theme)
    } else {
      // (v) If no user settings are in local storage (new user), use the default settings
      defaultSettings()
    }
  }

  // (vi) Setup default settings
  function defaultSettings() {
    // (vii) Check OS if the user has default media color settings & if so, set the app to it!
    const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  // (viii) Create function to save new userSettings to local storage
  function saveUserSettings() {
    let toggledTheme = theme === "light" ? "dark" : "light"
    localStorage.setItem('userSettings', JSON.stringify({ theme: toggledTheme }))
  }

  // Function to toggle the theme state
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))

    // (xi) Call the saving settings when the theme button is toggled
    saveUserSettings()
  }

  // Context Provider Passing Values around App (via main.jsx)
  return <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
}