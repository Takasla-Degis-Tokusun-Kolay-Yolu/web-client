import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import Welcome from "./pages/Welcome/Welcome.jsx";
import Feed from "./pages/Feed/Feed.jsx";

function App() {
  const user = localStorage.getItem("access_token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Welcome />} />
        <Route
          path="/feed"
          exact
          element={user ? <Feed /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          exact
          element={user ? <Navigate to="/feed" /> : <Auth />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
