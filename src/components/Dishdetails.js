
import react, { Component } from 'react'
import Newmodel from './ModalComponent'

class Dishdetails extends Component{

    constructor(props) {
    super(props)


        this.state = {
            dishcomments: props.comments,
           mcomments:props.mcomments,
            show:false
    }
}

    showModal = () => {
       
        this.setState(
            {
                dishcomments: this.props.comments,
                mcomments:this.props.mcomments,
                show: true,

            
            }
        );

        
       
    }

    hidemodal = () => {
        this.setState(
            {
                dishcomments: this.props.comments,
                mcomments:this.props.mcomments,

                show: false,


            }
        );
    }

    componentDidMount(){
       // console.log(this.props.addcommentsSuccess)
      }
    
    render() {
     
       // console.log(this.props.mcomments)
        const commentsondish = this.props.mcomments.map((comment) => {
   
            if (comment.dishId==this.props.dishid) {
                
           
            
            return (

                <div>
                <h3>{comment.author}</h3>
                    <p>{comment.comment}</p>
                    <p>{comment.rating}</p>
                </div>
            )

            }
            else {
                return (
                    <div></div>
                )
            }
})






        return (
       

            <div className="mt-4">
                
                <h3>{ this.props.title}</h3>

                <div className="mt-5">
                
                    {commentsondish}
                    <div>
                        <button className="btn btn-primary"style={{display:this.props.buttonshow?"block":"none"}} onClick={this.showModal}>Open comment</button>
                        <Newmodel show={this.state.show} hidemodal={this.hidemodal} addcommentsSuccess={this.props.addcommentsSuccess} dishid={this.props.dishid} />
                    </div>

                </div>
</div>
        )
    }
}
export default Dishdetails