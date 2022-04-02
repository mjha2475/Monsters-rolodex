import {Component} from 'react';
import './card.styles.css';


class Card extends Component{
    render(){
        const {id,name,email}=this.props.monster;
        return (
            <div className="card-container" >
            <div key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`${name} monster` }/>
            <h1>{name}</h1>
            <p>{email}</p>
            </div>
       
       
       </div>
        );
    }
}
export default Card;