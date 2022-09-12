"use strict";

var _calculator = require("./calculator");

var _http = require("http");

var qs = _interopRequireWildcard(require("querystring"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const server = (0, _http.createServer)(function (request, response) {
  if (request.method == 'POST') {
    console.log('POST');
    let body = '';
    request.on('data', function (data) {
      body += data;
    });
    request.on('end', function () {
      const post = qs.parse(body);
      const numbers = post.numbers;
      const result = (0, _calculator.add)(numbers);
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.end(generateHTML(numbers, result));
    });
  } else {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end(generateHTML());
  }
});

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
        </html>`;
}

const port = 3000;
const host = 'localhost';
server.listen(port, host);
console.log(`Listening at http://${host}:${port}`);
/* replacers for Deprecation */
// const post = new URLSearchParams(body);
// const numbers = post.get("numbers");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm9uIiwiZGF0YSIsInBvc3QiLCJxcyIsInBhcnNlIiwibnVtYmVycyIsInJlc3VsdCIsImFkZCIsIndyaXRlSGVhZCIsImVuZCIsImdlbmVyYXRlSFRNTCIsInBvcnQiLCJob3N0IiwibGlzdGVuIl0sInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGQgfSBmcm9tICdAL2NhbGN1bGF0b3InXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tICdodHRwJ1xuaW1wb3J0ICogYXMgcXMgZnJvbSAncXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcihmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09ICdQT1NUJykge1xuICAgIGNvbnNvbGUubG9nKCdQT1NUJylcbiAgICBsZXQgYm9keSA9ICcnXG4gICAgcmVxdWVzdC5vbignZGF0YScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBib2R5ICs9IGRhdGFcbiAgICB9KVxuXG4gICAgcmVxdWVzdC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcG9zdCA9IHFzLnBhcnNlKGJvZHkpXG4gICAgICBjb25zdCBudW1iZXJzID0gcG9zdC5udW1iZXJzIGFzIHN0cmluZ1xuICAgICAgY29uc3QgcmVzdWx0ID0gYWRkKG51bWJlcnMpXG4gICAgICByZXNwb25zZS53cml0ZUhlYWQoMjAwLCB7ICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJyB9KVxuICAgICAgcmVzcG9uc2UuZW5kKGdlbmVyYXRlSFRNTChudW1iZXJzLCByZXN1bHQpKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgcmVzcG9uc2Uud3JpdGVIZWFkKDIwMCwgeyAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCcgfSlcbiAgICByZXNwb25zZS5lbmQoZ2VuZXJhdGVIVE1MKCkpXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGdlbmVyYXRlSFRNTChudW1iZXJzPzogc3RyaW5nLCByZXN1bHQ/OiBudW1iZXIpIHtcbiAgcmV0dXJuIGA8aHRtbD5cbiAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XCJkZW1vXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiPk51bWJlcnM6IFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibnVtYmVyc1wiIHZhbHVlPVwiJHtudW1iZXJzID8/ICcnfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmVzZXRcIiBkYXRhLWNvbW1hbmQ9XCJyZXNldFwiPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2PlJlc3VsdDogJHtyZXN1bHQgPz8gJyd9PC9kaXY+XG4gICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5gXG59XG5cbmNvbnN0IHBvcnQgPSAzMDAwXG5jb25zdCBob3N0ID0gJ2xvY2FsaG9zdCdcbnNlcnZlci5saXN0ZW4ocG9ydCwgaG9zdClcbmNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgYXQgaHR0cDovLyR7aG9zdH06JHtwb3J0fWApXG5cbi8qIHJlcGxhY2VycyBmb3IgRGVwcmVjYXRpb24gKi9cbi8vIGNvbnN0IHBvc3QgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGJvZHkpO1xuLy8gY29uc3QgbnVtYmVycyA9IHBvc3QuZ2V0KFwibnVtYmVyc1wiKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUFDLGtCQUFBLEVBQWEsVUFBVUMsT0FBVixFQUFtQkMsUUFBbkIsRUFBNkI7RUFDdkQsSUFBSUQsT0FBTyxDQUFDRSxNQUFSLElBQWtCLE1BQXRCLEVBQThCO0lBQzVCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0lBQ0EsSUFBSUMsSUFBSSxHQUFHLEVBQVg7SUFDQUwsT0FBTyxDQUFDTSxFQUFSLENBQVcsTUFBWCxFQUFtQixVQUFVQyxJQUFWLEVBQWdCO01BQ2pDRixJQUFJLElBQUlFLElBQVI7SUFDRCxDQUZEO0lBSUFQLE9BQU8sQ0FBQ00sRUFBUixDQUFXLEtBQVgsRUFBa0IsWUFBWTtNQUM1QixNQUFNRSxJQUFJLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTTCxJQUFULENBQWI7TUFDQSxNQUFNTSxPQUFPLEdBQUdILElBQUksQ0FBQ0csT0FBckI7TUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBQUMsZUFBQSxFQUFJRixPQUFKLENBQWY7TUFDQVYsUUFBUSxDQUFDYSxTQUFULENBQW1CLEdBQW5CLEVBQXdCO1FBQUUsZ0JBQWdCO01BQWxCLENBQXhCO01BQ0FiLFFBQVEsQ0FBQ2MsR0FBVCxDQUFhQyxZQUFZLENBQUNMLE9BQUQsRUFBVUMsTUFBVixDQUF6QjtJQUNELENBTkQ7RUFPRCxDQWRELE1BY087SUFDTFgsUUFBUSxDQUFDYSxTQUFULENBQW1CLEdBQW5CLEVBQXdCO01BQUUsZ0JBQWdCO0lBQWxCLENBQXhCO0lBQ0FiLFFBQVEsQ0FBQ2MsR0FBVCxDQUFhQyxZQUFZLEVBQXpCO0VBQ0Q7QUFDRixDQW5CYyxDQUFmOztBQXFCQSxTQUFTQSxZQUFULENBQXNCTCxPQUF0QixFQUF3Q0MsTUFBeEMsRUFBeUQ7RUFDdkQsT0FBUTtBQUNWO0FBQ0E7QUFDQSwrREFBK0RELE9BQU8sSUFBSSxFQUFHO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQkMsTUFBTSxJQUFJLEVBQUc7QUFDNUM7QUFDQSxnQkFURTtBQVVEOztBQUVELE1BQU1LLElBQUksR0FBRyxJQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFdBQWI7QUFDQXBCLE1BQU0sQ0FBQ3FCLE1BQVAsQ0FBY0YsSUFBZCxFQUFvQkMsSUFBcEI7QUFDQWYsT0FBTyxDQUFDQyxHQUFSLENBQWEsdUJBQXNCYyxJQUFLLElBQUdELElBQUssRUFBaEQ7QUFFQTtBQUNBO0FBQ0EifQ==