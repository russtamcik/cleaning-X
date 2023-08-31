import { Fragment } from "react"

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Services from "../components/serives/Services";
import Articles from "../components/articles and resources/Articles";
import Contact from "../components/contact/Contact";

const HomePage = () => {
  return(
    <Fragment>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Articles/>
      <Contact/>
    </Fragment>
  )
}

export default HomePage;