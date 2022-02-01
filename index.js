import "./src/Config";
import db from "./src/Config/db.config.js";
import server from "./src/server.js";

db.sync();
server.start();
