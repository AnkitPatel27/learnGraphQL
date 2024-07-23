var express = require('express');
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")
const { root, schemaString } = require('./schemaString')
var { createHandler } = require("graphql-http/lib/use/express")

const app = express();

var schema = buildSchema(schemaString)



//all suppports any type of request get,put,post,delete
app.all('/graphql', createHandler({
    schema: schema,
    rootValue: root,
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
