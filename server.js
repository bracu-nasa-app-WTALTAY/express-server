const express = require('express')
const app = express()

const path = require('path')
// const staticServePath = path.join(__dirname, '..', 'client', 'build')
const staticServePath = path.join(__dirname, 'build')
app.use('/', express.static(staticServePath))

app.get('*', (req, res) => {
	res.sendFile(path.join(staticServePath, 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
