var static2 = require("node-static");
let file;
process.on("start-server", (dataObject) => {
  console.log(dataObject);
  file = new static2.Server(`${dataObject.filePath}`);

  require("http")
    .createServer(function (request, response) {
      request
        .addListener("end", function () {
          file.serve(request, response);
        })
        .resume();
    })
    .listen(9990);
});
