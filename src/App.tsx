import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Navbar from "./components/Navbar";
import SingleGame from "./pages/SingleGame";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Games />} />
          <Route path="/games/:gameId" element={<SingleGame />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
