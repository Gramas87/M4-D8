// ASSIGNED TO GIORGIO
// This needs to take props like img src from Movie Gallery

import { Col, Image, Button } from "react-bootstrap"
import "./MovieCard.css" 
import CommentArea from "./CommentArea"
import { Component } from "react"
import withRouter from "../helpers/withRouter"


class  MovieCard extends Component{
    state = {
        selected: false,
      }
      
      toggleState = () => {
        if (this.state.selected === false) {
          this.setState({
            selected: true, 
          })
      
      
        } else {
          this.setState({
            selected: false, 
          })
      
        }
      }
render(){
    return (
        <>
        <Col className="px-1 mb-1" xs={8} sm={3} md={2}>
        {this.state.selected && (<CommentArea show="true" title = {this.props.title} id = {this.props.id}/>)}
        <Image onClick={(event) => this.toggleState(event)} fluid className="w-100 h-100 main-image" key={this.props.id} alt="movieposter" src={this.props.img} />
        <Button >Go to Movie Details</Button>
        </Col>
        </>
    )
    }
}

export default withRouter(MovieCard)
