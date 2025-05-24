const express = require('express');
const router = express.Router();


//controllers
const { 
  // handleGetAllUsers,
  // handleGetUserById,
  // handleUpdateUserById,
  // handleDeleteUser,
  // handleCreateUser,
  handleSignUpUser, 
  handleSignInUser,
} = require('../controllers/user');
// router.get('/users', async (req, res) => {
//   const allDBUsers = await User.find({});
//   console.log("Dbusers", allDBUsers);
//   const html = `<ul> ${allDBUsers.map(user => `<li> ${user.firstName} </li>`).join("")}</ul>`;
//   res.send(html);
// })

// router.get('/', handleGetAllUsers);
// Create a user in file / db
router.post('/signup', handleSignUpUser);
router.post('/login', handleSignInUser);
// router
//   .route("/:id")
//   .get(handleGetUserById)
//   .patch(handleUpdateUserById)
//   .delete(handleDeleteUser);

module.exports = router;

