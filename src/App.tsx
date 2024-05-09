import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Navbar from "./components/Navbar";
import SingleGame from "./pages/SingleGame";
import Platforms from "./pages/Browse/platfroms/Platforms";
import Store from "./pages/Browse/stores/Store";
import GenresGame from "./pages/Browse/genres/Genres";
import Publishers from "./pages/Browse/publishers/Publishers";
import Creators from "./pages/Browse/creators/Creators";
import Tags from "./pages/Browse/tags/Tags";
import Developer from "./pages/Browse/developer/Developer";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Games />} />
          <Route path="/games/:gameSlug" element={<SingleGame />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/stores" element={<Store />} />
          <Route path="/genres" element={<GenresGame />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/developers" element={<Developer />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
