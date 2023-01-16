
import React from "react";
import { useState } from "react";
import '../scss/style.scss'
import axios from "axios";
import { useLocation} from "react-router-dom"
const Update = () => {
    const [input, setInput] = useState({
        title: "",
        desc: "",
        cover: "",
    });
    const location = useLocation()
    const vareid = location.pathname.split("/")[2]

    const handleChange = (e) =>{
        setInput((prev) =>({...prev, [e.target.name]: e.target.value}))
    };
    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.put(`http://localhost:8800/menu/${vareid}`, input)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>Update the menu
    <div className="form">
            <div className="flexed">
        <h1>Add new item</h1>
        <input type="text" placeholder="title" onChange={handleChange} name="title"></input>
        <input type="text" placeholder="desc" onChange={handleChange} name="desc"></input>
        <input type="text" placeholder="cover" onChange={handleChange} name="cover"></input>
        <button className="added" onClick={handleClick}>add</button></div></div></div>
  )
  }

export default Update