import React from "react";
import { useState } from "react";
import '../scss/style.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Admin = () => {
    const [input, setInput] = useState({
        id: null,
        title: "",
        desc: "",
        cover: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) =>{
        setInput(prev=>({...prev, [e.target.name]: e.target.value}))
    };
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/menu", input)
            console.log(input)
        }catch(err){
            console.log(err)
        }
    }
    return (

        <div className="form">
        
        <h1>Add ned item</h1>
        <input type="number" placeholder="" onChange={handleChange} name="id"></input>
        <input type="text" placeholder="" onChange={handleChange} name="title"></input>
        <input type="text" placeholder="desc" onChange={handleChange} name="desc"></input>
        <input type="text" placeholder="cover" onChange={handleChange} name="cover"></input>
        <button onClick={handleClick}>add</button>
        </div>
    )
        
}

export default Admin