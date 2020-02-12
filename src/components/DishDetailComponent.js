import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,CardSubtitle, Breadcrumb,BreadcrumbItem, Button,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Form, FormGroup, Label, Input, Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom'
import { conditionalExpression } from '@babel/types';
import {Control, LocalForm, Errors} from 'react-redux-form'

const required=(val)=> val && val.length;

class DishDetail extends Component{
    constructor (props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            size: '',
            quantity: 1
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        console.log('Current size is: ' + target.name+ target.size);
        this.setState({
          size: value
        });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        
    }


    renderDish(dish){

        return(
            <Card body outline color="white">
                    <CardImg top style={{width:"100%", height:"80%"}} src={'http://localhost:3000/'+dish.image} alt={dish.name} />
                    <CardBody>
                    </CardBody>
            </Card>
        )
       

    }
    renderComment(comment){
        
        return(
            <div>
                <p>{comment.comment}<br></br>{"--"+comment.author+" "}{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>       
            </div>
        )
       

    }
    setSize(size){
        this.setState({
            buttonTag: size
        })
    }
    
    render(){
        const dish = this.props.dish;
        const comments = this.props.comments.map(this.renderComment);
        if (dish!=null){
            return(
                <div className="container">
                    <div className="row" >
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    </div>
                    <div className='row row-content'>
                        <div  className="col-12 col-md-6 ">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-6 justify-content-left">
                            <Card body outline color="white" className="text-left">
                                <LocalForm onSubmit={this.handleSubmit}>
                                    <CardTitle>
                                    <Row className="form-group">
                                        <Col md={{size:12, offset: 1}}>
                                            {dish.name}
                                        </Col>
                                    </Row>
                                    </CardTitle>
                                    <CardSubtitle>
                                        <Row className="form-group">
                                        <Col md={{size: 6, offset: 1}}>
                                            {dish.price}
                                        </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col sm={{size: 2, offset: 1}} md={{size: 4, offset: 1}}> size
                                                <Control.select 
                                                    model=".size" name ='size' id="size" 
                                                    className='form-control'
                                                    validators={{
                                                        required
                                                    }}
                                                    >
                                                    <option></option>
                                                    <option>s</option>
                                                    <option>m</option>
                                                    <option>l</option>
                                                    <option>{"xl"}</option>
            
                                                </Control.select>
                                                <Errors
                                                    className="text-danger"
                                                    model=".size"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        validEmail: 'Invalid Email Address'
                                                    }}
                                                />
                        
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={{size: 10, offset: 2}}>
                                                <Button type="submit" color="primary">
                                                   ADD TO BAG
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardSubtitle>
                                </LocalForm>
                            </Card>
                        </div>
                    </div>
                </div>

            )
        }else{
            return(<div></div>)
        }

    }
}

export default DishDetail