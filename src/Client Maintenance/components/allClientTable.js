import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { fetchAllGuild, Read } from "../data.js";

const AllClientTable = () => {
  const [currentData, setCurrentData] = useState([]);
useEffect(() => {
  // const value = Read();
  // console.log(value);
  fetch('http://localhost:3000/guild').then((resp)=>{ //go grab the response
  if(resp.ok){// if response is okay 
    resp.json().then((value)=>{ // then change the data 
      setCurrentData(value) //set the data 
    })
    
    

  }else{
    console.log(resp.error);
  }

  }).catch((e)=>{
    console.log(e);
  })
  // fetchAllGuild('http://localhost:3000/guild').then((value)=>{
  //   setCurrentData(value)

  // }).catch((e)=>{
  //   console.log(e);
  // })
  
}, [])
const postOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ currentData })
};
// useEffect(() => {
  
// fetch('http://localhost:3000/guild',postOptions ).then((value)=>{
//   console.log("post added");
// })
  
// }, [])

  return (
    <div>
      <div>
        <input placeholder="search" />
      </div>
      <Table striped bordered hover variant="dark">
        {/* <thead>
          <tr>
            <th>Client#</th>
            <th>Client</th>
            <th> Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => {
            return (
              <tr>
                <td>{item.c_num}</td>
                <td>{item.Client}</td>
                <td>{item.c_Name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody> */}
    
      <thead>
       <tr>
       <th>id#</th>
       <th>Code</th>
       <th> Discription</th>

     </tr>
     </thead>
      <tbody>
        {
          currentData.map((item,index)=>{
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td>{item.description}</td>
                
              </tr>
            )
          })
        }
      </tbody>
    
       
      </Table>
    </div>
  );
};
export default AllClientTable;
