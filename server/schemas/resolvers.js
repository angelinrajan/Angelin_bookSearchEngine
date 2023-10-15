const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('savedBooks');
        return user;
      }
      throw new Error('You are not logged in.');
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Wrong password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (_, {username, email, password}) => {
      try {
        const user = await User.create({username, email, password});
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new Error('Error creating user: ' + error.message);
      }
    },
    saveBook: async (_, { book }, context) => {
      if (context.user) {
        try {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: book } },
            { new: true, runValidators: true }
          );
          return updatedUser;
        } catch (err) {
          console.error(err);
          throw new Error('Could not save the book.');
        }
      }
      throw new Error('You are not authenticated.');
    },
    removeBook: async (_, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        if (!updatedUser) {
          throw new Error("Couldn't find user with this id!");
        }
        return updatedUser;
      }
      throw new Error('You are not authenticated.');
    },
  },
};

module.exports = resolvers;



