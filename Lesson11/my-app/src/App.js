import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Menu from "./component/Menu";
import Catalog from "./component/Catalog";
import Kid from "./component/Kid";
import Wed from "./component/Wed";
import Moblie from "./component/Moblie";
function App() {
  return (
    <div className="container border">
      <h1>Devmaster demo reactJs-Router</h1>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/catalog" element={<Catalog />}>
              <Route path="kid" element={<Kid/>}/>
              <Route path="web" element={<Wed/>}/>
              <Route path="mobile" element={<Moblie/>}/>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
