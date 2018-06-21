const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueries = require('./rootqueries');
const Mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQueries,
  mutation: Mutations

})