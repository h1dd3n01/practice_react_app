import React, { Fragment }  from 'react';
import Exercises from './Components/exercises/'

// import {Header, Footer} from './Components/layouts/'
import Header from "./Components/layouts/Header";
import Footer from "./Components/layouts/Footer";
function App() {
  return (
    <Fragment>
      <Header/>
      <Exercises/>
      <Footer/>

    </Fragment>


  );
}

export default App;
