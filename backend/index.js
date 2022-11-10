import  express  from "express";
import mysql from "mysql";
import cors from "cors";
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"menu"
})

app.use(express.json())
app.use(cors())
const whitelist = ['http://localhost:3000']; // React app

app.get("/", (req,res)=>{
    res.json("Backend connection successfull!")
})

app.get("/menu", (req,res)=>{
    const q = "SELECT * FROM menu.vare"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.post("/menu", (req,res)=>{
    const q = "INSERT INTO menu.vare VALUES (?)"
    const values = [
        req.body.id,
        req.body.title,
        req.body.desc,
        req.body.cover
];

    db.query(q,[values], (err,data)=>{
        if (err) return res.json(err);
        return res.json("book");
    });
});

app.delete("/menu:id", (req,res)=>{
    const vareid = req.params.id;
    const q = "DELETE FROM menu.vare WHERE id = ?"
    
    db.query(q,[vareid], (err,data)=>{
        if (err) return res.json(err);
        return res.json("book");
    });
});

app.listen(8800, ()=>{
    console.log("loggessd")
})