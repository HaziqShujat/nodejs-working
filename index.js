import express from "express";
import  bodyparser from "body-parser"
import {dirname} from "path"
import {fileURLToPath} from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const server = 3000;
app.use(bodyparser.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.get("/",(req, res)=>{
    const d = new Date("2024-3-4");
    let day = d.getDay();
    let daytype=" work day";
    let advice="go to work"
    if(day ===0|| day ===6){
        daytype="weekend"
        advice="go to sleep"
    }  
    res.render("index",{daytype:daytype ,advice:advice })
})



app.listen(server, () => {
    console.log(`Server is running on http://localhost:${server}`)
})

