'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({static: 'public'});

server.use(middlewares);
server.use('/api', router);


server.listen(3000, () => {
  console.log('JSON Server is running')
});





// router.render = (req, res) => {
//   res.jsonp({
//     data: res.locals.data
//   });
// };
//
// app.use(middlewares);
// app.use('/api', router);
// const server = app.listen(args.port, () => {
//   console.log(`Server is running on ${args.port} port...`);
// });
//
// const exit = () => {
//   server.close(() => {
//     process.exit(0);
//   });
// };
// process.on('SIGINT', exit);
// process.on('SIGTERM', exit);
// process.on('exit', exit);
// process.on('uncaughtException', exit);








