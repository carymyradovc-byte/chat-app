const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// xabar qabul qiladi
app.post('/send', (req, res) => {
    const message = req.body.message;
    console.log("YANGI XABAR:", message);
    res.send({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Server ishlayapti: http://localhost:${PORT}`);
});