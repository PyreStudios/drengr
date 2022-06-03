"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introducing Steward","href":"/steward/docs/intro","docId":"intro"},{"type":"category","label":"CLI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Steward CLI","href":"/steward/docs/cli/steward-cli","docId":"cli/steward-cli"},{"type":"link","label":"Installation","href":"/steward/docs/cli/installing","docId":"cli/installing"},{"type":"link","label":"The Steward CLI","href":"/steward/docs/cli/cli-commands","docId":"cli/cli-commands"}]},{"type":"category","label":"Quickstart","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation and Requirements","href":"/steward/docs/quickstart/installation-and-requirements","docId":"quickstart/installation-and-requirements"}]},{"type":"category","label":"Router","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Requests","href":"/steward/docs/router/requests","docId":"router/requests"},{"type":"link","label":"Responses","href":"/steward/docs/router/responses","docId":"router/responses"},{"type":"link","label":"The Router","href":"/steward/docs/router/routers","docId":"router/routers"}]},{"type":"category","label":"Container","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is a Container","href":"/steward/docs/container/what_is_a_container","docId":"container/what_is_a_container"},{"type":"link","label":"CacheContainer","href":"/steward/docs/container/cache_container","docId":"container/cache_container"}]},{"type":"category","label":"Controllers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Controllers","href":"/steward/docs/controllers/how_to_use_controllers","docId":"controllers/how_to_use_controllers"}]},{"type":"category","label":"App","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is the App","href":"/steward/docs/app/what-is-the-app","docId":"app/what-is-the-app"},{"type":"link","label":"Configuration","href":"/steward/docs/app/configuration","docId":"app/configuration"},{"type":"link","label":"Views","href":"/steward/docs/app/views","docId":"app/views"}]},{"type":"category","label":"Deploying a Steward App","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Containerizing a Steward App","href":"/steward/docs/deploying/dockerizing-a-steward-app","docId":"deploying/dockerizing-a-steward-app"}]}]},"docs":{"app/configuration":{"id":"app/configuration","title":"Configuration","description":"The app is responsible for parsing your Steward configuration file and binding that to the DI container. Nested structures will be flattened when generating keys. This means a config YAML like this:","sidebar":"tutorialSidebar"},"app/views":{"id":"app/views","title":"Views","description":"The app is responsible for many things, but one important task that it accomplishes is registering the views for your application.","sidebar":"tutorialSidebar"},"app/what-is-the-app":{"id":"app/what-is-the-app","title":"What is the App","description":"The App class takes care of tying up some odds and ends that many projects may want. For example, registering view files (html/mustache templates) so that they can be used, reading and parsing your config.yml, and -- in the future -- many more items. You don\'t have to use the App and can get on just fine with just the Router and Container, but if you want these \\"advanced\\" features from the framework, then you probably want to use the app.","sidebar":"tutorialSidebar"},"cli/cli-commands":{"id":"cli/cli-commands","title":"The Steward CLI","description":"The steward CLI supports the following commands:","sidebar":"tutorialSidebar"},"cli/installing":{"id":"cli/installing","title":"Installation","description":"The Steward CLI is easy to install provided you have Dart installed. Simply run dart pub global activate steward.","sidebar":"tutorialSidebar"},"cli/steward-cli":{"id":"cli/steward-cli","title":"Steward CLI","description":"Steward ships with a CLI to help you generate your steward application, controllers and more. The CLI is maintained in the same repository as the framework itself.","sidebar":"tutorialSidebar"},"container/cache_container":{"id":"container/cache_container","title":"CacheContainer","description":"The CacheContainer is the default container implementation that ships with Steward. You can access the generated CacheContainer on the Router by calling myRouter.container, provided myRouter is the name of the variable holding your router.","sidebar":"tutorialSidebar"},"container/what_is_a_container":{"id":"container/what_is_a_container","title":"What is a Container","description":"A container, in the Steward sense, is simply a box that things can be stored in and retrieved from. In our case, we use our Container as the foundation for our dependency injection framework. The container should be one of the simpest things about Steward. You can put key-value pairs into it, and you can select values by their key.","sidebar":"tutorialSidebar"},"controllers/how_to_use_controllers":{"id":"controllers/how_to_use_controllers","title":"Controllers","description":"Controllers are responsible for controlling the way that a user interacts with your server-side application. Steward provides a Controller that your own Controllers can extend, which provides a few key benefits for you to leverage.","sidebar":"tutorialSidebar"},"deploying/dockerizing-a-steward-app":{"id":"deploying/dockerizing-a-steward-app","title":"Containerizing a Steward App","description":"There are many examples of setting up a dockerfile for AoT compiled Dart. Unfortunately, AoT compiled Dart does not support reflection on which Steward relies heavily. We\'ve put together a simple Dockerfile to help with this process.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introducing Steward","description":"Steward\'s goal is to be a helpful framework for building server-side experiences with Dart.","sidebar":"tutorialSidebar"},"quickstart/installation-and-requirements":{"id":"quickstart/installation-and-requirements","title":"Installation and Requirements","description":"Steward is only supported on Dart 2.15.0+.","sidebar":"tutorialSidebar"},"router/requests":{"id":"router/requests","title":"Requests","description":"Steward handles incoming HTTP requests by mapping them to a Request class.","sidebar":"tutorialSidebar"},"router/responses":{"id":"router/responses","title":"Responses","description":"To write data in response to an HTTP Request, Steward uses Responses. The Response class has many constructors to help you model your Response accurately and expressively in code. For example, if you wanted to create a Response to model a status code 200 response with a body of \\"Hello World\\", you could write Response.Ok(\\"Hello World\\").","sidebar":"tutorialSidebar"},"router/routers":{"id":"router/routers","title":"The Router","description":"The Router handles setting up request bindings and writing Steward responses to the actual HTTP response.","sidebar":"tutorialSidebar"}}}')}}]);