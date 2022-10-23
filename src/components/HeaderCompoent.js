import react from 'react'
import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand,Nav,NavItem, NavLink } from 'reactstrap';
class Header extends Component{

   


    render() {
        return(

<>
                <Navbar color="primary d-inline-flex"expand="md">
                <div className="container">

                    <NavbarBrand href="/" className="mr-auto">"Resonate Con fusion"

                    </NavbarBrand>
                        <NavbarBrand>
                            <Nav navbar>
<NavItem>
                                    <a href="/" className='ml-5' style={{ color: "black" ,marginLeft:"30px"}}>Home</a>                                    
                                </NavItem>

                                <NavItem>
                                    <a href="/About" className='ml-5' style={{color:"black",marginLeft:"30px"}}>About</a>
                                </NavItem>
                                <NavItem>
                                    <a href="/Menu" className='ml-5' style={{ color: "black",marginLeft:"30px" }}>Menu</a>

                                </NavItem>
                              
                                <NavItem>
                                    <a href="/Contact" className='ml-5' style={{ color: "black" ,marginLeft:"30px"}}>Contact us</a>

                                </NavItem>
                              




                            </Nav>
</NavbarBrand>

                        
                    </div>
</Navbar>

                {/* <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">

                            <div className="col-lg-12 col-sm-6">
                                <h1>"Resonate Con fusion"</h1>
                                <p>lorem23                                
                                </p>

                            </div>
                        </div>
</div>
                </div> */}


                <div className="jumbotron mt-3 border" style={{textAlign:"center",width:"95%",marginLeft:"30px",backgroundColor:"Highlight",marginBottom:"20px"}}>
                    <h1 className="display-4">Welcome Home</h1>
                    <p className="lead">This is a platform where you can write reviews on your favorite food items and also create your own list of favorite items with given items</p>
                   
                        <p>It is a great platform to learn and develop.People can create a list of favorite items here.</p>
                       
                </div>
</>
              
        )
    }
}
export default Header