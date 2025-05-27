const express = require('express');
const app = express();

// ① Parse JSON & URL‑encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ② Mount your router
const contactUsApp = require('./index');
app.use('/api', contactUsApp);

// ③ Start listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
