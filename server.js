const path = require('path');
var express = require('express');
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")
var { makeExecutableSchema } = require("@graphql-tools/schema");
var { loadFilesSync } = require("@graphql-tools/load-files");
var { createHandler } = require("graphql-http/lib/use/express");
const { root } = require('./schemaString');

const app = express();

const allSchemaFiles = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const allResolvers = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

var schema = makeExecutableSchema({
    typeDefs: allSchemaFiles,
    resolvers: allResolvers
})


//all suppports any type of request get,put,post,delete
app.all('/graphql', createHandler({
    schema: schema,
    graphiql: true
}))

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(3000, () => {
    console.log("server started on 3000");
})
