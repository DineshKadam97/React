import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContextProvider } from './context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [user, setUser] = useState(null)

  return (
    <ContextProvider value={{user,setUser}}>
      <Login />
      <Profile />
    </ContextProvider>

  )
}

export default App
