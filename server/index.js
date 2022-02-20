const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cookieParser = require('cookie-parser');
const config = require('./config/key');

app.use(cookieParser());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch(error => console.log(error));

// production mode
if(process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
	})
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})