const express = require('express')
const app = express()
const PORT = process.env.PORT || 80
const path = require('path')
app.use('/', express.static(path.join(__dirname, '/src')))
app.use('/', require('./routes/root'))
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'src', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" })
    } else {
        res.type('txt').send("404 Not Found")
    }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
