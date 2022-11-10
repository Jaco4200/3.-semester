import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../scss/style.scss'
const Menu = () => {

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
const handleDelete = async (id)=>{
    try{
        await axios.delete("http://localhost:8800/menu"+id)
        window.location.reload()
    }catch(err){
        console.log(err)
    }
}
    return (
  
        <div className="vare">
            {vare.map(vare=>(
                <div className="varer" key={vare.id}>
                    <div className="title"><h1>{vare.title}</h1></div>
                    <div className="desc"><p>{vare.desc}</p></div>
                    <div className="billede">{vare.cover && <img src={vare.cover} alt="" />}</div>
                    <button className="delete" onClick={()=>handleDelete(vare.id)}>Delete</button>
                    <span>{vare.price}</span>
            </div>))}
            <button><Link to="/admin">knap</Link></button>
        </div>
    )
}

export default Menu