import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import Welcome from "./pages/Welcome/Welcome.jsx";
import Feed from "./pages/Feed/Feed.jsx";
import { useSelector } from "react-redux";

function App() {
  const user = localStorage.getItem("access_token");
  const activeUser = useSelector((state) => state.auth.activeUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Welcome />} />
        <Route path="/feed" exact element={<Feed />} />
        <Route
          path="/auth"
          exact
          element={activeUser ? <Navigate to="/feed" /> : <Auth />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
