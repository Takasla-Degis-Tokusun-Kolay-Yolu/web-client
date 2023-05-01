import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import Welcome from "./pages/Welcome/Welcome.jsx";
import Feed from "./pages/Feed/Feed.jsx";
import { useSelector } from "react-redux";
import {Profile} from "./pages/Profile/Profile.jsx";
import {ProductDetail} from "./pages/ProductDetail/ProductDetail.jsx";

function App() {
  const activeUser = useSelector((state) => state.auth.activeUser);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index={true} element={<Welcome />} />
          <Route path="/feed" exact element={<Feed />} />
          <Route
              path="/auth"
              exact
              element={activeUser ? <Navigate to="/feed" /> : <Auth />}
          />
          <Route
              path="/me"
              exact
              element={!activeUser ? <Navigate to="/feed" /> : <Profile />}
          />
          <Route
                path="/product/:id"
                element={
                    !activeUser ? <Navigate to="/" /> : <ProductDetail />
                }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
