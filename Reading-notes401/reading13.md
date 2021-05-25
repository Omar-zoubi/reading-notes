## Linear Regression:
#### Linear regression attempts to model the relationship between two variables by fitting a linear equation to observed data. One variable is considered to be an explanatory variable, and the other is considered to be a dependent variable.
## Scikit Learn:
#### is a powerful Python module for machine learning. It contains function for regression, classification, clustering, model selection and dimensionality reduction.
#### First we have to import linear regression from sci-kit learn module. and then save liner regretion in a variable.
`from sklearn.linear_model import LinearRegression`
#### save LinearRegression in variabel:
`reg = LinearRegression()`
#### get the targeted fieled:
`Y = [Spacific colomn]`
#### get the fieleds that I want to fit them:
`X = [colomn1, colomn2, colomn3,... ]`
#### Fit the data with the model to train them:
`reg.fit(X, y)`
#### Predecting:
`reg.predect(X)`

#### scatter plot:
`plt.scatter(df.colomn, reg.predect(X))`



##### Resources:

- [Linear Regression](https://bigdata-madesimple.com/how-to-run-linear-regression-in-python-scikit-learn/)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)