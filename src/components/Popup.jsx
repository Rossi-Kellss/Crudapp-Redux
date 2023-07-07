import React from 'react'
import "./Popup.css"
import { useSelector } from 'react-redux'


const Popup = ({id,view,setView}) => {

    const allUsers=useSelector((state)=>state.app.users);
    // console.log(id);
    // console.log(allUsers)
   
    // const newId=id.toString()
    allUsers.map((data)=>{
        // console.log(data.id);
        if(data.id===id){
            console.log(data);
        }
    })
    // for(let i=0;i<=allUsers.length;i++){
    //     if(allUsers[i].id==newId){
    //         print("new",allUsers);
    //     }
    // }
    
    // const filtredData=allUsers.filter((ele)=>ele.id==newId)
    // console.log(filtredData);


  return (
    <div className='main'>
        <p className='close' onClick={()=>{setView(!view)}}>X</p>
        <h2>Details</h2>
        {/* <p>Name:{filtredData[0].name}</p> */}
        {/* <p>Age:{filtredData[0].age}</p>
        <p>Address{filtredData[0].address}:</p>
        <p>Gender:{filtredData[0].gender}</p> */}
        
    </div>
  )
}

export default Popup