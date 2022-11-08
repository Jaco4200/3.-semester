import  express  from "express";
import mysql from "mysql"
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"menu"
})

app.use(express.json())
app.get("/", (req,res)=>{
    res.json("hello this is backend!")
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
        req.body.cover,
];

    db.query(q,[values], (err,data)=>{
        if (err) return res.json(err);
        return res.json("book");
    });
});
app.listen(8800, ()=>{
    console.log("loggessd")
})