const xkcd = require('xkcd-fun');

module.exports = {
    name: "ApiPlugin",
    register: async (server, options) => {

      server.route([
        {
          method: "GET",
          path: "/api",
          handler: async (request, h) => {
            let retVal = '';

                    const ret = xkcd.img.then(data => {
                        return  data;
                     });
                     return (await ret.then(cb));
          }

        }
      ]);
    }
  }

  function cb (d) {
    // console.dir( d);
    return '<h3>' + d.img_title + '</h3> <img src=' + d.img_url + '>';
  }
