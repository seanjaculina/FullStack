const users = []; //local storage of users, but we could redo this with mongo and make a Database of users

//join user to chat: id will be the socket id for a unique code
function userJoin(id, username) {
  const user = { id, username };

  users.push(user);
  return user;
}

//get current user
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

module.exports = {
  userJoin,
  getCurrentUser,
};
