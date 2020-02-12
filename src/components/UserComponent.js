import React, { Component }  from 'react'
import {Button} from 'reactstrap' 

class User extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container justify-content-center'>
                <div className ='row row-content'>
                    <div className='col-6'>
                        <Button style={{width:'200px' , height:'200px'}}>sign in</Button>
                    </div>
                    <div className='col-6'>
                        <Button style={{width:'200px' , height:'200px'}}>sign up</Button>
                    </div>

                </div> 
            </div>
        )
    }
}
export default User;