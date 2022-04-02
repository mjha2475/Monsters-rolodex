import { Component } from "react";
import Card from '../card/card.jsx';
import './card-list.css'
import '../card/card.styles.css'

class cardList extends Component{
   
    render (){
       const {monsters} = this.props
       console.log(monsters)
        return(
        <div className="card-list">
            {monsters.map((monster)=>{
                
                return (
                  <Card monster={monster}/>
                );
                
            })}
             
        </div>
        )
    }
}

export default cardList;