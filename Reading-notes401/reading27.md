### Designing the Local Library models:
#### When designing your models it makes sense to have separate models for every "object" (a group of related information). In this case, the obvious objects are books, book instances, and authors.

### Fields:
#### A model can have an arbitrary number of fields, of any type — each one represents a column of data that we want to store in one of our database tables. Each database record (row) will consist of one of each field value.
### Model management
#### Creating and modifying records
- To create a record you can define an instance of the model and then call save().
#### Searching for records
- You can search for records that match certain criteria using the model's objects attribute (provided by the base class).

 -We can get all records for a model as a QuerySet, using objects.all(). The QuerySet is an iterable object, meaning that it contains a number of objects that we can iterate/loop through.
 -Django's filter() method allows us to filter the returned QuerySet to match a specified text or numeric field against particular criteria. For example, to filter for books that contain "wild" in the title and then count them, we could do the following.


### Genre model:
#### This model is used to store information about the book category — for example whether it is fiction or non-fiction, romance or military history, etc. As mentioned above, we've created the Genre as a model rather than as free text or a selection list so that the possible values can be managed through the database rather than being hard coded.


#### Book model:
#### The Book model represents all information about an available book in a general sense, but not a particular physical "instance" or "copy" available for loan. The model uses a CharField to represent the book's title and isbn . For isbn, note how the first unnamed parameter explicitly sets the label as "ISBN" (otherwise it would default to "Isbn").  We also set parameter unique as true in order to ensure all books have a unique ISBN (the unique parameter makes the field value globally unique in a table). The model uses TextField for the summary, because this text may need to be quite long.


#### BookInstance model
#### Next, copy the BookInstance model (shown below) under the other models. The BookInstance represents a specific copy of a book that someone might borrow, and includes information about whether the copy is available or on what date it is expected back, "imprint" or version details, and a unique id for the book in the library.


- Creating a superuser:
#### In order to log into the admin site, we need a user account with Staff status enabled. In order to view and create records we also need this user to have permissions to manage all our objects.  You can create a "superuser" account that has full access to the site and all needed permissions using mange.py
- Logging in and using the site:

To login to the site, open the /admin URL (e.g. http://127.0.0.1:8000/admin) and enter your new superuser userid and password credentials (you'll be redirected to the login page, and then back to the /admin URL after you've entered your details).
This part of the site displays all our models, grouped by installed application.
You can click on a model name to go to a screen that lists all its associated records, and you can further click on those records to edit them.
You can also directly click the Add link next to each model to start creating a record of that type.
You will be prompted to enter a username, email address, and strong password.
- Advanced configuration:

Django does a pretty good job of creating a basic admin site using the information from the registered models:
Each model has a list of individual records, identified by the string created with the model's str() method, and linked to detail views/forms for editing.
By default, this view has an action menu at the top that you can use to perform bulk delete operations on records.
The model detail record forms for editing and adding records contain all the fields in the model, laid out vertically in their declaration order.
You can further customise the interface to make it even easier to use.


#### Resources:

- [Django admin site](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)