import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import Newslist from './components/new_list'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      news:JSON
    }
  }
  
  render(){
   return(
     <div>
     <Header/>
     <Newslist news={this.state.news}/>
     </div>
   )


  }


}
ReactDOM.render(<App/>,document.querySelector('#root'));

