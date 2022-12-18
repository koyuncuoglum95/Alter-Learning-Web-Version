import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/AboutUs/AboutUs';
import OurTeam from './Components/OurTeam/OurTeam';
import ContactUs from './Components/ContactUs/ContactUs';
import LogIn from './Components/UserLogins/LogIn';
import Registration from './Components/UserLogins/Registration';
import Europe from './Components/Europe/Europe';
import Canada from './Components/Canada/Canada';
import California from './Components/California/CaliforniaPage';
import Careers from './Components/Careers/Careers';
import CustomerSupport from './Components/CustomerSupport/CustomerSupport';
import DoNotSellMyInfo from './Components/DoNotSellMyInfo/DoNotSellMyInfo';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPage';
import AccessibilityStatement from './Components/AccessibilityStatement/AccessibilityPage';
import CookiesPolicy from './Components/CookiesPolicy/CookiesPage';
import GamePage from './Components/Games/MainGamesScreen/MainGamesScreen';
import GameDetailsPage from './Components/GameDetailsPage/GameDetailsPage';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import TeacherRegister from './Components/UserLogins/TeacherRegister'
import FamilyRegister from './Components/UserLogins/FamilyRegister';
import StudentRegister from './Components/UserLogins/StudentRegister';
import InstitutionRegister from './Components/UserLogins/InstitutionRegister';
import './App.css';



function App() {

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/"  element={<Home />}></Route>
          <Route exact path="/about-us"  element={<About />}></Route>
          <Route exact path="/our-team"  element={<OurTeam />}></Route>
          <Route exact path="/games/details/:id"  element={<GameDetailsPage />}></Route>
          <Route exact path="/games"  element={<GamePage />}></Route>
          <Route exact path="/contact-us"  element={<ContactUs />}></Route>
          <Route exact path="/policy"  element={<PrivacyPolicy />}></Route>
          <Route exact path="/logIn"  element={<LogIn />}></Route>
          <Route exact path="/registration"  element={<Registration />}></Route>
          <Route path="/europe"  element={<Europe/>}></Route>
          <Route path="/canada"  element={<Canada/>}></Route>
          <Route path="/careers"  element={<Careers />}></Route>
          <Route path="/california"  element={<California/>}></Route>
          <Route path="/privacy-policy"  element={<PrivacyPolicy/>}></Route>
          <Route path="/cookies-policy"  element={<CookiesPolicy />}></Route>
          <Route path="/terms-and-conditions"  element={<TermsAndConditions />}></Route>
          <Route path="/customer-support"  element={<CustomerSupport />}></Route>
          <Route path="/do-not-sell-my-info"  element={<DoNotSellMyInfo/>}></Route>
          <Route path="/accessibility-statement"  element={<AccessibilityStatement/>}></Route>
          <Route path="/teacherRegister"  element={<TeacherRegister/>}></Route>
          <Route path="/family/tutorRegister"  element={<FamilyRegister/>}></Route>
          <Route path="/institutionRegister"  element={<InstitutionRegister/>}></Route>
          <Route path="/studentRegister"  element={<StudentRegister/>}></Route>
          <Route path="*"  element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}


export default App;
