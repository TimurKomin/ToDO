import React from "react";
import Todos from "./Todos";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function MyRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/create" element={<createTask />} />
      <Route path="/edit" element={<editTask />} />
    </Routes>
  </BrowserRouter>
  );
}
