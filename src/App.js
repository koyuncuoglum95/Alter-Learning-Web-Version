import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/AboutUs/AboutUs'
import Home from './Components/Home/Home';
import OurTeam from './Components/OurTeam/OurTeam'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Messages from './Components/Messages';
import MyStuff from './Components/MyStuff/MyStuff';
import People from './Components/People/People';
import Profiles from './Components/Profiles/Profiles';
import Market from './Components/Market/Market';
import GameInfo from './Components/Game-info/GameInfo';
import Account from './Components/Account/Account';
import Games from './Components/Games/Games';
import Classroom from './Components/Classroom/Classroom';
import Events from './Components/Events/Events';
import GamesDemo from './Components/Games-demo';
import Login from './Components/login/login';
import Signup from './Components/SignUp/SignUp';
import Faq from './Components/Faq';
import Manage from './Components/ManageAccount/index'

class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about-us"  element={<About />}></Route>
          <Route exact path="/our-team"  element={<OurTeam />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/mystuff" element={<MyStuff />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/people/profiles" element={<Profiles />}></Route>
          <Route path="/market" element={<Market />}></Route>
          <Route path="/game-info" element={<GameInfo />}></Route>
          <Route exact path="/games/celestial" element={<GamesDemo />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/manage" element={<Manage />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/classroom" element={<Classroom />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    );
  }

}

export default App;
