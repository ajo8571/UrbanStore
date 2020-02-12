import {createStore, combineReducers} from 'redux';
import {Dishes} from './dishes.js';
import{Comments} from './comments.js'
import { from } from 'rxjs';

export const ConfigureStore = ( )=> {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments
            
        })
       
    )
    return store;
}
