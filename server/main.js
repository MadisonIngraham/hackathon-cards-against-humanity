// NOTE this is essentially the main portion of our server
import express from "express";
import cors from "cors";
import bp from "body-parser";
import DbContext from "./db/dbConfig";

const port = process.env.PORT || 3000;

//NOTE next we need to create our server
let server = express();

//NOTE Fire up database connection
DbContext.connect();

//NOTE Creates a reference to the build project on the client (if api only remove this line)
server.use(express.static(__dirname + "/../client"));

//NOTE Allows requests from the port 8080, add additional addresses as needed
var whitelist = ["http://localhost:8080"];
var corsOptions = {
	origin: function (origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};
server.use(cors(corsOptions));
//lol
//NOTE we are giving our server the bodyparser middleware. This middleware gives use the ability to pass information into our server as a request and parse it from JSON back into objects.
server.use(bp.urlencoded({ extended: true }));
server.use(bp.json());

//NOTE Everything above this line always stays the same

//NOTE next we want to register all our routes(doorways that can be accessed in our app)

//NOTE we have to import access to our controllers
import blackCardsController from "./controllers/BlackCardsController";
import whiteCardsController from "./controllers/WhiteCardsController";
import usersController from "./controllers/UsersController";
import ApiController from "./controllers/ApiController"

//NOTE remember the forward slash at the start of your path!

server.use("/api/posts", new blackCardsController().router);
server.use("/api/comments", new whiteCardsController().router);
server.use("/api/users", new usersController().router);
server.use("/api/random", new ApiController().router);

//NOTE Everything below this line always stays the same

//NOTE Default error handler, catches all routes with an error attached
server.use((error, req, res, next) => {
	res.status(error.status || 400).send({ error: { message: error.message } });
});

//NOTE Catch all to insure to return 404 if recieved a bad route
server.use((req, res, next) => {
	res.status(404).send("Route not found");
});

server.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
