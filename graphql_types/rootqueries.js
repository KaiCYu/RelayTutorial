const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

const UserType = require('./user_type');
const userModel = require('../mongoose_models/users');

const ViewerType = new GraphQLObjectType ({
  name: 'Viewer',
  fields: () => ({
    user: {
      type: UserType,
      resolve(args) {
        return userModel.findOne(args);
      }
    }
  })
})

const RootQueryType = new GraphQLObjectType ({
  name: 'RootQuery',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return userModel.find({});
      }
    },
    myUser: {
      type: ViewerType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        return args;
      }
    }
  })
})

module.exports = RootQueryType;