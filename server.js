const express = require('express');
const connectDB = require('./config/db');
const GraphQLHTTP = require('express-graphql');

const graphql = require('./graphql');
const app = express();

//Cnnect DataBase
connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.use('/graphql', GraphQLHTTP({
    graphiql: true,
    schema: graphql,
    rootValue:graphql
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Startd on Port ${PORT}`));
