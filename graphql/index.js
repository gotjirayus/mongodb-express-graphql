import { schemaComposer } from 'graphql-compose';

const qurey = require('./query/index');
schemaComposer.Query.addFields(qurey);

const mutaion = require('./mutaion/index')
schemaComposer.Mutation.addFields(mutaion);
  
const graphqlSchema = schemaComposer.buildSchema();
module.exports = graphqlSchema;