# Coqui.Monster

Coqui.Monster is primarly a [React](https://mui.com/material-ui/getting-started/overview/) app with custom components utilizing the [Material Design](https://mui.com/material-ui/getting-started/overview/) framework intended for integration with [Builder.io](https://builder.io).
All components within this app are intended for use by [Coqui](https://www.twitch.tv/coqui) for her website [Coqui.Monster](https://coqui.monster/)

## Contributing

While the actual website design of [Coqui.Monster](https://coqui.monster/) is closed-sourced,
you are free to contribute additional components for easier and better customizability.

To get started with contributing, you will need to have Node.js and npm installed on your machine.
You can install Node.js from the official website at <https://nodejs.org>.
Once you have Node.js installed, you can clone the Coqui.Monster repository to your local machine using Git: `git clone https://github.com/Sevrene/Coqui.Monster.git`
or through the [GitHub repository](https://github.com/Sevrene/Coqui.Monster)

Next, navigate to the project directory and install the required dependencies using npm:

```cmd
cd Coqui.Monster
npm install
```

Finally, start the development server to launch the app in your web browser:
`npm start`

## Integrating with Builder.io

Coqui.Monster integrates with [Builder.io](https://builder.io) to render almost all content and to allow Coqui full creative control of the design of the site.
To get started with Builder.io, you will need to sign up for a free account on the website at <https://builder.io>.

Once you have signed up for an account, you can create a new page and customize it using the drag-and-drop editor.
When you are ready to integrate the page with your local branch of Coqui.Monster,
you can simply copy the API key from your Builder.io account and paste it into your app's local env as `REACT_APP_BUILDER_IO_ACCESS_TOKEN=[key]`.
From here you will be able to test the functionality of current components as well as incorporate your own.

## Submitting Contributions

All pull requests and issues are welcome on the [GitHub repository](https://github.com/Sevrene/Coqui.Monster). Please ensure that your code follows the project's coding standards and includes tests and comments where appropriate.

## License

Coqui.Monster is licensed under the MIT License, which means that you are free to use, modify, and distribute the code for personal or commercial purposes.
