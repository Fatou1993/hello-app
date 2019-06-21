# hello-app

React App that leverages geolocation to obtain the users country so it can then generate a customized greeting in the users native language.

This project was inspired from [app-ideas](https://github.com/florinpop17/app-ideas "App Ideas Collection")

![](src/hello-app.gif)

## Link to the app

[Hello App](https://wizardly-euler-f49371.netlify.com) : Deployed with [netlify](https://www.netlify.com/)

## Resources used to create this project

1. [complete-intro-to-react-v4](https://btholt.github.io/complete-intro-to-react-v4/ "Complete Intro to React") : Some great React content by [Brian Holt](https://github.com/btholt "Brian Holt")
2. Pure CSS3 Gradient Background Animation by Manuel Pinto on [CodePen](https://codepen.io/P1N2O/pen/pyBNzX)
3. [Front End Masters](https://frontendmasters.com) : Great Courses for front-end. :heart: :heart: :heart:

## Functionalities

- [x] User can see a mock login panel containing a user name text input field,
      a password text input field, and 'Login' and 'Logout' buttons.
- [x] User can enter a mock login name into the User Name field.
- [x] User can enter a mock password into the Password field. Input should
      be masked so the user see's asterisks (`*`) for each character that is entered
      rather than the plaintext password.
- [x] User can click the 'Login' button to perform a mock login.
- [x] User can see a message if either or both of the input fields are empty
      and the border color of the field(s) in error should be changed to red.
- [x] User can see a login acknowledgement message in the format:
      `<hello-in-native-language> <user-name> you have successfully logged in!`
- [x] User can click the 'Logout' button to clear the text input fields and
      any previous messages.
- [x] User can see a new message when successfully logged out in the format:
- [x] User can see an additional text input field for a country code which
      will be used to override the country code obtained through geolocation. Hint:
      this is a great feature for testing your app.
- [x] User can see additional geolocation information after logging on that
      includes at least the local IP address, city, region, country name, zip code,
      longitude, latitude, and timezone.
      `Have a great day <user-name>!`

## Disclaimers

There may still be bugs in the app.
