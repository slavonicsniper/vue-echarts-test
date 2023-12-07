const presets = ["@vue/cli-plugin-babel/preset"];
const plugins = [];

if (process.env["BABEL_ENV"] === "test") {
  plugins.push("require-context-hook");
}

module.exports = { presets, plugins };
