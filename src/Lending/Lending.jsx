import React from 'react';
import NavBar from './NavBar/NavBar';
import Intro from './Intro/Intro';
import Description from './Description/Description';
import InnerSpace from './InnerSpace/InnerSpace'
import Ideas from './Ideas/Ideas'
import ThoughtsImages from './ThoughtsImages/ThoughthsImages'
import Result from './Result/Result'
import Footer from './Footer/Footer';
import Author from './Author/Author';

function Lending() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Description />
      <div id="inner-space"><InnerSpace /></div>
      <div id="ideas"><Ideas /></div>
      <div id="thoughts-images"><ThoughtsImages /></div>
      <div id="results"><Result /></div>
      <div id="author"><Author /></div>
      <Footer />
    </div>
  );
}

export default Lending;