import React,{Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Provider, connect } from 'react-redux';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { DISHES } from './components/shared/Dishes';
import Header from './components/HeaderCompoent'
import Menu from './components/Menucomponent'
import About from './components/AboutComponent';
import {LEADERS} from './components/shared/Leaders'
import { addcommentsSuccess, getcommentsSuccess, getLeadersSuccess } from './redux/ActionCreator';
import { getLeaders } from './redux/ActionCreator';
import { postfeedback } from './redux/ActionCreator';
import Contactform from './components/Contactform';
import { adddish } from './redux/ActionCreator';
import { updatedish } from './redux/ActionCreator';

const mapStateToProps=(props)=>{
    return {
        comment:props.commentsreducer,
        leaders:props.leadersreducer,
        afeedback:props.feedbackreducer,
        mydishes:props.dishreducer
    }


}

const mapDispatchToProps=(dispatch)=>({
 
getLeaders:()=>{dispatch(getLeaders())},
postfeedback:(data1,data2,data3,data4)=>{dispatch(postfeedback(data1,data2,data3,data4))},
    addcommentsSuccess:(dishid,rating,comment,author)=>{dispatch(addcommentsSuccess(dishid,rating,comment,author))},
    adddish:(name,image,category,label,price,description,comments)=>{dispatch(adddish(name,image,category,label,price,description,comments))},
    
   updatedish:(id,name,image,category,label,price,description,comments)=>{dispatch(updatedish(id,name,image,category,label,price,description,comments))}
})


class App extends Component {

    constructor(props) {
    super(props)
    this.state = {
        dishes: DISHES,
        leaders:LEADERS
        
    }
}

componentDidMount(){

 this.props.getLeaders()
//console.log(this.props.updatedish)
}


render(){

return(

   
<div>
      
      <div className="row">
          <Header /> 
    
<Router>
          <Routes>

<Route exact path="/" element={<Menu dishes={this.props.mydishes} mcomments={this.props.comment} addcommentsSuccess={this.props.addcommentsSuccess} adddish={this.props.adddish} updatedish={this.props.updatedish}/>} />

              <Route exact path="/Menu" element={ <Menu dishes={this.state.dishes} mcomments={this.props.comment.comments} />} />
              <Route exact path="/About" element={<About leaders={this.props.leaders.Leaders} />} />
              <Route exact path="/Contact" element={<Contactform postfeed={this.props.postfeedback}/>} />

          </Routes>


          </Router>
          {/* <Navbar color="dark"> */}
              <div className="container">
 
                  {/* <NavbarBrand href="/">"Resonate Con fusion"

                  </NavbarBrand> */}


           
        </div>      

              
      </div>
  </div>  

)


    }

}


export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App