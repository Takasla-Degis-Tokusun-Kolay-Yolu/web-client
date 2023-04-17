

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import Home from "./pages/Home.jsx";

function App() {


  return (
      <BrowserRouter>
          <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />

          </Routes>
      </BrowserRouter>

  )
}

export default App


