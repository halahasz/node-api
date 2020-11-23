const devConfit = {};
const testConfit = {};
const prodConfit = {};
const defaultConfig = {
  PORT: process.env.PORT || 3000,
  TOKRN_HEADER: "x-access-token",
  // ...
};

const envConfig = (env) => {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
};

module.exports = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
