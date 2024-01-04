import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import PageNotFound from "./pages/PageNotFound";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
