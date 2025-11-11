const express = require("express");
const app = express();
app.use(express.json());

const whitelist = {
  "Koao78": true,
  "O7Ea5": true,
  "RwweRA7": true
};

// API สำหรับ Roblox ตรวจสอบ Key
app.get("/checkkey", (req, res) => {
  const key = req.query.key;
  if (!key) return res.json({ allowed: false });
  res.json({ allowed: !!whitelist[key] });
});

// เว็บหน้า admin / แสดง whitelist
app.get("/", (req, res) => {
  const keys = Object.keys(whitelist).join("<br>");
  res.send(`<h1>Whitelist Keys</h1><p>${keys}</p>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
