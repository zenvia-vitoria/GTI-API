import { createServer } from 'http';
import { app } from "./app";


const server = createServer(app);

const port = 3333;

server.listen(port, () => {
  console.log(`Server running in port ${port}`);
})
