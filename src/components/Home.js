import React, {Component} from 'react';
export default class Home extends 
Component {
    render(){
        return(
            <section>
                <Navbar />
                <div className = "container"> 
                <div classsName = "row">
                <div className = "Col S12 m4 l3">
                <Profile/>
                </div>
                <div className= "Col S12 m8 l9">
                <About/>
                <Skills/>
                <Experience/>
                <Education/>
                <Portfolios/>
                </div>
                </div>
                </div>
            </section>
        );
    }
}