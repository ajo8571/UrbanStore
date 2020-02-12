import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, ButtonDropdown, DropdownMenu,DropdownToggle,DropdownItem,Row,Col,Table} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { black } from 'ansi-colors';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isWomenOpen: false,
          isMenOpen: false
        
        };
        this.toggleWomen = this.toggleWomen.bind(this);
        this.toggleMen = this.toggleMen.bind(this);


      }

    toggleWomen(){
        this.setState({
            isWomenOpen:!this.state.isWomenOpen
        })
    }
    toggleMen(){
        this.setState({
            isMenOpen:!this.state.isMenOpen
        })
    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md" bg='dark' variant='dark'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='http://localhost:3000/assets/images/UrbanStore.png' height="90" width="80" alt='The Urban Store' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'> 
                                        <ButtonDropdown  className="btn-block"direction="down"  onMouseEnter={this.toggleWomen} onMouseLeave={this.toggleWomen}isOpen={this.state.isWomenOpen} toggle={this.toggleWomen}>
                                            <DropdownToggle style={{backgroundColor: '#0f0f0f',}}>
                                                    Women
                                            </DropdownToggle>
                                                <DropdownMenu>
                                                <Table boarderless  responsive  size= 'sm'> 
                                                    <tbody>
                                                        
                                                        <td rowSpan='10' rowSpan='10'> 
                                                        <th>
                                                            Clothing
                                                        </th>
                                    
                                                        <DropdownItem>Shirts</DropdownItem> 
                                                        <DropdownItem>Tees & Tanks</DropdownItem>
                                                        <DropdownItem>Jackets & Coats</DropdownItem>
                                                        <DropdownItem>Polos</DropdownItem>
                                                        <DropdownItem></DropdownItem>
                                                        <DropdownItem>Trainers</DropdownItem>
                                                        <DropdownItem>other</DropdownItem>
                                                        <DropdownItem>Shirts</DropdownItem> 
                                                        <DropdownItem>Tees & Tanks</DropdownItem>
                                                        <DropdownItem>Jackets & Coats</DropdownItem>
                                                        <DropdownItem>Polos</DropdownItem>
                                                        <DropdownItem>Jeans</DropdownItem>
                                                        <DropdownItem>Trainers</DropdownItem>
                                                        <DropdownItem>other</DropdownItem>
                                                        <DropdownItem>Shirts</DropdownItem> 
                                                        <DropdownItem>Tees & Tanks</DropdownItem>
                                                        <DropdownItem>Jackets & Coats</DropdownItem>
                                                        <DropdownItem>Polos</DropdownItem>
                                                        <DropdownItem>Jeans</DropdownItem>
                                                        <DropdownItem>Trainers</DropdownItem>
                                                        <DropdownItem>other</DropdownItem>
                                                        </td>
                                                        
                                                       
                                                    
                                                                                                           <tr/>

                                                        <td><DropdownItem>Jackets & Coats</DropdownItem></td>
                                                        <td><DropdownItem>shorts</DropdownItem></td>
                                                        <td><DropdownItem>Slippers</DropdownItem></td>
                                                        <tr></tr>

                                                        <td><DropdownItem>Polos</DropdownItem></td>
                                                        <td><DropdownItem>Tracks & Jogger</DropdownItem></td>
                                                        <td><DropdownItem>Heels</DropdownItem></td>
                                                        <tr/>

                                                        <td><DropdownItem>Onesy</DropdownItem></td>
                                                        <td><DropdownItem>Skirts</DropdownItem></td>
                                                        <tr/>

                                                        <td><DropdownItem>other</DropdownItem></td>
                                                        <tr/>

                                
                                                    </tbody>
                                                </Table>
                                                    
                                                    
                                                </DropdownMenu>
                                        </ButtonDropdown>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/menu'> 
                                        <ButtonDropdown  className="btn-block"direction="down"  onMouseEnter={this.toggleMen} onMouseLeave={this.toggleMen}isOpen={this.state.isMenOpen} toggle={this.toggleMen}>
                                                <DropdownToggle style={{backgroundColor: '#0f0f0f',}}>
                                                        Men
                                                </DropdownToggle>
                                                    <DropdownMenu>
                                                        <Row>
                                                            <DropdownItem>shirts</DropdownItem>
                                                            <DropdownItem>Jeans</DropdownItem>
                                                            <DropdownItem>shirts</DropdownItem>
                                                            <DropdownItem>Jeans</DropdownItem>
                                                            <DropdownItem>Tees & Tanks</DropdownItem>
                                                            <DropdownItem>Tees & Tanks</DropdownItem>
                                                            <DropdownItem>Tees & Tanks</DropdownItem>
                                                            <DropdownItem>Tees & Tanks</DropdownItem>
                                                            <DropdownItem>Tees & Tanks</DropdownItem>
                                                        </Row>
                                                </DropdownMenu>
                                        </ButtonDropdown>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'> </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <NavItem>
                            <div className="row justify-content-right">
                                
                                <NavItem>
                                <NavLink className="nav-link"  to='/checkout'><span style={{color:'white'}}className="fa fa-shopping-bag fa-lg" ></span></NavLink>
                                </NavItem>
    
                                <NavItem>
                                    <NavLink className="nav-link"  to='/menu'><span style={{color:'white'}}className="fa fa-heart fa-lg" ></span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/user'><span style={{color:'white'}}className="fa fa-user fa-lg" ></span></NavLink>
                                </NavItem>
                            </div>
                        </NavItem>

                        

                
                    </div>
                    
                </Navbar>
               
            </div>
        );
    }
}

export default Header;
