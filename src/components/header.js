import React from 'react';
 
class Header extends React.Component{
    constructor(props){
        super(props);
     this.state={
         keywords:''

     }
    
    }
  
    inputchange(event){
     this.setState({keywords:event.target.value});
   }
   
    render(){
       return(
        <header>
        <div className="logo">Logo</div>
        <input onChange={this.inputchange.bind(this)}/>
       </header>
       )
   }
}

export default Header;