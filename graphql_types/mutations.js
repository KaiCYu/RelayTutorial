const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');

const User = require('../mongoose_models/users');
const UserType = require('./user_type');

const mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    changeUserName: {
      type: UserType,
      args: {
        newName: { type: GraphQLString },
        userId: { type: GraphQLID },
      },
      resolve(parentValue, { newName, userId }) {
        return User.changeName(userId, newName);
      }
    }
  }
})

module.exports = mutations;