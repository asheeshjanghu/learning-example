const restify = require('restify');
const fibonacci_sequencer = require('./controllers/fibonacci_sequence.js');

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

function nthFib(req, res, next) {
    let n = req.params.n;
    let fibNum = fibonacci_sequencer.nthFib(n);
    console.log(`${n}th fibonacci number is ${fibNum}`);
    res.send(n);
    return next();
}
// to get nth fibonacci number
server.get("/fib/:n", nthFib);

server.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}. welcome from ${process.env.USER_NAME} in ${process.env.APP_ENV} environment ` );
})