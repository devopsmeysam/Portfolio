// let mongoose = require('mongoose');

// //Creates a model class:

// let userSchema = mongoose.Schema(
//     {
//         firstName: String,
//         lastName: String,
//         email: {
//             type: String,
//             match: [/.+\@.+\..+/, "Please enter a valid email address"]
//         },
//         username: {
//             type: String,
//             unique: true,
//             required: 'The username is required',
//             trim: true
//         },
//         password: {
//             type: String,
//             validate: [(password) => {
//                 return password && password.length > 6;
//             }, 'The password should be at least 7 characters']
//         },
//         created: {
//             type: Date,
//             default: Date.now
//         }
//     }, 
//     {
//         collection: "user"
//     }
// );

// userSchema.virtual('fullName')
//     .get(function(){
//         return this.firstName + ' ' + this.lastName;
//     })
//     .set(function(fullName){
//         let splitName = fullName.split(' ');
//         this.firstName = splitName[0] || '';
//         this.lastName = splitName[1] || '';
//     });

// module.exports = mongoose.model('user', userSchema);