require("dotenv").config();
const port = process.env.PORT || 9000;
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const path = require('path')
const route = require("./router")
const legit = require("legit");
let Email;
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const User = require("./model/user");
const { urlencoded } = require('body-parser');
mongoose.connect(process.env.MONGO_URI);


app.get('/', (req, res) => {
    res.render('home', {msg: ""});
})

app.post("/",  async(req, res) => {
    const email = req.body.email;
    if (!email) {
        res.render("home", { msg: "Can Not Proceed Without Email" });
    } else {
        const result = await legit(email);
        if(result.isValid){
             User.findOne({ email: email }, (err, found) => {
                if (!found) {
                    exports.Email = email;
                    res.redirect("/quiz/page1")
                    console.log("Valid");
                } else if (found) {
                    res.render("home", { msg: "Email Already in Use"});
                } else if (err){
                    console.log(err);
                }
            })
        } else {
            res.render("home", { msg: "Can not verify Email" });
            console.log("Not Valid");
        }
    }
})

app.use("/quiz", route);

app.listen(port, (req, res) => {
    console.log(`Server Listening on ${port} http://localhost:${port}`);
})
