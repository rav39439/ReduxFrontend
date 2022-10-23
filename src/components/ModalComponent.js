import React, { Component } from 'react';
import Commentform from './Commentform'

class Newmodel extends Component{

   
   
    constructor(props) {
        super(props)

        this.state={
            test: props.show,
            isGoing: "yes",
            numberOfGuests: 2
         
        }
        

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        //const value = target.value;
       const name = target.name;

        this.setState = ({
            test: this.props.show,
            [name]:target.value
        })
    }


    handlesubmit = () => {
      alert(this.state.isGoing)
  }

    render() {

        
        return(

            <div className="modal" tabindex="-1" role="dialog"style={{display:this.props.show?"block":"none"}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <Commentform addcommentsSuccess={this.props.addcommentsSuccess} dishid={this.props.dishid} hidemodal={this.props.hidemodal}/>
                      
                    
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { this.props.hidemodal() }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Newmodel

