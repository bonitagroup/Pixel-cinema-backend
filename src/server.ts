import http from "http";
import app from "./app";
import { config } from "./config/index";

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running at http://localhost:${config.PORT}`);
});
