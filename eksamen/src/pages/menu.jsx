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
            const res = await axios.get("http://localhost:8800/menu", vare)
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
                <div className="varer" key={vare.id}>
                    {vare.cover && <img src={vare.cover} alt="" />}
                    <h1>{vare.title}</h1>
                    <p>{vare.desc}</p>
                    <p>{vare.price}</p>
            </div>))}
            <button><Link to="/admin">knap</Link></button>
        </div>
    )
}

export default Menu