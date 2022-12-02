const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        name: async (parent, args, context) => {
        if (context.user) {
            const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

            return userData;
        }

        throw new AuthenticationError('not logged in');
    },
},

Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user};
    },
    login: async (parent, {email, password}) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthenticationError('Incorrect login information');
        }

        const correctPass = await user.isCorrectPassword(password);

        if (!correctPass) {
            throw new AuthenticationError('Incorrect Password, Please try again.');
        }
    },
},

};