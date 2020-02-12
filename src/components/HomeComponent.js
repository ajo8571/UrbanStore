import React from 'react';
import { Navbar,NavbarBrand,Nav, NavbarToggler,Collapse, NavItem, Jumbotron } from 'reactstrap'

function Home(props){
    return (
        <React.Fragment>
            <Jumbotron>
                        <div className='container'>
                            <div className="row row-header justify-content-center">
                                <div className="col-12 col-sm-6 text-align: centerdisplay: inline-block">
                                    <h1 className="text-align: center">The Urban Store</h1>
                                        <p>
                                            The Urban Store by Teebees is a venture sponsored by entreprenuer
                                            and designer Tina Omiyi and TheSocialGrim INC. 
                                            It's a platform from African designers to display their 
                                            products to the world.
                                        </p>
                                </div>
                            </div>
                        </div>
            </Jumbotron>

            <div className="container">
            <Jumbotron>
                        <div className='container'>
                            <div className="row row-header justify-content-center">
                                <div className="col-12 col-sm-6 text-align: centerdisplay: inline-block">
                                    <h1 className="text-align: center">Sales</h1>
                                       
                                </div>
                            </div>
                        </div>
            </Jumbotron>
            <Jumbotron>
                        <div className='container'>
                            <div className="row row-header justify-content-center">
                                <div className="col-12 col-sm-6 text-align: centerdisplay: inline-block">
                                    <h1 className="text-align: center">Shop Women</h1>
                                       
                                </div>
                            </div>
                        </div>
                </Jumbotron>
                <Jumbotron>
                        <div className='container'>
                            <div className="row row-header justify-content-center">
                                <div className="col-12 col-sm-6 text-align: centerdisplay: inline-block">
                                    <h1 className="text-align: center">Shop Men</h1>
                                       
                                </div>
                            </div>
                        </div>
                </Jumbotron>
                <Jumbotron>
                        <div className='container'>
                            <div className="row row-header justify-content-center">
                                <div className="col-12 col-sm-6 text-align: centerdisplay: inline-block">
                                    <h1 className="text-align: center">Featured Brands</h1>
                                       
                                </div>
                            </div>
                        </div>
                </Jumbotron>
            </div>
        </React.Fragment>
    )
}
export default Home;