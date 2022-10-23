import React, { Component } from 'react'
import Dishdetails from './Dishdetails'
import Newmodel from './ModalComponent'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { CardImg, CardText, Card, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';
class Menu extends Component{
comments=[]
    constructor(props) {
        super(props)
this.inputref=React.createRef()
        this.state = {
            SelectedDish: null,

            title: "User Comments",
            buttonshow:false,
            modal: false,
            modal1:false
           
        
        }
       
        this.toggle = this.toggle.bind(this);
     
        this.handlenewsubmit= this.handlenewsubmit.bind(this);
        this.handleupdate= this.handleupdate.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }


    toggle1(event,id) {
        this.setState({
          modal1:!this.state.modal1
        });
        console.log(this.inputref.current)

      }


    onDishSelect(dish) {
     
        this.setState({
            SelectedDish: dish,
            buttonshow:true
        })
    }


handleupdate(e,id){

  e.preventDefault()

  this.props.updatedish(id,e.target.children[0].children[1].value,e.target.children[1].children[1].value,e.target.children[2].children[1].value
    ,e.target.children[3].children[1].value,e.target.children[4].children[1].value,e.target.children[5].children[1].value
    ,this.comments)
  

}






handlenewsubmit(e){

 

e.preventDefault()

console.log(this.props.adddish)

this.props.adddish(e.target.children[0].children[1].value,e.target.children[1].children[1].value,e.target.children[2].children[1].value
  ,e.target.children[3].children[1].value,e.target.children[4].children[1].value,e.target.children[5].children[1].value
  ,this.comments)

 }




    renderDish(dish) {

      
    if(dish!=null){

        return(

            <Card >
                <CardImg  src={dish.image} alt={dish.name} width="100%" />




<CardBody>
                    <CardText>{dish.description}</CardText>
                    
</CardBody>

            </Card>
         
        )
    }
    else {
        return(

            <div></div>
        )
        }
}

    render() {

        const menu=this.props.dishes.map((dish)=>{
        return(

          <>
          <div style={{border:"2px solid black"}}>
            <Card style={{width:"1300px"}} className='mt-3' onClick={() => { this.onDishSelect(dish) }}>

                <CardImg  style={{
    height: 400,
    width : 1200,
    border:"none"
  }} src={dish.image} alt={dish.name}/>
                {/* <img src={dish.image} alt={dish.name} /> */}
                <CardImgOverlay>
                    <CardTitle>

                        {dish.name}
                    </CardTitle>

                 



</CardImgOverlay>

<CardBody>

<p>Description: {dish.description}</p>
<p>Price: {dish.price}</p>
</CardBody>

</Card>
<div>
  <Button
    color="primary"
    onClick={event =>this.toggle1(event, dish.id)}
  >
  Update item
  </Button>
  {' '}
</div>
{/* <Button color="primary" onClick={event =>this.toggle1(event, dish.id)}>update</Button> */}

{/* <Modal isOpen={this.state.modal1} toggle={event =>this.toggle1(event, dish.id)} >
          <ModalHeader toggle={event =>this.toggle1(event, dish.id)}>Add Menu</ModalHeader>
          <ModalBody> */}


          <form onSubmit={event =>this.handleupdate(event,dish.id)} style={{display:this.state.modal1?"block":"none"}} ref={this.inputref}>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">name</label>
  <input type="text" name="name"class="form-control" id="exampleFormControlInput1"style={{width:"400px"}} value={this.state.username} onChange={this.handleInputChange}placeholder="Username"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Image</label>
  <input type="text" name="image"class="form-control" id="exampleFormControlInput1"style={{width:"400px"}}value={this.state.views} onChange={this.handleInputChange}placeholder="views"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">category</label>
  <input type="text" name="category"class="form-control" id="exampleFormControlInput1"style={{width:"400px"}} placeholder="Recommendation"onChange={this.handleInputChange} value={this.state.recommendation}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">label</label>
  <textarea class="form-control" name="label" id="exampleFormControlTextarea1" rows="3" style={{width:"400px"}}value={this.state.comment}onChange={this.handleInputChange}></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">price</label>
  <textarea class="form-control" name="price" id="exampleFormControlTextarea1" rows="3" style={{width:"400px"}}value={this.state.comment}onChange={this.handleInputChange}></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">description</label>
  <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3" style={{width:"400px"}}value={this.state.comment}onChange={this.handleInputChange}></textarea>
</div>

<button type="submit" className="btn btn-primary">submit menu</button>

</form>
{/* <Button color="secondary" onClick={event =>this.toggle1(event, dish.id)}>Cancel</Button>
</ModalBody>

</Modal>      */}
</div>
</>
        )

        })



        return(

            <div className="container">
                <div className="row">

                    {menu}

                </div>


                <div className="row border">
                    <div className="col-lg-6 col-md-4">
                    {this.renderDish(this.state.SelectedDish)}
                    </div>
                    {this.state.SelectedDish!=null &&
                    <div className="col-lg-6 col-md-4">
<CardBody >
                            <Dishdetails comments={this.state.SelectedDish ? this.state.SelectedDish.comments : []} title={this.state.title} buttonshow={this.state.buttonshow} mcomments={this.props.mcomments} dishid={this.state.SelectedDish.id} addcommentsSuccess={this.props.addcommentsSuccess}/>
                           
                        </CardBody>
                    </div>
    }
                </div>

                <div>
        <Button color="danger" onClick={this.toggle}>Add Menu</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Menu</ModalHeader>
          <ModalBody>


          <form onSubmit={this.handlenewsubmit} >
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">name</label>
  <input type="text" name="name"class="form-control" id="exampleFormControlInput1"style={{width:"400px"}} value={this.state.username} onChange={this.handleInputChange}placeholder="Username"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Image</label>
  <input type="text" name="image"class="form-control" id="exampleFormControlInput1"style={{width:"400px"}}value={this.state.views} onChange={this.handleInputChange}placeholder="views"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">category</label>
  <input type="text" name="category"class="form-control" id="exampleFormControlInput1"style={{width:"400px"}} placeholder="Recommendation"onChange={this.handleInputChange} value={this.state.recommendation}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">label</label>
  <textarea class="form-control" name="label" id="exampleFormControlTextarea1" rows="3" style={{width:"400px"}}value={this.state.comment}onChange={this.handleInputChange}></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">price</label>
  <textarea class="form-control" name="price" id="exampleFormControlTextarea1" rows="3" style={{width:"400px"}}value={this.state.comment}onChange={this.handleInputChange}></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">description</label>
  <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3" style={{width:"400px"}}value={this.state.comment}onChange={this.handleInputChange}></textarea>
</div>

<button type="submit" className="btn btn-primary">submit menu</button>

</form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
          





</div>
        )



        
    }


    
}

export default Menu;