import "./App.css";
import CaterageFooter from "./components/CaterageFooter";
import CaterageHome from "./components/CaterageHome";
import CaterageHeader from "./components/CaterageHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaterageIntroduce from "./components/CaterageIntroduce";
import CaterageProduct from "./components/CaterageProduct";
import CaterageNews from "./components/CaterageNews";
import CateragePartner from "./components/CateragePartner";
import CaterageContact from"./components/CaterageContact"
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <CaterageHeader />
        <Routes>
          <Route path="/" element={<CaterageHome />} />
          <Route path="/CaterageIntroduce" element={<CaterageIntroduce />} />
          <Route path="/CaterageProduct" element={<CaterageProduct />} />
          <Route path="/CaterageNews" element={<CaterageNews />} />
          <Route path="/CateragePartner" element={<CateragePartner />} />
          <Route path="/CaterageContact" element={<CaterageContact />} />

        </Routes>
      </BrowserRouter>
      <CaterageFooter />
    </div>
  );
}

export default App;
