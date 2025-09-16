const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Server is running!!!" });
});

app.get('/about', (req, res) => {
    res.json({
        Maker: "Joel",
        Reason: "I need it"
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});