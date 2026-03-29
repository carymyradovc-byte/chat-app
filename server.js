const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/send', (req, res) => {
    console.log("YANGI XABAR:", req.body.message);
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log("Server ishlayapti:", PORT);
});
