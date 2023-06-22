import "./App.css";
import Indixpage from "./Indixpage";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      /* main route wich get outlet */
      <Route path="/" element={<Layout />}>
        <Route index element={<Indixpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
