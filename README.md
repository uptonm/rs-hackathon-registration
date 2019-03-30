<div align="center">
    <h1 align="center"><img align="center" src="https://uptonm-backend-server.herokuapp.com/static/media/leologo-web.78c36330.png" height="50vh">
    HackWITus SignIn</h1>
</div>

<p align="center">
    <a href="https://circleci.com/gh/uptonm/HackWITusSignIn">
      <img src="https://circleci.com/gh/uptonm/HackWITusSignIn.svg?style=shield" alt="CircleCI Build Status">
    </a>
    <a href="https://travis-ci.org/uptonm/HackWITusSignIn">
      <img src="https://travis-ci.org/uptonm/HackWITusSignIn.svg?branch=master" alt="TravisCI Build Status">
    </a>
    <a href="www.zenhub.com">
      <img src="https://img.shields.io/badge/Shipping_faster_with-ZenHub-5e60ba.svg?style=svg" alt="ZenHub">
    </a>
    <a href="https://discord.gg/6uKC74C">
      <img src="https://img.shields.io/discord/384804254927421448.svg" alt="Discord">
    </a>
</p>

This repo serves to be the main sign in page for HackWITus 2018.

# Contribution Setup Guide
- To start developing on this repo you will need to do a few things to setup your development enviornment.
- Fork the repo and clone it to your local machine. Create a file in the root directory called `.env`

## Google APIs Setup
- Start by navigating to https://console.developers.google.com/
- Either login with a google account or create one here

![Google Developers Console](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/GoogleDevConsole.PNG)

- Now in the google developers console either create a project in the top left corner or select an existing one

![Create A Project](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/NewGoogleProject.PNG)

- Initialize your project if you are creating a new one. Side note creating a new project takes a few seconds.

![Initialize A Project](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/InitializeProject.PNG)

- Make sure your new project is selected in the top left and click enable apis and services

![Enable APIs](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/ClickEnableAPIs.PNG)

- Search for the google+ api, this is used for oauth, and click on it 

![Google+ API](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/googlePlusAPI.PNG)

- Click 'Enable'

![Enable Google+ API](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/EnableAPI.PNG)

- This API requires oauth credentials so click 'Create Credentials' to get your ClientID and Client Secret

![API Credentials](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/ClickCreateCredentials.PNG)

- Follow through the following images for the propper credential setup

![Page1](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/CreateCredentials.PNG)
![Page2](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/OAuthInfo.PNG)

- Now click create

- Now back in the developers console main dashboard, you should see a credentials tab on the left side, if you click it you should see this. Click the download button circled on the image.

![Download Client Key](https://github.com/uptonm/HackWITusSignIn/blob/master/README_Images/downloadClientKey.PNG)

- This should download a `credentials.json` file with your client_id and client_secret in it.
- Add your client_secret and your client_id to the `.env` file you created earlier as GOOGLECLIENTID, and GOOGLECLIENTSECRET
- Your `.env` file should look like this now

```javascript
GOOGLECLIENTID=********************
GOOGLECLIENTSECRET=****************
```

## MLab Setup
- Navigate to https://mlab.com/
- Create an account or login
- Click Create New to create a new MongoDB Database hosted on the AWS Cloud ---FOR FREE---
- Click AWS Hosting - 0.5gb sandbox, and then US-West-Virginia
- Name your database in all lowercase and then click name database, then place order
- Your database should appear under your MongoDB deployments, click on it, then click on the users tab, and add a database user (make sure you do NOT select read only)
- On the top of the page you should see 
 
 ``` text
 To connect using a driver via the standard MongoDB URI (what's this?):
    mongodb://<dbuser>:<dbpassword>@ds******.mlab.com:******/uptonm-hackwitus-dev
 ```
    
- Take this connect URI string and complete it by replacing dbuser and dbpassword with your database user's username and password. Place that string in your `.env` file under the name DBURI. The `.env` file should look like the following now:

```javascript
GOOGLECLIENTID=********************
GOOGLECLIENTSECRET=****************
DBURI=*****************************
```

- Now we need to add 2 more keys to our `.env` file, these can be anything you want as they just serve to secure your database and the user info stored in it. In a development enviornment they can be short if you want them to be as the production enviorment ones will replace them on deploy.
- Add .env variables for QUERYKEY and COOKIEKEY. Query Key serves to protect the open api as a form of makeshift api key for making requests to the api. Cookie Key serves to protect the oauth client from cookie spoofing as it stores the current user's info in a browser cookie.
- `.env` should now look something like this. Again QUERYKEY and COOKIEKEY can be any string you want, just remember anytime you want to test a request to the api you will need to add `/?key=QUERYKEY` to the end of the request url

```javascript
GOOGLECLIENTID=********************
GOOGLECLIENTSECRET=****************
DBURI=*****************************
COOKIEKEY=skujdnoasudbnaisudbsidubn
QUERYKEY=ksjnddsudnosaudnosidhosidh
PORT=8000
```

## React Side Enviornment Variables
- There is only one React side enviornment variable to add
- Make a file named `.env` in the `client` directory, and add the same QUERYKEY you used above to it under the name `REACT_APP_QUERYKEY`
- The resulting file should look something like this:

```javascript
REACT_APP_QUERYKEY=ksjnddsudnosaudnosidhosidh
```

- So your two `.env` files should look like the following

./HackWITusSignIn/.env
```javascript
GOOGLECLIENTID=********************
GOOGLECLIENTSECRET=****************
DBURI=*****************************
COOKIEKEY=skujdnoasudbnaisudbsidubn
QUERYKEY=ksjnddsudnosaudnosidhosidh
PORT=8000
```

./HackWITusSignIn/client/.env
```javascript
REACT_APP_QUERYKEY=ksjnddsudnosaudnosidhosidh
```

## Starting Up the Development Server
- To start up the development server follow these steps
- Setup enviornment variables in cloned repo (See above steps for this)
- `npm install` in root directory
- `npm run dev` to start the backend server
- In another terminal window `cd client && npm install`
- `npm start` to start the front-end react development server
- You should be good to go at this point, if you have any questions feel free to reach out to me or open an issue! 
- Happy Hacking!
