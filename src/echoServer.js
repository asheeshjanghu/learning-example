const restify = require('restify');

//create server
let server = restify.createServer();
server.use(restify.plugins.queryParser()); // this is required for parsing the query parameters

server.get("/", (req, res, next)=> {
    res.send("Hello, Welcome to Echo Server");
    next();
});

// an example of a function where request carries parameters
// example url : http://localhost:8080/Ram
// here Ram is the parameter passed as req.params.name
function parmaterizedPath(req, res, next) {
    res.send("Hello "+ req.params.name);
    next();
}

// example to declare a paramterized path; here :name declares that it is a parameter passed in the path
// example url-> http://lpocalhost:8080/Asheesh
server.get("/:name", parmaterizedPath);

function queryExample(req, res, next) {
    let name = req.query.name;
    if (name.endsWith("Ram")) {
        res.send("Hey Ram! How are you?");
    } else {
        res.send("sorry ${name} I don't know you.");
    }
    next();
}

// example for query parameters
// example url-> http://lpocalhost:8080/profile?name="Asheesh"
server.get("/profile", queryExample);

server.listen(8080, () => {
    console.log("Listening on 8080");
})