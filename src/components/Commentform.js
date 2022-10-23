
import React, { Component } from 'react';


class Commentform extends Component{

    constructor(props) {
        super(props)

        this.state = {
            rating: 2,
            comment: "",
            author:"",
            errors:{}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.state.errors={}
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }




    formValidation=()=>{
      const {rating,author,comment}=this.state
     
      let isValid=true
      if(author.trim().length<3){
this.state.errors.author="username cannot be length less than 3"
isValid=false
      }
      if(author.trim().length>=15){
        this.state.errors.author="authorname cannot be more than 15 characters"
        isValid=false

      }
      if(this.state.rating>5){
        this.state.errors.rating="rating cannot be greater than 5"
        isValid=false
      }
      if(this.state.rating<0){
        this.state.errors.rating="rating cannot be less than 0"
        isValid=false

      }
    
return isValid

    }


    handlesubmit = (e) => {
        e.preventDefault()
        console.log(this.formValidation())


   if(this.state.errors.author==null && this.state.errors.rating==null){
    this.props.addcommentsSuccess(this.props.dishid,this.state.rating,this.state.comment,this.state.author)
   }

   else{
        if(this.state.errors.author!=null){
            alert(this.state.errors.author)
        }
        else{
            alert(this.state.errors.rating)
        }
   }


}

    render() {


       const {rating,author,comment,errors}=this.state




        return(
<>
            <div className="modal-body">


                <form onSubmit={this.handlesubmit}>
                <label for="exampleFormControlInput1" class="form-label">Rating</label>
                    <input
                        name="rating"
                        type="number"
                        style={{width:"400px"}}
                        class="form-control" id="exampleFormControlInput1"
                        value={this.state.rating}
                        onChange={this.handleInputChange} />

                    <br />



                    {this.state.errors.rating!=null &&
        <div class="alert alert-danger" role="alert">
    {this.state.errors.rating}
        </div>
       
      }


                    <label>
                        Comment:</label>

                    <input
                        name="comment"
                        type="text"
                        style={{width:"400px"}}
                        class="form-control" id="exampleFormControlInput1"
                        value={this.state.comment}
                        onChange={this.handleInputChange} />


                    <label>
                        Author:</label>

                    <input
                        name="author"
                        type="text"
                        style={{width:"400px"}}
                        class="form-control" id="exampleFormControlInput1"
                        value={this.state.author}
                        onChange={this.handleInputChange} />
   {this.state.errors.author!=null &&
        <div class="alert alert-danger" role="alert">
    {this.state.errors.author}
        </div>
       
      }

                    <button type="submit" className="btn btn-primary">submit comment</button>

                </form>
</div>


</>

        )
    }
}

export default Commentform