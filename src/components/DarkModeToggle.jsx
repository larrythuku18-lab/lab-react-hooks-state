import React from 'react'

const DarkModeToggle = () => {
  // TODO: Implement dark mode toggle logic
  const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <button onClick={handleToggle}>
      {darkMode ? 'Toggle Dark Mode' : 'Toggle Light Mode'}
    </button>
  )
}

  return (
    <button>Toggle Dark Mode {/* TODO: Update this text from Dark to Light dynamically */}</button>
  )
}

export default DarkModeToggle
