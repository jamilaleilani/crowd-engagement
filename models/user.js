var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
  name: String,
  username: String,
  events: [{ type: Schema.Types.ObjectId, ref: 'Rating' }]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);
module.exports = User;
