import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("Light")

  const ligthTheme = ()=>{
    setThemeMode("Light")
  }


  const darkTheme = ()=>{
    setThemeMode("Dark")
  }
  

  // Actual change in theme
  useEffect(() =>{
    document.querySelector('html').classList.remove("Light", "Dark")

    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, ligthTheme,darkTheme}}>

    
<div className="flex flex-wrap min-h-screen items-center">
  <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeButton/>

      </div>

      <div className="w-full max-w-sm mx-auto">
          <Card/>
      </div>
  </div>
</div>
</ThemeProvider>
  )
}

export default App
