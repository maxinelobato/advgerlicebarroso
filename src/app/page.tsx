// import AboutGerlice from "./components/AboutGerlice";
// import Header from "./components/Header";
// import HowWeHelp from "./components/HowWeHelp";
// import ButtonFloat from './components/Buttons/buttonfloat';
// import CardHelp from './components/CardHelp';
// import GoogleBusiness from "./components/GoogleBusiness";
// import Faq from "./components/Faq";
// import Footer from "./components/Footer";
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./components/Header'));
const HowWeHelp = dynamic(() => import('./components/HowWeHelp'));
const CardHelp = dynamic(() => import('./components/CardHelp'));
const AboutGerlice = dynamic(() => import('./components/AboutGerlice'));
const GoogleBusiness = dynamic(() => import('./components/GoogleBusiness'));
const Faq = dynamic(() => import('./components/Faq'));
const Footer = dynamic(() => import('./components/Footer'));
const ButtonFloat = dynamic(() => import('./components/Buttons/buttonfloat'));

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
