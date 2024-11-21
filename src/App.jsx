import { useState } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Protected from "./pages/Protected";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = () => setUser(null);

  return (
    <div>
      <Navigation />
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <p></p>
      )}
      <Routes>
        <Route path="/login" element={<Login login={login} />} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute isAllowed={!!user}>
              <Protected user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
