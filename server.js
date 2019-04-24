const http = require ('http');
const app = require('./app');
const port = 3001;
const server = http.createServer(app);
server.listen(port);

// app.listen(3001,()=>{
//     console.log("Server is running")
// });