
import React, { Component } from 'react';


class Contactform extends Component{

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            views: "",
            recommendation:"",
            comment:""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }




//     formValidation=()=>{
//       const {isGoing,comment}=this.state
//       const errors={}
//       if(isGoing.trim().length<6){
// errors.usernamelength="username must be length"
//       }
//     }


    handlesubmit = (e) => {
        e.preventDefault()

        alert(this.state.comment)
        this.props.postfeed(this.state.username,this.state.views,this.state.recommendation,this.state.comment)
}

    render() {
      //  const {isGoing,comment}=this.state
        return(
<>

         <div className="border bg-light"style={{width:"1000px"}}>  
         <h1>FeedBack Form</h1>
<form onSubmit={this.handlesubmit} >
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Username</label>
  <input type="text" name="username"class="form-control" id="exampleFormControlInput1"style={{width:"800px"}} value={this.state.username} onChange={this.handleInputChange}placeholder="Username"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Views</label>
  <input type="text" name="views"class="form-control" id="exampleFormControlInput1"style={{width:"800px"}}value={this.state.views} onChange={this.handleInputChange}placeholder="views"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Recommendation</label>
  <input type="text" name="recommendation"class="form-control" id="exampleFormControlInput1"style={{width:"800px"}} placeholder="Recommendation"onChange={this.handleInputChange} value={this.state.recommendation}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
  <textarea class="form-control" name="comment" id="exampleFormControlTextarea1" rows="3" style={{width:"800px"}}value={this.state.comment}onChange={this.handleInputChange}></textarea>
</div>

<button type="submit" className="btn btn-primary">submit comment</button>

</form>
</div>














                {/* <form onSubmit={this.handlesubmit}>
                    <label>
                        Username: </label>
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange} />

                    <br />

                    <label>
                        views: </label>
                    <input
                        name="views"
                        type="text"
                        value={this.state.views}
                        onChange={this.handleInputChange} />

                    <br />


                    <label>
                        recommendation:</label>

                    <input
                        name="recommendation"
                        type="text"
                        value={this.state.recommendation}
                        onChange={this.handleInputChange} />


                    <label>
                        comment:</label>

                    <input
                        name="comment"
                        type="text"
                        value={this.state.comment}
                        onChange={this.handleInputChange} />

                    

                   
                    <button type="submit" className="btn btn-primary">submit comment</button>

                </form> */}



</>

        )
    }
}

export default Contactform