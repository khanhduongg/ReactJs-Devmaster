
import Banner from "../componentsSon/Banner ";
import About from "../componentsSon/About";
import News from "../componentsSon/News";
import Catefory from "../componentsSon/Catefory";
import Partner from "../componentsSon/Partner";
import Contact from "../componentsSon/Contact";
function CaterageHome() {
  return (
    <div>
      <>
        <Banner />
        <Catefory/>
        <About/>
        <News/>
        <Partner/>
        <Contact/>
      </>
    </div>
  );
}

export default CaterageHome;
