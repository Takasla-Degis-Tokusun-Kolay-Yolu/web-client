import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import Home from "./pages/Welcome/Welcome.jsx";

function App() {
    const user = localStorage.getItem('access_token');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Home />} />
        <Route path="/auth" exact element={user ? <Home /> : <Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
