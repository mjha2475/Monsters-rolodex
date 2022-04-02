import {Component} from 'react';
import './App.css';
import CardList from './cardlist/card-list.jsx'
import SearchBox from './search-box/search-box.jsx'

class App extends Component {

  constructor(){
    super()
    this.state = {
      monsters:[],
      searchTerm:''
    }
  }
  
  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>res.json())
    .then(user=>{
      this.setState(()=>{
       return {monsters:user}
      })
    })
  }

   onSearch=(event)=>{
    const searchTerm = event.target.value.toLowerCase()
        this.setState(()=>{
            return {searchTerm}
        })
   }

  render(){

    const filteredMonsters = this.state.monsters.filter(
      (monster)=>{
          return monster.name.toLowerCase().includes(this.state.searchTerm);
      }
    )

  return (
    <div className="App">
    <h1 className='app-title'>MONSTERS ROLODEX</h1>
       <SearchBox onChangeHandler={this.onSearch} placeholder = 'Search Monsters'/>
       <CardList monsters={filteredMonsters}/>
    </div>
   
  );
  }
}

export default App;
