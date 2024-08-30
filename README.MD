# E-commerce-API

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->

## Endpoints

-   [Auth](#auth)
    1. [Logout User](#1-logout-user)
    1. [Login User](#2-login-user)
    1. [Register User](#3-register-user)
-   [User](#user)
    1. [Get All Users](#1-get-all-users)
    1. [Get Single User](#2-get-single-user)
    1. [Show Current User](#3-show-current-user)
    1. [Update User](#4-update-user)
    1. [Update User Password](#5-update-user-password)
-   [Product](#product)
    1. [Get All Products](#1-get-all-products)
    1. [Create Product](#2-create-product)
    1. [Get Single Product](#3-get-single-product)
    1. [Update Product](#4-update-product)
    1. [Delete Product](#5-delete-product)
    1. [Upload Image](#6-upload-image)
-   [Review](#review)
    1. [Get All Reviews](#1-get-all-reviews)
    1. [Create Review](#2-create-review)
    1. [Get Single Review](#3-get-single-review)
    1. [Update Review](#4-update-review)
    1. [Delete Review](#5-delete-review)
-   [Order](#order)
    1. [Get All Order](#1-get-all-order)
    1. [Get Single Order](#2-get-single-order)
    1. [Create Order](#3-create-order)
    1. [Update Order](#4-update-order)
    1. [Show Current User Orders](#5-show-current-user-orders)

---

## Auth

### 1. Logout User

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/auth/logout
```

### 2. Login User

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/auth/login
```

**_Body:_**

```js
{
    "email": "john@gmail.com",
    "password": "secret"
}
```

### 3. Register User

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/auth/register
```

**_Body:_**

```js
{
    "name": "susan",
    "email": "susan@gmail.com",
    "password": "secret"
}
```

## User

### 1. Get All Users

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/users
```

### 2. Get Single User

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/users/123
```

### 3. Show Current User

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/users/showMe
```

### 4. Update User

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/users/updateUser
```

**_Body:_**

```js
{
    "name": "coco"
}
```

### 5. Update User Password

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/users/updateUserPassword
```

**_Body:_**

```js
{
    "newPassword": "newsecret",
    "oldPassword": "secret"
}
```

## Product

### 1. Get All Products

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/products
```

### 2. Create Product

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/products
```

**_Body:_**

```js
 {
    "name": "armchair",
    "price": 12599,
    "image": "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f",
    "colors": ["#000", "#00ff00", "#0000ff"],
    "company": "marcos",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "bedroom"
  }
```

### 3. Get Single Product

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/products/66d0c5b8869821da7d9ebb74
```

### 4. Update Product

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/products/66d0c5b8869821da7d9ebb74
```

**_Body:_**

```js
{
    "name": "armchair new change"
}
```

### 5. Delete Product

**_Endpoint:_**

```bash
Method: DELETE
Type: RAW
URL: http://localhost:5000/products/66d0c5a1869821da7d9ebb72
```

### 6. Upload Image

**_Endpoint:_**

```bash
Method: POST
Type: FORMDATA
URL: http://localhost:5000/products/uploadImage
```

## Review

### 1. Get All Reviews

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/reviews
```

### 2. Create Review

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/reviews
```

**_Body:_**

```js
{
    "product": "66d20d5110d9f55e655dc6eb",
    "rating": 4,
    "title": "very strong product by susan",
    "comment": "very, very good product"
}
```

### 3. Get Single Review

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/reviews/1234
```

### 4. Update Review

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/reviews/66d20b796e27cbe4458b2c27
```

**_Body:_**

```js
{
    "rating": 3,
    "title": "very strong product",
    "comment": "very, very good product"
}
```

### 5. Delete Review

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: http://localhost:5000/reviews/1234
```

## Order

### 1. Get All Order

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/orders
```

### 2. Get Single Order

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/orders/66d222685f655544c0bfbe43
```

### 3. Create Order

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/orders
```

**_Body:_**

```js
{
    "tax": 499,
    "shippingFee": 799,
    "items": [
      {
        "name": "bed",
        "price": 23999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "amount": 3,
        "product": "66d222ca5f655544c0bfbe46"
      },
      {
        "name": "chair",
        "price": 12599,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "amount": 2,
        "product": "66d223305f655544c0bfbe48"
      }
    ]
  }
```

### 4. Update Order

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/orders/66d222685f655544c0bfbe43
```

**_Body:_**

```js
{
    "paymentIntentId": "someRandomId"
}
```

### 5. Show Current User Orders

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:5000/orders/showAllMyOrders
```

---

[Back to top](#e-commerce-api)
