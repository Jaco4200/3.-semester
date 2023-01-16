import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../scss/style.scss'
const Menu = () => {

const[Kurv, setKurv] = useState([])
useEffect(() =>{
    const FetchAllKurv = async (e)=>{
        try{
            const res = await axios.put("http://localhost:8800/kurv")
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
})

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
        <div className="retter">
            <button className="forret"><h className="retten">Forretter</h></button>
            <button className="forret"><h className="retten">Karryretter</h></button>
            <button className="forret"><h className="retten">Risretter</h></button>
            <button className="forret"><h className="retten">Nudler</h></button>
            <button className="forret"><h className="retten">Drikkelse</h></button>
            <button className="forret"><h className="retten">Tilbehør</h></button>
        </div>
            <div className="menu">
            {vare.map(vare=>(
                <div className="delete" key={vare.id}>
                    <div className="title"><h>{vare.title}</h></div>
                    <div className="pris"><h>{vare.pris}kr</h></div>
                    <div className="desc"><p>{vare.besk}</p></div>
                    <div className="billede">{vare.cover && <img src={vare.cover} alt="" />}</div>
            </div>))}
            </div>
            </div>       
    )
            }
export default Menu
export function SeKurv(){
        const [isActive, setIsActive] = useState(false);
      
        const HandleClick = () => {
          // 👇️ toggle
          setIsActive(current => !current);
      
          // 👇️ or set to true
          // setIsActive(true);
        };
    }
export function vare() {    
}
