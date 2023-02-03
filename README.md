# webcrawler
Project for the course of learning http
https://www.youtube.com/watch?v=2JYT5f2isg4&t=588s

To run the code: `npm start https://wagslane.dev`

## What I learned
- Test driven development using Jest, use script `npm test` to run
- Use library `process` to take cmd inputs, first default argument is the interpreter, the second one is the code
- Things could go wrong when sending requests to the website
    - fetch function does not work
    - `resp.status` code, such as 404
    - `resp.headers.get("content-type")`, content type does not include html/text, could be xml