/**
 * This file has helper functions to manager users
 */

const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // See if another user in the chat shares the same name. If so, return an error
  const userExists = users.find(
    (user) => user.name === name && user.room === room,
  );
  if (userExists) {
    return { error: 'Username already in use' };
  }

  const newUser = { id, name, room };
  users.push(newUser);
  return newUser;
};

const removeUser = (id) => {
  const indexOfUser = users.findIndex((user) => user.id === id);
  if (indexOfUser !== -1) users.splice(indexOfUser, 1);
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
