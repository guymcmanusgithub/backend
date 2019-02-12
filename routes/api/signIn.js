// // we need to require in our users database so that we can find them
// const User = require('../../models/User.model')

// module.exports = (app) => {
//    app.post('/api/account/signup', (req, res, next) => {
//        // we need the following items from the body:
//        const { body } = req; 
//        const { password } = body;
//        let { email } = body;

//         if(!email) {
//             return res.send({
//                 success: false,
//                 message: 'Error: Email cannot be blank.'
//             })
//         }
//         if(!password) {
//             return res.send({
//                 success: false,
//                 message: 'Error: Password cannot be blank.'
//             })
//         }
//         //I should put a minimum length on each as well

//         email = email.toLowerCase();
//         email = email.trim()

//         // Verify email doesn't exist
//         User.find({
//             email: email
//         }, (err, previousUsers) => {
//             if(err) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Server error'
//                 })
//             } else if (previousUsers.length > 0) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Account already exists'
//                 })
//             } 
//             //remember to put the errors as an object, because you want them to be parse-able

//             //Save the new user
//             const newUser = new User();

//             newUser.email = email;
//             newUser.password = newUser.generateHash(password);
//             newUser.save((err, user) => {
//                 if(err) {
//                     return res.send({
//                         success: false,
//                         message: 'Error: Server error'
//                     })
//                 }
//                 return res.send({
//                     success: true,
//                     message: 'Signed up'
//                 })
//             })
//         })
//    })// i haven't validated the email - you can use lodash or something like that
// }