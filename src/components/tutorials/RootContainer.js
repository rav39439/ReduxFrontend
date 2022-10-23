import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import {  Router, Routes, Route } from "react-router-dom"

import { DISHES } from './shared/Dishes';
import Header from './HeaderCompoent'
import Menu from './Menucomponent'
import About from './AboutComponent';
import {LEADERS} from './shared/Leaders'
import { addcommentsSuccess } from '../redux/ActionCreator';



class Rootcontainer extends Component {

    constructor(props) {
    super(props)

        this.state = {
            dishes: DISHES,
            leaders:LEADERS
            
        }
}



render(){

return(

    <div></div>
)
    }

}


export default Rootcontainer;
