import React from 'react';
const newslist = (props) =>{
   const items=props.news.map((item)=>{
     return(
         <div key={item.id}>
         <h3>{item.title}</h3>
         <div>{item.feed}</div>
         </div>
     )

   })
    return(
   <div>{items}</div>

   )


}
export default newslist;