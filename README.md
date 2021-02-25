# Ephemeris Reviews
Backend overhaul of the Review component on a clothing website - scaled up to handle 150 Million + reviews, with average response times of 64ms under 1000rps loads.  

![](reviewResponseTimes.gif)

## Table of Contents

1. [API](#api)
1. [Requirements](#requirements)

# API

1. [Products](#products)
1. [Reviews](#reviews)

## Products

### `GET /api/products/:productId`

  - response body: a **Product Object** containing product info of the product with the *:productId* specified:
  
    | Key | Value |
    | --- | --- |
    | \_id | Number |
    | productName | String |
    | imgUrl | String |
    | rating | Number |
    | ratingCount | number |
    | fit | String |
    | activities | String |
    | reviews | Array \[Review Objects\] | 
  
  - Product Object includes an array of **Reviews Objects** as a property. Review Objects take this shape:
  
    | Key | Value |
    |---|---|
    | \_id | Number |
    | rating | Number |
    | recommended | Boolean |
    | title | String |
    | author | String |
    | body | String |
    | productInfo | <table><tr><td>size</td><td>String</td></tr><tr><td>fit</td><td>String</td></tr><tr><td>height</td><td>String</td></tr></table> |
    | activities | Array \[Strings\] <table><tr><th>Options:</th></tr><tr><td>"Casual-Wear"</td></tr><tr><td>"Climbing"</td></tr><tr><td>"Yoga"</td></tr><tr><td>"Fishing"</td></tr><tr><td>"Hiking"</td></tr><tr><td>"Biking"</td></tr><tr><td>"Snow-Wear"</td></tr><tr><td>"Surfing"</td><tr><tr><td>"Work"</td></tr></table>|
    | createdAt | Date |

### `POST /api/products/`
  - interlnal usage only: for adding new products to database
  - **request body** must include new Product Info Object of this shape:

    | Key | Value |
    | productName | String |
    | imgUrl | String |
    | fit | String |
    | activities | String |
    
  - on successful insertion to database **response body** contains newly created Product, including ID:
  
    | Key | Value |
    | --- | --- |
    | \_id | Number |
    | productName | String |
    | imgUrl | String |
    | rating | Number |
    | ratingCount | number |
    | fit | String |
    | activities | String |
    | reviews | *empty* Array \[Review Objects\] |
  
## Reviews

### `GET /api/reviews/:productId`

  - Usage: retrieving updated reviews (e.g. after posting a new review)
  - :productId URL Parameter is *Required*  
  - Expects empty request body
  - response body: an **Array** of **Review Objects** corresponding to the Product with the specified *productId*

    | Key | Value |
    |---|---|
    | \_id | Number |
    | rating | Number |
    | recommended | Boolean |
    | title | String |
    | author | String |
    | body | String |
    | productInfo | <table><tr><td>size</td><td>String</td></tr><tr><td>fit</td><td>String</td></tr><tr><td>height</td><td>String</td></tr></table> |
    | activities | Array \[Strings\] <table><tr><th>Options:</th></tr><tr><td>"Casual-Wear"</td></tr><tr><td>"Climbing"</td></tr><tr><td>"Yoga"</td></tr><tr><td>"Fishing"</td></tr><tr><td>"Hiking"</td></tr><tr><td>"Biking"</td></tr><tr><td>"Snow-Wear"</td></tr><tr><td>"Surfing"</td><tr><tr><td>"Work"</td></tr></table>|
    | createdAt | Date |

### `POST /api/reviews/:productId`

  - Usage: creates new Database entry upon submission of a properly-formatted review
  - :productId URL Paramter is *required*
  - Expects **request body** to contain new Review data in this shape:
  
    ***Request.body:***
    | Key | Value |
    |---|---|
    | rating | Number |
    | recommended | Boolean |
    | title | String |
    | author | String |
    | body | String |
    | productInfo | <table><tr><td>size</td><td>String</td></tr><tr><td>fit</td><td>String</td></tr><tr><td>height</td><td>String</td></tr></table> |
    | activities | Array \[Strings\] <table><tr><th>Options:</th></tr><tr><td>"Casual-Wear"</td></tr><tr><td>"Climbing"</td></tr><tr><td>"Yoga"</td></tr><tr><td>"Fishing"</td></tr><tr><td>"Hiking"</td></tr><tr><td>"Biking"</td></tr><tr><td>"Snow-Wear"</td></tr><tr><td>"Surfing"</td><tr><tr><td>"Work"</td></tr></table>|
    
  - **Response Body** includes fully-formatted review object, complete with newly generated *_id* and *createdAt* properties:
    
    ***Response.body:***
    | Key | Value |
    |---|---|
    | \_id | Number |
    | rating | Number |
    | recommended | Boolean |
    | title | String |
    | author | String |
    | body | String |
    | productInfo | <table><tr><td>size</td><td>String</td></tr><tr><td>fit</td><td>String</td></tr><tr><td>height</td><td>String</td></tr></table> |
    | activities | Array \[Strings\] <table><tr><th>Options:</th></tr><tr><td>"Casual-Wear"</td></tr><tr><td>"Climbing"</td></tr><tr><td>"Yoga"</td></tr><tr><td>"Fishing"</td></tr><tr><td>"Hiking"</td></tr><tr><td>"Biking"</td></tr><tr><td>"Snow-Wear"</td></tr><tr><td>"Surfing"</td><tr><tr><td>"Work"</td></tr></table>|
    | createdAt | Date |

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Express
- Mongoose
- React
- Bluebird
- Webpack
- Babel
- Enzyme/Jest
