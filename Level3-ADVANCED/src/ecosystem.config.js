module.exports = {
  apps: [
    {
      name: "app1",
      script: "./index.js",
      env_production: {
        NODE_EVN: "production"
      },
      env_development: {
        NODE_EVN: "development"
      }
    }
  ]
};
