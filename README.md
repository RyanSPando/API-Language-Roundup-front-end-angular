# API-Language-Roundup-front-end-angular
## This is the front end API consumer for this project written in AngularJS. 

###API end points github repos:
Python: https://github.com/RyanSPando/API-Language-Roundup-python
Java: https://github.com/RyanSPando/API-Language-Roundup-java


### The API language round up attempts to make a simple crud route for a donut.  The API should return the properly formatted JSON for the route in question.  Post and Delete routes should return the new entry.  Delete route should return the deleted entry.
## Donut DB schema

|donut
|----------------
|id
|name (text)
|topping (text)
|price (int)

## Donut Routes and Pages

| Route Name      | Method   | Example URL        | Route                |
|-----------------|----------|--------------------|----------------------|
| donuts index    | `GET`    | `/donuts`          | `/donuts`            |
| donut get       | `GET`    | `/donuts/1/`       | `/donuts/:id`        |
| donut edit      | `PUT`    | `/donuts/1/edit`   | `/donuts/:id/edit`   |
| donut create    | `POST`   | `/donuts`          | `/donuts`            |
| donut destroy   | `DELETE` | `/donuts/1/delete` | `/donuts/:id/delete` |
