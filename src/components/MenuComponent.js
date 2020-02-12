import React, { Component } from 'react';
import {Media} from 'reactstrap'
import {Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'


class Menu extends Component{
    constructor (props){
        super(props);
        
    }
    render(){
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-6 col-lg-3">
                    <Card body outline color="white">
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg style={{width:"100%", height:"80%"}} src={dish.image} alt={dish.name}/>
                            <CardBody className="text-left" style={{width:"100%", height:"20%"}} >
                                <CardText>{dish.name}</CardText>
                            </CardBody>
                        </Link>
                    </Card>
                </div>
            )
        });
        return(
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='row'>
                        {menu}
                </div>
                <div className="row">
                </div>
            </div>

        )
    }
}

export default Menu