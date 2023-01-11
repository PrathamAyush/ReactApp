import Header from './header';
import Footer from './footer';
import React,{ Fragment } from "react";
import HomeCover from './homeCover';
import Slide from './slide';
function Home() {
    return (
       <Fragment>
            <Header></Header>
            <HomeCover></HomeCover>
            <Slide></Slide>
            <Footer></Footer>
        </Fragment>
    );
}
export default Home;
