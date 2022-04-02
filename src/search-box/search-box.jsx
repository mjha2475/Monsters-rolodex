import { Component } from "react";
import './search-box.styles.css'
class searchBox extends Component{
    render(){
        return(
            <div>
        <input type="search" placeholder={this.props.placeholder} 
        className = 'search-box'
           onChange={this.props.onChangeHandler}
        />
            </div>
        )
    }
}

export default searchBox