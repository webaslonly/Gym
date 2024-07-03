import { ThemeProvider } from "@/components/provider/theme-provider"
import Navbar from "./components/shared/navbar"
import Home from "./pages/home"
import { Route, Routes } from "react-router-dom"
import Auth from "./pages/auth"

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth" element={<Auth />}/>
    </Routes>
    </ThemeProvider>
    </>
  )
}

export default App
