
import MenuBar from "./MenuBar";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function ContainerRight() {
  return (
    <>
    <div className="container-right">
        <MenuBar/>
      <div className="scroll">
        <MainContent/>
        <Footer/>
      </div>
    </div>
    
    </>
  );
}
