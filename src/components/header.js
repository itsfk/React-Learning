import React from 'react';
 
class Header extends React.Component{
   inputchange(event){
       console.log(event.target.value)
   }
   
    render(){
       return(
        <header>
        <div className="logo">Logo</div>
        <input onChange={this.inputchange}/>
        </header>
       )
   }
}

export default Header;