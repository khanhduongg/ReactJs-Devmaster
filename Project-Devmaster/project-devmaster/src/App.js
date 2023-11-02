import "./App.css";
import CaterageFooter from "./components/CaterageFooter";
import CaterageHome from "./components/CaterageHome";
import CaterageHeader from "./components/CaterageHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaterageIntroduce from "./components/CaterageIntroduce";
import CaterageProduct from "./components/CaterageProduct";
import CaterageNews from "./components/CaterageNews";
import CateragePartner from "./components/CateragePartner";
import CaterageContact from "./components/CaterageContact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListAllWish from "./componentsSon/ListAllWist";
import Products from "./components/Products";
function App() {
  return (
    <>
      <BrowserRouter>
        <CaterageHeader />
        <Routes>
          <Route path="/" element={<CaterageHome />} />
          <Route path="/CaterageIntroduce" element={<CaterageIntroduce />} />
          <Route path="/CaterageProduct" element={<CaterageProduct />} />
          <Route path="/CaterageNews" element={<CaterageNews />} />
          <Route path="/products" element={<Products />} />
          <Route path="/danh-sach-yeu-thich" element={<ListAllWish />} />
          <Route path="/CateragePartner" element={<CateragePartner />} />
          <Route path="/CaterageContact" element={<CaterageContact />} />
        </Routes>
        <CaterageFooter />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
