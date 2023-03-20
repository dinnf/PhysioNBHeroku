const express = require("express");
const path = require("path")

require("./db/mongoose.js");


const noteRouter = require("./routers/note-routers.js");
const userRouter = require("./routers/user-routers.js");
const patientRouter = require("./routers/patient-routers")

const app = express();
app.use(express.static(path.join(__dirname, "client", "build")))

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json());

app.use(noteRouter);
app.use(userRouter);
app.use(patientRouter);

const port = process.env.PORT || 8000;
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
