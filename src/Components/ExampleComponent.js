import React, { useContext } from 'react'
import Themecontext from '../../../../myapp2/src/Components/ThemeContext'

const Examplecomponent = () => {
    const { theme, toggleTheme } = useContext(Themecontext);
  return (
    <div style={{background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#333'}}>
        <p>Current theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      
    </div>
  )
}

export default Examplecomponent
