import React, {Component} from  'react';
import './WishList.css';


class WishList extends Component{
   render(){
       return(
           <div className = "WishList">
               <h1> Shopping List </h1>
               <div className = 'List'>
                   <div className = 'input_list'><input type = 'checkbox'/><label for="checkbox">One</label></div>
                   <div className = 'input_list'><input type = 'checkbox'/><label for="checkbox">Two</label></div>
                   <div className = 'input_list'><input type = 'checkbox'/><label for="checkbox">Three</label></div>
                   <div className = 'input_list'><input type = 'checkbox'/><label for="checkbox">Four</label></div>
               </div>
               <div className = 'navBar'>
                   <button>Add</button>
                   <button>Delete</button>
                   <button>Save</button>
               </div>
               
               

           </div>
       )
   }
}

export default WishList;