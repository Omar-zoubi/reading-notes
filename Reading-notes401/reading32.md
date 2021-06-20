## Permissions:
#### Authentication or identification by itself is not usually sufficient to gain access to information or code. For that, the entity requesting access must have authorization.
## permissions determetion:
Permissions in REST framework are always defined as a list of permission classes.

Before running the main body of the view each permission in the list is checked. If any permission check fails an exceptions.PermissionDenied or exceptions.NotAuthenticated exception will be raised, and the main body of the view will not run.

- The request was successfully authenticated, but permission was denied. — An HTTP 403 Forbidden response will be returned.
- The request was not successfully authenticated, and the highest priority authentication class does not use WWW-Authenticate headers. — An HTTP 403 Forbidden response will be returned.
- The request was not successfully authenticated, and the highest priority authentication class does use WWW-Authenticate headers. — An HTTP 401 Unauthorized response, with an appropriate WWW-Authenticate header will be returned.



## API Reference:

- AllowAny: permission class will allow unrestricted access, regardless of if the request was authenticated or unauthenticated.
- IsAuthenticated: permission class will deny permission to any unauthenticated user, and allow permission otherwise.This permission is suitable if you want your API to only be accessible to registered users.
- IsAdminUser: permission class will deny permission to any user, unless user.is_staff is True in which case permission will be allowed.This permission is suitable if you want your API to only be accessible to a subset of trusted administrators.
- IsAuthenticatedOrReadOnly: will allow authenticated users to perform any request. Requests for unauthorised users will only be permitted if the request method is one of the "safe" methods; GET,0 HEAD or OPTIONS.This permission is suitable if you want to your API to allow read permissions to anonymous users, and only allow write permissions to authenticated users.


##### Resources:

- [Permissions](https://www.django-rest-framework.org/api-guide/permissions/#third-party-packages)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)