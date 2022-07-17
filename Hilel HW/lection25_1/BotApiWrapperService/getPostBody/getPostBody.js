function getPostBody(req, res) {
     if (req.method === 'POST') {
          return new Promise((resolve, reject) => {
               // res.setHeader('Access-Control-Allow-Origin', '*')
               let body = '';
               req.on('data', chunk => {
                    
                    body = chunk.toString();
                    resolve(body);
               });
               req.on('end', () => {
                    res.end('ok');
               });
          })
     }
}
module.exports = { getPostBody }