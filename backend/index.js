import  express  from "express";
import mysql from "mysql";
import cors from "cors";
const app = express()
app.use(express.json())

const db = mysql.createConnection({
    host:"mysql45.unoeuro.com",
    user:"webarts_dk",
    password:"nepwFx52AEba4drgcBmy",
    database:"webarts_dk_db_3eksamen"
})


app.use(cors())
const whitelist = ['http://localhost:3000']; // React app

app.get("/", (req,res)=>{
    res.json("Backend connection successfull!")
})

app.get("/menu", (req,res)=>{
    const q = "SELECT * FROM vare"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.post("/menu", (req,res)=>{
    const q = "INSERT INTO vare VALUES (?)"
    const values = [
        req.body.id,
        req.body.title,
        req.body.pris,
        req.body.besk,
        req.body.cover
];

    db.query(q,[values], (err,data)=>{
        if (err) return res.json(err);
        return res.json("book");
    });
});
app.delete("/menu:id", (req,res)=>{
    const vareid = req.params.id;
    const q = "DELETE FROM vare WHERE id = ?"
    
    db.query(q,[vareid], (err,data)=>{
        if (err) return res.json(err);
        return res.json(vareid);
    });
});
app.put("/kurv", (req, res)=>{
    const vareid = req.params.id;
    const q = "CREATE kurv SET 'title' = (?), 'price' = (?)";
    const kurvvalues = [
        req.body.title,
        req.body.price
    ];
    db.query(q,[...values, vareid], (err, data)=>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.put("/menu/:id", (req,res)=>{
    const vareid = req.params.id;
    const q = `UPDATE vare SET 'title' = (?), 'descc' = (?), 'cover' = (?) WHERE id = (?)`;
    
    const valuess = [
        req.body.title,
        req.body.besk,
        req.body.cover
];
    db.query(q,[...valuess, vareid], (err, data)=>{
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, ()=>{
    console.log("loggessd")
})