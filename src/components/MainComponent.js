import React, {Component} from 'react';
import { Navbar,NavbarBrand } from 'reactstrap'
import Menu from "./MenuComponent"
import Home from "./HomeComponent"
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import User from './UserComponent'
import Login from'./LoginComponent'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

const mapStateToProps=state =>{
  return{
    dishes: state.dishes,
    comments: state.comments


  }
}

class Main extends Component {
    constructor(props){
      super(props)
    }
    onDishSelect(dishId){
        this.setState({selectedDish:dishId});
    }

  render(){

    const HomePage= () => {
      return (
        < Home/>
      );
    }

    const dishWithId=({match})=>{
      return(
        <DishDetail dish={this.props.dishes.filter((dish)=> dish.id===parseInt(match.params.ItemId))[0]} comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.ItemId))}/>
      )

    }
  
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/menu' component={() =><Menu dishes={this.props.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/> }/>
          <Route path='/menu/:ItemId' component={dishWithId}/>
          <Route exact path='/user/' component={()=><User/>}/>
          <Route exact path='/login/' component={()=><Login/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>

      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps)(Main));
