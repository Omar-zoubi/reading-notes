# Django Best Practices: Custom User Model:
#### Django ships with a built-in User model for authentication and if you'd like a basic tutorial on how to implement log in, log out.

#### However, for a real-world project, the official Django documentation highly recommends using a custom user model instead. This provides far more flexibility down the line so, as a general rule, always use a custom user model for all new Django projects.
### Setup
To start, create a new Django project from the command line. We need to do several things:

* create and navigate into a dedicated directory.
* install Django
* make a new Django project called config
* make a new app accounts
* start the local web server

### Custom User Model
#### Creating our initial custom user model requires four steps:

* update config/settings.py
* create a new CustomUser model
* create new UserCreation and UserChangeForm
* update the admin

### Create users:

* Quit the server with Control+c and then run the command python manage.py createsuperuser.
* Answer the prompts and note that your password will not appear on the screen when typing for security reasons.



#### Resources:

- [Custom User Model](https://learndjango.com/tutorials/django-custom-user-model)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)