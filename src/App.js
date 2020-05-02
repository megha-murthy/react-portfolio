import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {HashRouter as Router , Route} from 'react-router-dom';
import About from './pages/About';
import './App.css';
import Container from './components/Container';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <Container>
    <Router>
    <div>
      <Header/>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio}/>
      
    {/* <Navbar/> */}
    <Footer/>
    </div>
    </Router>
    </Container>
  );
}

export default App;
