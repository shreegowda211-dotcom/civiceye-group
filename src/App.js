import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import { Header } from "./pages/Header.jsx";
import Register from "./pages/Register.jsx";  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header isAuthenticated={false} /><Landing /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
