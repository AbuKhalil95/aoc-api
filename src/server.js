"use strict";

// Node express requirements
import express from "express";
import cors from "cors";
import { notFoundHandler, serverErrorHandler } from "./API/Middleware/Errors";
import v1Router from "./router.js";

// Intialize node server instance.
const server = express();

// Makes sure no delete request is allowed to be parsed, and logs all incoming requests
server.all("*", (req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, PUT, POST"
    );
    console.log("Requested method ", req.method, " from url ", req.url);
    next();
});

// Global middlewares for cors protection, and only accepts JSON or urlencoded requests with matching Content-Type to the body
server.use(
    cors(),
    express.json(),
    express.urlencoded({ extended: true }),
);

// Error handler middleware
server.use(serverErrorHandler);

// Adding all crud routes to the server
server.use("/api/v1/", v1Router);
server.use("*", notFoundHandler);

export default {
    server,
    start: () => {
        const port = process.env.PORT || 5000;
        server.listen(port, () => console.log(`Listening on port ${port}`));
    },
};
