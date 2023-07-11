openapi: 3.0.0
info:
  title: ECOMMERCE API
  description: >-
    REST API MAIN ENTITIES CRUD API ENDPOINT DIVIDED IN USER AUTHENTICATION,
    USER, PRODUCTS, REVIEWS AND ORDERS CRUD OPERATIONS. SERVER REQUESTS LIMITED
    TO 60 EACH 15 MINUTES. TEST USER WILL ONLY HAVE ACCESS TO PUBLIC ROUTES.
  version: 1.0.0
servers:
  - url: https://ecommerce-api-nd2i.onrender.com
tags:
  - name: CRUD AUTHENTICATION
    description: User Registration, Login and Logout Operations
  - name: CRUD USER
  - name: CRUD PRODUCTS
  - name: CRUD REVIEWS
  - name: CRUD ORDERS
paths:
  /api/v1/auth/register:
    post:
      tags:
        - CRUD AUTHENTICATION
      summary: REGISTER USER
      description: >-
        Register User Operation. Only unique email user registration are
        allowed.
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                name: test user
                email: testuser@email.com
                password: Secrettestuser@0
                role: admin
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/auth/login:
    post:
      tags:
        - CRUD AUTHENTICATION
      summary: LOGIN USER
      description: Logs in user.
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                email: testuser@email.com
                password: Secrettestuser@0
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/auth/logout:
    get:
      tags:
        - CRUD AUTHENTICATION
      summary: LOGOUT USER
      description: Logs out User
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/users:
    get:
      tags:
        - CRUD USER
      summary: GET ALL USERS
      description: >-
        Gets All Users from Database. Only users with "admin" permissions are
        allowed to access this route.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/users/64ac3f007edfb5ca2c027300:
    get:
      tags:
        - CRUD USER
      summary: GET SINGLE USER
      description: >-
        Gets Single User from Database. Only users with "admin" permissions or
        user owner are allowed to access this route.
      parameters:
        - name: id
          in: query
          schema:
            type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/users/showMe:
    get:
      tags:
        - CRUD USER
      summary: SHOW CURRENT USER
      description: Shows user currently logged and authenticated.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/users/updateUserPassword:
    patch:
      tags:
        - CRUD USER
      summary: UPDATE USER PASSWORD
      description: >-
        Update User Password. Only resource owner users are allowed to access
        this route.
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                oldPassword: Secrettestuser@0
                newPassword: Secrettestuser@0updated
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/users/updateUser:
    patch:
      tags:
        - CRUD USER
      summary: UPDATE USER
      description: >-
        Update User Name and Email. Only resource owner users are allowed to
        access this route.
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                name: test user
                email: testuser2@email.com
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/products:
    get:
      tags:
        - CRUD PRODUCTS
      summary: GET ALL PRODUCTS PUBLIC
      description: Get All Products on Database. No role Permission restrictions.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
    post:
      tags:
        - CRUD PRODUCTS
      summary: CREATE PRODUCT
      description: Create Product. Only admin role users are allowed to create products.
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                name: test product 1
                price: 7599
                description: description 1
                category: bedroom
                company: ikea
                featured: false
                freeShipping: false
                inventory: 7
                colors:
                  - purple
                  - orange
                image: >-
                  https://res.cloudinary.com/dq9d93jfo/image/upload/v1688391083/ecommerce-api/tmp-2-1688391135842_cpkhsc.jpg
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/products/uploadImage:
    post:
      tags:
        - CRUD PRODUCTS
      summary: UPLOAD IMAGE
      description: Upload Image. Only admin role users are allowed to upload images.
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                image:
                  type: string
                  format: binary
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/products/649d6c564ade133dbe8aa33d:
    patch:
      tags:
        - CRUD PRODUCTS
      summary: UPDATE PRODUCT
      description: Update Product. Only admin role users are allowed to update products.
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                name: product 6 updated
                price: 7599
                description: description 6
                category: office
                company: liddy
                featured: false
                freeShipping: false
                inventory: 7
                colors:
                  - purple
                  - orange
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/products/649d6b6789737f1413dbe3ae:
    delete:
      tags:
        - CRUD PRODUCTS
      summary: DELETE PRODUCT
      description: Delete Product. Only admin role users are allowed to delete products.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/products/64a56497cd67a9016bfd473e:
    get:
      tags:
        - CRUD PRODUCTS
      summary: GET SINGLE PRODUCT PUBLIC
      description: Get one Product from Database. No role Permission restrictions.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/reviews/product/64abee47687e400f8f76ac67:
    post:
      tags:
        - CRUD REVIEWS
      summary: CREATE REVIEW
      description: >-
        Create Review. Only user role users are allowed to create product
        reviews. Only 1 review per product and user are allowed. JSON request
        body must be provided.
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                rating: 4.2
                title: product review title 2
                comment: product review comment 2
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/reviews/:
    get:
      tags:
        - CRUD REVIEWS
      summary: GET ALL REVIEWS
      description: Public Route. Get all reviews from database.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/reviews/product/64abee47687e400f8f76ac67/review/64ad408ff6f3e0e0d72de91f:
    get:
      tags:
        - CRUD REVIEWS
      summary: GET SINGLE REVIEW
      description: >-
        Public Route. Get single review filtering by product/:productId and
        review/:reviewId.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
    patch:
      tags:
        - CRUD REVIEWS
      summary: UPDATE REVIEW
      description: >-
        Update Review by providing product/:productId and review/:reviewId and
        JSON request body
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                rating: 5
                title: product review title 1
                comment: product review comment 1
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
    delete:
      tags:
        - CRUD REVIEWS
      summary: DELETE REVIEW
      description: |-
        StartFragment

        Update Review by providing product/:productId and review/:reviewId
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/products/64abee47687e400f8f76ac67/reviews:
    get:
      tags:
        - CRUD REVIEWS
      summary: GET SINGLE PRODUCT REVIEWS
      description: Public Route. Get All reviews linked to a product/:productId.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/orders:
    get:
      tags:
        - CRUD ORDERS
      summary: GET ALL ORDERS
      description: >-
        Get all orders from database. Only authenticated admin role users are
        allowed to access this route.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
    post:
      tags:
        - CRUD ORDERS
      summary: CREATE ORDER
      description: >-
        Create order into database. Only user and admin role users are allowed
        to access this route.
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                tax: 499
                shippingFee: 799
                items:
                  - name: bed
                    price: 2699
                    image: >-
                      https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160
                    amount: 3
                    product: 64a56497cd67a9016bfd473e
                  - name: chair
                    price: 2999
                    image: >-
                      https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160
                    amount: 2
                    product: 64abee4f687e400f8f76ac69
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/orders/64ac149451b7da28387701a8:
    get:
      tags:
        - CRUD ORDERS
      summary: GET SINGLE ORDER
      description: >-
        Get single order from database. Only user and admin role users are
        allowed to access this route. /api/v1/orders/:id
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
    delete:
      tags:
        - CRUD ORDERS
      summary: DELETE USER ORDER
      description: >-
        Delete order from database. Only user and admin role users are allowed
        to access this route. /api/v1/orders/:id
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/orders/64abfa61d94f17554c16852a:
    patch:
      tags:
        - CRUD ORDERS
      summary: UPDATE USER ORDER
      description: >-
        Update order from database. Only user and admin role users are allowed
        to access this route. /api/v1/orders/:id
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                paymenIntentId: someRandomId
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/orders/showAllMyOrders:
    get:
      tags:
        - CRUD ORDERS
      summary: GET CURRENT USER ORDERS
      description: >-
        Get Current logged user orders from database. Only user and admin role
        users are allowed to access this route.
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}