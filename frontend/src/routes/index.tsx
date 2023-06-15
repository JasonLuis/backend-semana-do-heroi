import { Route, Routes } from "react-router-dom";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { Dashboard } from "../page/Dashboard";

export const RouteApp = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </>
  );
};
