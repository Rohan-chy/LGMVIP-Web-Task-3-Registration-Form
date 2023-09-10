import React from 'react'
import "../style/Enroll.css"

const Enroll = ({name,email,address,gender,url,course}) => {
    
  return (
    <>
    <div className='enrollContainer'>
        
        {/* <div >
        <h3>NAME:  {name}</h3>
        <h4>ADDRESS: {address}</h4>
        <h4>EMAIL:  {email}</h4>
        <h4>GENDER:  {gender}</h4>
        </div>
        
        <img src={url} alt='' /> */}
      <table >
        <tr>
          <th style={{fontSize:"20px"}}>Description</th>
          <th style={{fontSize:"20px"}}>Image</th>
        </tr>

        <tr>
          <td>
          <h4>Name:  {name}</h4>
        <h4>Address: {address}</h4>
        <h4>Email:  {email}</h4>
        <h4>Gender:  {gender}</h4>
        <h4>Course Enrolled:  {course}</h4>
          </td>

          <td> <img src={url} alt='' /></td>
        </tr>
      </table>
       
    </div>
    
    </>
  )
}

export default Enroll;