import app from '../../server.mjs';

let server;

export const startServer = () => {
  const port = 4001;
  return new Promise((resolve) => {
    server = app.listen(port, () => {
      console.log(`Test server running on http://localhost:${port}`);
      resolve(server);
    });
  });
};

export const stopServer = () => {
  return new Promise((resolve) => {
    server.close(() => {
      console.log('Test server stopped');
      resolve();
    });
  });
};
