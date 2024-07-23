var express = require('express');
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")

const app = express();

var schema = buildSchema(`
    type Query{
        name:String,
        desc:String
    }
    `)

var root = {
    name: "Ankit",
    desc: "my name is Ankit Patel"
}

//all suppports any type of request get,put,post,delete
app.all('/graphql', createHandler({
    schema: schema,
    rootValue: root,
}))

app.listen(3000, () => {
    console.log("server started on 3000");
})
