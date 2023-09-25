import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutOverview from "./BodyComponentHandler/AboutOverview";
import ImageGallery from "./BodyComponentHandler/ImageGallery";
import NavBarHandle from "./HeaderComponent/NavBarHandle";
import OurServices from "./BodyComponentHandler/OurServices";
import Sustainability_effort from "./BodyComponentHandler/Sustainability_effort";
import FormEventHandler from "./BodyComponentHandler/FormEventHandler";
import ContactUs from "./footerComponentHandler/ContactUs";
import FooterNavbar from "./footerComponentHandler/FooterNavbar";
import Price from "./OutsideLandingPageComponentHandler/Price";
import ImageContainer from "./OutsideLandingPageComponentHandler/ImageContainer";
import FooterSectionOutsideLandingPage from "./OutsideLandingPageComponentHandler/FooterSectionOutsideLandingPage";
import InspirationComponentHandler from "./OutsideLandingPageComponentHandler/InspirationComponentHandler";
// import Layout from './src/Layout';

function Home() {
  return (
    <div>
      <ImageGallery></ImageGallery>
      <AboutOverview></AboutOverview>
      <OurServices></OurServices>
      <Sustainability_effort></Sustainability_effort>
      <FormEventHandler></FormEventHandler>
      <ContactUs></ContactUs>
      {/* <FooterNavbar></FooterNavbar> */}
    </div>
  );
}
function Prices() {
  return (
    <div>
      <Price></Price>
      <ImageContainer></ImageContainer>
      <FooterSectionOutsideLandingPage></FooterSectionOutsideLandingPage>
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <NavBarHandle></NavBarHandle>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<AboutOverview />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/schedule" element={<FormEventHandler />} />
        <Route path="/price" element={<Prices />} />
        <Route path="/Inspiration" element={<InspirationComponentHandler/>}/>
      </Routes>
      <FooterNavbar></FooterNavbar>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
