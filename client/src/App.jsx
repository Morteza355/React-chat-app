import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { AppLayout } from "./pages/AppLayout"
import { NotFound } from "./ui/NotFound"
import { ThemeContextProvider } from "./context/ThemeContext"
import { MainPage } from "./pages/MainPage"

export const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/app" />} />
            <Route path="/app" element={<MainPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
