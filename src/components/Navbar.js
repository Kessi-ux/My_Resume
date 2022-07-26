import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Navbar extends Component {
     render() {
         return (
            <>
              <nav className = "light-blue darken-4">
              <div className = "container">
                    <div className = "nav-wrapper">
                        <Link to = "/" className = 'brand.logo'>
                        CV
                        </Link>
                       <Link to = "/" data-target = "side-nav" className= "sidenav-trigger" >
                        <i className = "material-icons"> menu </i>
                        </Link>                          
                    </div>
                </div>   
               </nav>
             </>
         );
     }
 }

 export default Navbar;