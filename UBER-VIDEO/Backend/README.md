# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object with the following structure:
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Validation
- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

### Responses
- `user` (object):
-`firstname` (string) : user's name(minimum 3 characters).
-`lastname` (string ) : user's last name(minimum 3 characters).
-`email` (string ) : user's email address (must be a valid email).
-`password` (string ) : user's password(minimum 6 characters).
-`token` (string ) : JWT Token

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "string",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Validation Error
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

#### Server Error
- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "string"
  }
  ```

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

#### Server Error
- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "string"
  }
  ```

# User Logout Endpoint

## POST /users/logout

### Description
This endpoint is used to log out the authenticated user.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

#### Server Error
- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "string"
  }
  ```
