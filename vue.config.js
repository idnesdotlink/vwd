module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"), // This line must in sass option
        sassOptions: {
          fiber: require("fibers")
        }
      },
      scss: {
        implementation: require("sass"), // This line must in sass option
        sassOptions: {
          fiber: require("fibers")
        }
      }
    }
  }
};
