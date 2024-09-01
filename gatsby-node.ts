const fs = require("fs");
const path = require("path");

exports.onPostBuild = () => {
  const redirectsSrc = path.join(__dirname, "_redirects");
  const redirectsDest = path.join(__dirname, "public", "_redirects");
  fs.copyFileSync(redirectsSrc, redirectsDest);
};
