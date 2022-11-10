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
    return (
  
        <div className="vare">
            {vare.map(vare=>(
                <div className="delete" key={vare.id}>
                    <div className="title"><h1>{vare.title}</h1></div>
                    <div className="desc"><p>{vare.desc}</p></div>
                    <div className="billede">{vare.cover && <img src={vare.cover} alt="" />}</div>
                    <span>{vare.price}</span>
            </div>))}
            <button><Link to="/admin">knap</Link></button>
        </div>
    )
}
export default Menu
export function vare() {
    
}