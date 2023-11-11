import AboutGerlice from "./components/AboutGerlice";
import Header from "./components/Header";
import HowWeHelp from "./components/HowWeHelp";
import ButtonFloat from './components/Buttons/buttonfloat';
import CardHelp from './components/CardHelp';
import GoogleBusiness from "./components/GoogleBusiness";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HowWeHelp/>
      <CardHelp/>
      <AboutGerlice/>
      <GoogleBusiness/>
      <Faq/>
      <Footer/>
      <ButtonFloat/>
    </>
  );
}
