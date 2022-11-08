import React from "react";
import { useState } from "react";
import '../scss/style.scss'
import axios from "axios";
const Admin = () => {
    const [vare, setVare] = useState({
        id:"",
        title:"",
        desc:"",
        cover:"",
        price: null
    });

    const handleChange = (e) =>{
        setVare(prev=>({...prev, [e.target.name]: e.target.value}))
    };
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/menu", vare)
        }catch(err){
            console.log(err)
        }
    }
    console.log(vare)
    return (
        <div className="form">admin
        <h1>Add ned item</h1>
        <input type="number" placeholder="" onChange={handleChange} name="id"></input>
        <input type="text" placeholder="" onChange={handleChange} name="title"></input>
        <input type="text" placeholder="desc" onChange={handleChange} name="desc"></input>
        <input type="text" placeholder="cover" onChange={handleChange} name="cover"></input>
        <input type="number" placeholder="price" onChange={handleChange} name="price"></input>
        <button onClick={handleClick}>add</button>
        </div>
    )
}

export default Admin