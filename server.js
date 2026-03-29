const express = require('express');
const app = express();

// 🔥 MUHIM: Railway uchun port
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

// xabar qabul qilish
app.post('/send', (req, res) => {
    const message = req.body.message;
    console.log("YANGI XABAR:", message);
    res.json({ status: "ok" });
});

// serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server ishlayapti: ${PORT}`);
});
