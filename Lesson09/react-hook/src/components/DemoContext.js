import React, { createContext, useState } from 'react'
import Content from './Content';

export const ThemeContext = createContext();

function DemoContext() {
    const [theme,setTheme] = useState('text-success');
    const toggleTheme = () =>{
        setTheme (theme === 'text-success ' ? 'text-light':'text-dark')
    }
  return (
    <ThemeContext.Provider value={theme}>
        <div>
            <button onClick={toggleTheme}>toggleTheme</button>
            <Content/>
        </div>
    </ThemeContext.Provider>
  )
}

export default DemoContext