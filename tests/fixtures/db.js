const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
	_id: userOneId,
	name: 'Mike',
	email: 'mike@example.com',
	password: 'mikeisbest',
	token: jwt.sign({ _id: userOneId }, "random"),
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
	_id: userTwoId,
	name: 'Jess',
	email: 'jess@example.com',
	password: 'jessisbest',
	token: jwt.sign({ _id: userTwoId }, "random"),
};

const taskOne = {
	_id: new mongoose.Types.ObjectId(),
	description: 'First Task',
	completed: false,
	owner: userOneId,
};

const taskTwo = {
	_id: new mongoose.Types.ObjectId(),
	description: 'Second Task',
	completed: true,
	owner: userOneId,
};

const taskThree = {
	_id: new mongoose.Types.ObjectId(),
	description: 'Third Task',
	completed: true,
	owner: userTwoId,
};

const setUpDatabase = async () => {
	await User.deleteMany();
	await Task.deleteMany();
	await new User(userOne).save();
	await new User(userTwo).save();
	await new Task(taskOne).save();
	await new Task(taskTwo).save();
	await new Task(taskThree).save();
};

module.exports = {
	userOneId,
	userOne,
	userTwoId,
	userTwo,
	taskOne,
	taskTwo,
	taskThree,
	setUpDatabase,
};
