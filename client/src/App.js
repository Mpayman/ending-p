import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route
        index
        element={
          <main>
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        }
      />
      <Route
        path="login"
        element={
          <div>
            <h1> login page</h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
