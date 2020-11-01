# coupon-validator

Project Set-Up:

Clone the project to your local system.
Go to the root directory. Open terminal in the root folder.
Install server Dependencies : npm install

Go to client directory : cd client

Install client-side dependencies : npm install

There are seprate port for server and client development. Since client side of this project is installed by ‘create-react-app’, there are two package.json one each for server and client. Hence, you can install their respective dependencies by command “npm install” in their respective environment.

Add a dev.js:

Go to the “root/config” of the project and do as following:
create a dev.js file.
Paste the following code:

module.exports = {
	mongoURI: "<Paste your mongoURI string here>"
}


Execute code in dev environment:

command : npm run dev


External helps:

Styling : The front end of this app is heavily using materializecss. This is a library which helps users to create custom design specs by providing build-in design language.
Resource Link : https://materializecss.com/

Datepicker : react-dates is an open source airbnb project allowing user to create a datepicker. This provides a highly interactive datepicker for multiple format.Based on the project requirement(startDate and endDate), ‘DateRangePicker’ was a perfect choice.

Resource Link : https://github.com/airbnb/react-dates


GitHub Source Code: https://github.com/vivek19223/coupon-validator

The application is deployed on Heroku.
Production URL : https://coupon-validator-19223.herokuapp.com/




