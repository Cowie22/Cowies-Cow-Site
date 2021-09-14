<h2>
  Getting Started
</h2>
<ul>
  <li>
    From terminal run npm i
  </li>
  <li>
    run npm start
  </li>
  <li>
    project is located at localhost:8000
  </li>
</ul>

<h2>
  State Management
</h2>
<ul>
  <li>
    Hooks are primarily used for state management throughout the site.
  </li>
  <li>
    The traditional React method of passing props down is also used.
  </li>
  <li>
    The React Context API is used for global state management.
    <ul>
      <li>
        Gatsby can not handle context in the traditional sense.  Normally you'd have an AppProvider, which wraps the outermost parent component, but in gatsby you must use gatsby-ssr.js and gatsby-browser.js, in order to wrap the application with AppProvider and utilize context.
      </li>
      <li>
        Besides that, context is used in the traditional way.  State management can be found in /contexts/state.jsx.
        <ul>
          <li>
            There is a default state, and then the global state variables, in combination with the functions that update the global state variables, are located in the this.state object for AppProvider.
          </li>
          <li>
            Using the useContext hook, it is very easy to utilize context in any component.  You don't even need to utilize the Consumer wrapper.
          </li>
        </ul>
      </li>
      <li>
        I find the use of Context and hooks is far easier to write and utilize when comparing to a library like Redux.  You also have the benefits of being able to utilize global and local state.  It is nice to not have to use the global store, for simple functions that pertain to only one component.  Whereas in redux, the entire app because a redux app for state management and you must use the global storage.  Furthermore, this allows you to keep the app a React app, where in Redux, it's basically a Redux app.  
      </li>
      <li>
        Context has become even more easier to utilize and implement with the introduction and improvement of hooks.  Thus, virtually eliminating the need for classes.
      </li>
    </ul>
  </li>
</ul>

<h2>
  File Setup and Routing
</h2>
<ul>
  <li>
    Routing in Gatsby is extremely easy... All you need to do is place a JSX or JS file in the pages directory and then the name of the file becomes a route.
    <ul>
      <li>
        In order to avoid github and redirect bugs, always make the routes completely lower case.
      </li>
    </ul>
  </li>
  <li>
    In order to organize the project Properly, you would typically put the .jsx file and the accompanying .scss file into it's own directory.  Doing That for the pages, would create a double directory for the route.  For example, /home/home.  As a result, for organization purposes, I have placed the pages here and simply returned the accompanying, "Content" jsx. The content jsx and scss are organized as they're supposed to be within there own directory and that is the where the content for each page really begins.  These are located in components, with the rest of the components
  </li>
  <li>
    Throughout the project, if a component is reused enough, a data file is used in the directory and the information is passed to the accompanying jsx file as props.
    <ul>
      <li>
        Allows for code that is more D.R.Y.
      </li>
      <li>
        Props are passed in these cases for color change, or slight padding change, etc. as well.
      </li>
      <li>
        Wherever possible, I found ways to reuse components, such as header heroes, similar cards, etc.
      </li>
    </ul>
  </li>
</ul>

<h2>
  Redirects
</h2>
<ul>
  <li>
    Currently this project does not contain any redirects, but the setup for front-end redirects is all there and the implementation is described below.
  </li>
  <li>
    Gatsby has functionality for redirects, which are held in gatsby-node.js and are painlessly made.
  </li>
  <li>
    The createRedirect function is used within exports.createPages.
    <ul>
      <li>
        The fromPath key is used for the old URL and the toPath key is used for the redirect location
      </li>
      <li>
        You can also put in other keys, such as status code.
      </li>
    </ul>
  </li>
  <li>
    The data for the redirects (all of the fromPaths and toPaths) are located in redirectData.js on the root of the project
    (same level as gatsby-node.js).  The data is then mapped over in gatsby-node.js.
  </li>
</ul>

<h2>
  Animations
</h2>
<ul>
  <li>
    Most animations throughout the project are do it yourself, with js and css animations.  For example the slider for tabs, hover states, expanding cards, etc.
  </li>
  <li>
    Making the animations yourself, by utilizing such tools as keyframes, greatly reduces the size of your npm modules and increases performance.
  </li>
</ul>

<h2>
  Optimizations, SEO, etc.
</h2>
<ul>
  <li>
    There are many optimization techniques used throughout the project.
    <ul>
      <li>
        gatsby-plugin-brotli compresses the build
      </li>
      <li>
        gatsby-plugin-minify minifies the HTML
      </li>
      <li>
        Fonts are preloaded
      </li>
      <li>
        Image compression tools are used on every image and different techniques to get the best image are used.  For example, sometimes it's better to use a 2X image at low quality and other times it's better to use 1X or 1.5X images at higher qualities.  Tests were done to achieve the most optimized image, while still providing the desired quality.
      </li>
      <li>
        Large background images are preloaded and further techniques are used to achieve high performance with these images.
      </li>
      <li>
        All animation were made using JS and css, instead of using libraries, in order to reduces the build size.
      </li>
      <li>
        Code reuse and strategies were implemented to reuse components wherever possible, thus keeping the code D.R.Y. and clean.
      </li>
      <li>
        Cache policies are used
      </li>
      <li>
        Lazy Loading is used
      </li>
      <li>
        Further techniques were used, based on recommendations from lighthouse
      </li>
    </ul>
    <li>
      For SEO, Accessibility and Best Practices, you simply need to run lighthouse tests on every page and ensure that you are meeting the requirements/completing the missing requirements.
    </li>
  </li>
</ul>

<h2>
  Responsiveness
</h2>
<ul>
  <li>
    The site is fully responsive mainly utilizing bootstraps Container, Row, and Col classes.  These are the only bootstrap classes utilized throughout, but they are very powerful when used correctly and make responsiveness much easier to achieve.
  </li>
  <li>
    Other best practices are used to achieve responsiveness, such as using percentages for width, height, etc..  Furthermore, utilizing flex-box.
  </li>
  <li>
    As much as possible, one set of code is used for mobile and desktop.  However, there are certain cases, such as the Nav or ISI, where you must utilizes adaptive code for implementation.
  </li>
</ul>

<h2>
  The Matrix (Pages With Tabs)
</h2>
<ul>
  <li>
    The content for a tab, along with the tab animations, is determined with context.  The currentPage and currentTopTab values determine the content that is shown.
  </li>
  <li>
    These values also allow one to show dynamic content, that isn't is specific for a tab, but is not located in the tab content.  For example, the references at the bottom of the page.
  </li>
</ul>

<h2>
  Deployment
</h2>
<ul>
  <li>
    A third party company, Workbox, is responsible for hosting the site.  However, we are still responsible for creating the production build and uploading it to the staging server.
  </li>
  <li>
    In order to deploy, you can use and SFTP, such as Filezilla to upload the files.  However, I find it easier to SFTP to the staging server using the terminal.  You can SFTP, as well as SSH into the server with the credentials.  Using the SFTP commands, you can easily and more quickly upload the files.
  </li>
  <li>
    There are files on the server that are permanent, and you must keep them there.  These files are saved in the Placeholder directory on the server as well, so that you never lose them.
  </li>
  <li>
    After running, npm run build (make sure brotli and the minification are utilized), you can grab the exact path to the public folder and upload this to the server using SFTP.
  </li>
  <li>
    In the server, navigate to public_html and run, "put -r {path to public folder}/*" for example
    "put -r /Users/rcowie/GiantWebsites/Myovant/Myovant-HCP-Gatsby/public/*"
    <ul>
      <li>
        Put is the SFTP command to upload files.
      </li>
      <li>
        -r means recursively, so that the child directories of the public folder and all of their files are uploaded as well.
      </li>
      <li>
        /* is used so that you upload the content within the public directory and not the public directory itself, otherwise the path would be off and the project won't run.
      </li>
    </ul>
  </li>
</ul>

<h2>
  Tests
</h2>
<ul>
  <li>
    There's only so much that you can test on a static website, but they are located in the /components/__tests__ directory.
  </li>
  <li>
    Jest and React Testing Library are used to make tests.
  </li>
</ul>








<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```sh
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
Test