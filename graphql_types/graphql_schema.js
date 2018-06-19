const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueries = require('./rootqueries');

module.exports = new GraphQLSchema({
  query: RootQueries
})