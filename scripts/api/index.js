const fetchMetadata = require('./methods/fetchMetadata');
const fetchApiConfig = require('./methods/fetchApiConfig');
const validateBeforeMint = require('./methods/validateBeforeMint');

async function run() {
  // const data = await fetchMetadata(1);
  const config = await validateBeforeMint();

  console.log(config);
}

run()
