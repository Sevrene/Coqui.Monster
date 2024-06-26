# Coqui.Monster

Coqui.Monster is primarily a React app with custom components utilizing the [Material UI Library](https://mui.com/material-ui/) and built on the [NextJS Framework](https://nextjs.org/) and (will be) managed by [Sanity.io](https://www.sanity.io/).

All code within this project are intended for use by [Coqui](https://www.twitch.tv/coqui) for her website [Coqui.Monster](https://coqui.monster/)

## Hosting

Coqui.Monster is currently hosted on Netlify and is built and deployed through GitHub Actions.
The project will hopefully be moved to [Cloudflare Pages](https://pages.cloudflare.com/) in the future for better performance and to take advantage of the unlimited bandwidth.
This is dependent on whether or not the project can be made to work with server-side rendering on Cloudflare.

## Running Locally

You will need to have Node.js and npm installed on your machine.
You can install these from the official website at <https://nodejs.org>.

Once you have Node.js installed, you can clone the 3AM repository to your local machine using Git: `git clone https://github.com/Sevrene/Coqui.Monster.git`
or through the [GitHub repository](https://github.com/Sevrene/Coqui.Monster) for a direct download.

Next, navigate to the project directory within cmd prompt and, if required, install the required dependencies using npm:

```cmd
cd {pathToParentFolder}/Coqui.Monster
npm install
```

Finally, start the development server to launch the app in your web browser:
`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running on the Cloud

Instead of running locally you can run the project on the cloud with Codespaces.

Navigate to Codespaces from the [GitHub repository](https://github.com/Sevrene/Coqui.Monster). You will be presented with an in browser IDE and this README.
Open up a terminal within this IDE if one is not already open and start the development server to launch the app in your web browser with `npm run dev` and stop this development server with `ctrl + C`

You will be prompted with a popup to open the app within your browser. If you are not prompted, navigate to [http://localhost:3000](http://localhost:3000) with your browser manually to see the result.

## License

Coqui.Monster is licensed under the MIT License except where otherwise noted. See the [LICENSE](/LICENSE.md) file for more information and/or the respective license files in the directories of the project.

## Submitting Contributions

All pull requests and issues are welcome on the [GitHub repository](https://github.com/Sevrene/Coqui.Monster).
