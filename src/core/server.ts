import { createServer } from 'http';
import { app } from "./app";


const server = createServer(app);

const port = 3333;

server.listen(port, () => {
  console.log(process.env.ZCC_API_KEY)
  console.log(`Server running in port ${port}`);
})
