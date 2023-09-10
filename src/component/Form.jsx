import React, { useState } from 'react'
import "../style/Form.css"
import Enroll from './Enroll';


const Form = () => {
  const [toggle,setToggle]=useState(false);
  
  const[obj,setObj]=useState({
    name:"",
    email:"",
    address:"",
    gender:"",
    url:"",
    course:""
  })
  const handling=(e)=>{
    const {name,value}=e.target;
    setObj({...obj,[name]:value})
  }
  
  const [list,setList]=useState([])

  const addingData=(e)=>{
    e.preventDefault();
    setList([...list,obj]);
    setToggle(true);
  }

const clear=()=>{
 setObj("");
}
  return (
    <div className='mainForm'>
    <div className='formContainer'>
        <form onSubmit={addingData}>
            <label htmlFor="name">Full Name</label><br/>
            <input type="text" name="name" id="name" placeholder='Enter Full Name'  onChange={handling}/><br/><br/>

            <label htmlFor="email">Email</label><br/>
            <input type="email" name="email" placeholder='Enter Email' onChange={handling}/><br/><br/>

            <label htmlFor="address">Enter Address</label><br/>
            <textarea  id="address" placeholder='Enter address' name='address' onChange={handling}/><br/><br/>

            <label htmlFor="url">Image Url</label><br/>
            <input type="url" name="url"  placeholder='Enter Image Url' onChange={handling}/><br/><br/>

            <label htmlFor="gender">Gender</label><br/>
            <input type="radio" name="gender" value="male"  checked={obj.gender === "male"} onChange={handling} />
            <span>Male</span>

            
            <input type="radio" name="gender"  value="female"  checked={obj.gender === "female"} onChange={handling}/>
            <span>Female</span><br/> <br/>

            <label htmlFor="skills">Skills</label><br/>
            <input type="checkbox" name="js"  />
            <span>JS</span>

            <input type="checkbox" name="html" />
            <span>HTML</span>

            <input type="checkbox" name="css" />
            <span>CSS</span><br/><br/>

            <select  onChange={handling} name='course'>
                <option value="COURSES">COURSES</option>
                <option value="MERN">MERN</option>
                <option value="REACT">REACT</option>
                <option value="NODE">NODE</option>
                <option value="EXPRESS">EXPRESS</option>
                <option value="MYSQL">MYSQL</option>
            </select><br/><br/>

            <div className='divBtn'>
            <button type="submit" className='enrollBtn'>Enroll Student</button>
            <button type="reset" className='clearBtn'onClick={clear} >Clear</button>
            
            </div>
        </form>
        
    </div>
    {toggle && <div className='enrollDiv'>  {/*css used here in form.css */}
    <h1 >Enrolled Students</h1>
    {list?.map((item,index)=>(
          <Enroll key={index} name={item.name} email={item.email} gender={item.gender} address= {item.address} url={item.url} course={item.course}/>
        ))}
    </div> }
    </div>
  )
}

export default Form;