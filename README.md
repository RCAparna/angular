# angular

# User registration page:
Users must fill up the mandatory fields to register themselves, also confirm password check validation is added.
a) Password must be 8 characters long
b) A valid email only is accepted.
c) Existing email id is not accepted

All these validations are added both from angular and node. User is ready to register themselves after providing valid data in the registration page, register button is also enabled once all conditions are met.

# Login Page:
Backend and front end validations have been added with meaning full messages like 
•	Invalid User Credentials
•	Wrong Password
•	Invalid Email
After successful registration, user is redirected to login page to login
After successful login, user is landed to the dashboard page and token is generated, last login details can be viewed as well. Here initial account balance is 0 as user have not yet added a record.
In this stage, User is prompted to create a new dashboard.

# Dashboard 
This is the first page which user sees after login, it contains personal data like Amount, account balance, last login date, user can add new team members, add a valid description etc, please refer to the Node_User guide.doc file to see the screenshots. After user creates a new dashboard, the details are captured in a table, total balance changes and is equal to the total amount details received from each dashboard record created by user. Also relevant data can be seen in different routes. 

# Team
This is another page in the application which renders the data added by user from the dashboard page.

# About 
This is another page in the application which renders the data added by user from the dashboard page.

# Test Coverage: 86.03%

# MongoDB Details:
1.	Dev Database- nodeDB under which dashboards and users are documents
2.	Test Database- nodeDBTest 

# Github link – BackEnd(Node)
https://github.com/RCAparna/angular
# Github link – FrontEnd(Angular)
https://github.com/RCAparna/angular
# Website link:
https://angular-fullstack-aparna.herokuapp.com/




