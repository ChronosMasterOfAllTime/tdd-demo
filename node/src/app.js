const http = require('http')
const qs = require('querystring')
const calculator = require('./calculator')
const util = require('util')

const server = http.createServer(function (request, response) {
  console.dir(request.param)
  console.log(request.method)
  console.log(request.path)

  console.log(util.inspect(request))

  if (request.method == 'POST') {
    console.log('POST')
    let body = ''
    request.on('data', function (data) {
      body += data
    })

    request.on('end', function () {
      // const post = new URLSearchParams(body);
      // const numbers = post.get("numbers");

      const post = qs.parse(body)
      const numbers = post.numbers
      const result = calculator.add(numbers)
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.end(generateHTML(numbers, result))
    })
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(generateHTML())
  }
})

function generateHTML(numbers, result) {
  return `<html>
            <body>
                <form name="demo" method="post" action="http://localhost:3000">Numbers: 
                    <input type="text" name="numbers" value="${numbers ?? ''}"/>
                    <input type="submit" value="Add" />
                    <input type="reset" data-command="reset">
                </form>
                <div>Result: ${result ?? ''}</div>
            </body>
        </html>`
}

const port = 3000
const host = 'localhost'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
