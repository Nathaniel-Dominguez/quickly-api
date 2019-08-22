// External Dependancies
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
	title: String,
	make: String,
	price: String,
	age: Number,
	services: {
		type: Map,
		of: String
	}
})

mongoose.exports = mongoose.model('Car', carSchema)