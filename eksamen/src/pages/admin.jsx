import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
    const [vare,setVare] = useState ([])
useEffect(()=>{
    const fetchAllMenu = async ()=>{
        try{
            const res = await axios.get("http://localhost:8800/menu")
            console.log(res);
            setVare(res.data); 
        }catch(err){
            console.log(err);
        }
    }
    fetchAllMenu()
}, [])
    const navigate = useNavigate();
    const handleChange = (e) =>{
        setInput(prev=>({...prev, [e.target.name]: e.target.value}))
    };
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/menu", input)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/menu"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (

        <div className="form">
            <div className="flexed">
        <h1>Add new item</h1>
        <input type="number" placeholder="ID" onChange={handleChange} name="id"></input>
        <input type="text" placeholder="title" onChange={handleChange} name="title"></input>
        <input type="text" placeholder="desc" onChange={handleChange} name="desc"></input>
        <input type="text" placeholder="cover" onChange={handleChange} name="cover"></input>
        <button className="added" onClick={handleClick}>add</button></div>
        <div className="delete">
        {vare.map(vare=>(
                <div className="huh" key={vare.id}>
                <div className="yo">vare id:{vare.id}</div>
                <div className="title"><h1 className="dk">{vare.title}</h1></div>
                <button className="knape" onClick={()=>handleDelete(vare.id)}>Delete</button>
                </div>))}</div>
        </div>
        
    )
        
}

export default Admin