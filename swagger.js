const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temples API',
    description: 'This is where all temple documents '
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then( async () => {
//   await import('./index.js'); // Your project's root file
// });