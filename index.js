const express = require("express");
const cors = require("cors");
const { response } = require("express");

const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send("gOING TO commit a bean crime")
});

app.use('/auth', authRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));