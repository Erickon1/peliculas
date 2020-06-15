var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FilmsSchema = new Schema({
    name: String,
    year: Number,
    gender: String,
    director: {type: Schema.Types.ObjectId,ref: "Director"},
    productor: {type: Schema.Types.ObjectId,ref: "Producer"},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Film', FilmSchema);
