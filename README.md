EasyCalculator is a web application written on Nodejs that serves as an easy geometry calculator. The application implements an WebUI (index.js) for easy use, and an API RESTful service for programatic use.

Most calculator endpoints accept POST and GET methods.

To consume the API from do:
    curl -H 'content-type: application/json' -d '{"base":"2","height":"2"}' http://localhost:3000/calculator/rectangleArea

    - or - 

    curl http://localhost:3000/calculator/rectangleArea?base=2&height=4




