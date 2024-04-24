A Progressive Web App (PWA).
Benefits/key features:
1)performance;
2)the ability to work with or without an internet connection;
3)platform-specific; and,
4)installable;

Built the PWA App with the command:
npx create-react-app name-of-our-PWA-app --template cra-template-pwa

* npx - Every npm command needs to start with npm (or essentially with whatever node package manager you have installed, but 'npx' is used here, which comes with npm version 5.2.0). This helps you run npm packages and takes care of many features.
* create-react-app: This command initiates the popular Create React App utility that helps you build the starter react project.
* name-of-our-PWA-app: This is a filler title of your application. Name the app to whatever you would like. Here, the default 'my-app' name is used)
* --template: This is an argument. When you have an argument, you're essentially enabling an option in the same command. Here, you can specify a specific template for our starter react application.
* cra-template-pwa: The name of the PWA template for your PWA react application.

After installation, in project will be some files to take attention:
*service-worker.js: This is a script that runs in the background once your application starts running. The service worker makes sure that you can use your React application offline and handle multiple requests for the UI.

Running Your Progressive Web Application
Changing the service worker from unregistered to registered will allow you to utilize the app even when it's offline, a key benefit when it comes to PWAs.

Using the Lighthouse:

Used Lighthouse in Chrome to audit app for compliance with PWA standards, performance, accessibility, and best web development practices.

![image](https://github.com/Meiramkhanova/react-pwa-app/assets/102648181/293059f5-51e1-4d16-8450-ce2c4d9d8f75)

