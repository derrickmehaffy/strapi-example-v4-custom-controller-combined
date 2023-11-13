# Example with multiple content-types in custom controller

You can see the example custom blah controller in [this file](./src/api/blah/controllers/blah.js)

Effectively it's using the `super.find()` method to call the default blah find controller and using the `strapi.controllers['api::test.test'].find()` to call another content-type controller.

In essence it's using the native core controllers to get the REST API output as the core controllers do the following:

- Validated the incoming query
- Sanitize the incoming query
- Fetch the data and pagination using the core service
- Sanitize the output
- Transform the response into data and meta

The key thing to note is that the external controller call will NOT check the users permissions for executing that controller call so validating user input is important.

Example output with this custom controller:

```json
{
  "blahFindMany": {
    "data": [
      {
        "id": 1,
        "attributes": {
          "testAltString": "test1"
        }
      },
      {
        "id": 2,
        "attributes": {
          "testAltString": "test2"
        }
      }
    ],
    "meta": {
      "pagination": {
        "page": 1,
        "pageSize": 25,
        "pageCount": 1,
        "total": 2
      }
    }
  },
  "testFindMany": {
    "data": [
      {
        "id": 1,
        "attributes": {
          "testString": "test1"
        }
      },
      {
        "id": 2,
        "attributes": {
          "testString": "test2"
        }
      },
      {
        "id": 3,
        "attributes": {
          "testString": "test3"
        }
      }
    ],
    "meta": {
      "pagination": {
        "page": 1,
        "pageSize": 25,
        "pageCount": 1,
        "total": 3
      }
    }
  }
}
```
