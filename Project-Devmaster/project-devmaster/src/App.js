import "./App.css";
import CaterageFooter from "./components/CaterageFooter";
import CaterageHome from "./components/CaterageHome";
import CaterageHeader from "./components/CaterageHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaterageIntroduce from "./components/CaterageIntroduce";
import CaterageProduct from "./components/CaterageProduct";
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <CaterageHeader />
      <Routes>
      <Route path="/" element={<CaterageHome/>}/>
      <Route path="/CaterageIntroduce" element={<CaterageIntroduce/>}/>
      <Route path="/CaterageProduct" element={<CaterageProduct/>}/>



      </Routes>
      
      
      
      </BrowserRouter>
      <CaterageFooter />
    </div>
  );
}

export default App;
