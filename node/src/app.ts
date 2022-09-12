import { add } from '@/calculator'
import { createServer } from 'http'
import * as qs from 'querystring'

const server = createServer(function (request, response) {
  if (request.method == 'POST') {
    console.log('POST')
    let body = ''
    request.on('data', function (data) {
      body += data
    })

    request.on('end', function () {
      const post = qs.parse(body)
      const numbers = post.numbers as string
      const result = add(numbers)
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.end(generateHTML(numbers, result))
    })
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(generateHTML())
  }
})

function generateHTML(numbers?: string, result?: number) {
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

/* replacers for Deprecation */
// const post = new URLSearchParams(body);
// const numbers = post.get("numbers");
