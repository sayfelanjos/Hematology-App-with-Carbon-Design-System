module.exports = {
  apps: [
    {
      name: "Patologia Clinica Unicamp App",
      script: "./dist/main.js",
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
