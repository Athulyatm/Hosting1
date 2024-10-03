import React, { Children, useState } from 'react'
import Themecontext from './ThemeContext';

const Themeprovider = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
      return (
           <Themecontext.Provider value={{ theme, toggleTheme}}>
            {Children}
           </Themecontext.Provider>
  )
}

export default Themeprovider
