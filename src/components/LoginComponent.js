import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Card,CardTitle, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Login extends Component{


    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password:"",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
            <div className="row row-content justify-content-center">
                <div className="col-12">
                    <h3>Welcome to the The Urban Store!</h3>
                </div>
                <div className="col-12 col-md-6">
                    <Card style={{alignItems: 'center'}} body outline color="white">
                        <CardTitle>Have an account?</CardTitle>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row style={{alignContent:'center'}}>
                                <Col md={15}>
                                    <Input type="text" id="username" name="username"
                                        placeholder="Username"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={15}>
                                    <Input type="password" id="password" name="password"
                                        placeholder="password"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange} />
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                                    <Col md={{size: 5}}>
                                        <Button type="submit" color="primary">
                                            Login
                                        </Button>
                                    </Col>
                                    <Col md={{size: 5}}>
                                        <Button type="submit" color="primary">
                                            sign up
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                    </Card>
                </div>
            </div>
               
        )
    }
}

export default Login 