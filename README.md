<p align="center">
  <img width="240px" style="margin: 0 auto; display: block;" src="https://user-images.githubusercontent.com/1455979/146241297-3b1dc419-e312-4e61-81e0-37d6dde00e21.png" alt="Steward"/>
  
  <h2 align="center">A helpful framework for building server-side experiences with Dart.</h2>

</p>

-----------

[![pub version](https://img.shields.io/pub/v/steward)](https://pub.dev/packages/steward)
[![codecov](https://codecov.io/gh/PyreStudios/steward/branch/main/graph/badge.svg?token=CAK5MR60ZI)](https://codecov.io/gh/PyreStudios/steward)
[![points](https://img.shields.io/pub/points/steward)](https://pub.dev/packages/steward)
[![likes](https://img.shields.io/github/stars/pyrestudios/steward)](https://img.shields.io/github/stars/pyrestudios/steward)
[![build status](https://img.shields.io/github/checks-status/pyrestudios/steward/main?label=main%20build)](https://img.shields.io/github/checks-status/pyrestudios/steward/main?label=main%20build)
[![Documentation](https://img.shields.io/badge/Documentation-Online-blueviolet)](https://pyrestudios.github.io/steward)

Steward features a command line interface for starting a new Steward project! Check it out!

**Note: Steward uses a config yml file that is generated by the CLI. If you choose to not use the CLI, you'll need to generate a matching config.yml file.**

The best examples for how to use Steward are captured in the test folder. Eventually, we'll refactor this out into tests and examples separately, but for now, they live together :)

Using the Steward framework gives you the following (but not limited to) benefits:
- A modular system with light Dependency Injection, Routing, Controllers, and more.
- Automatic dependency injection into controllers when mounting into routers.
- Easy HTTP request/response management.
- Config parsing into the DI container at application boot.
- Templating via the Mustache template specification.

Here's an example of how you can use Steward!

```dart
import 'package:steward/steward.dart';

// You can pull me out to a separate file, too ya know ;)
class SampleController extends Controller {
  @Injectable('UserService')
  late UserService userService;
  
  @Get('/version')
  version(_) => 'v1.0';

  @Get('/show')
  Response show(Request request) => view('main_template');
  
  @Get('/users')
  Response users => UserService.getUsers();
}

Future main() async {
  var router = Router();
  var container = CacheContainer();
  
  // Setup a DI binding for UserService
  container.bind('UserService', (_) => UserService());
  
  // Replace the default DI container implementation
  router.setContainer(container)
  
  // Mount the controller, parsing the annotations to build paths and injecting injectables
  router.mount(SimpleController);
  
  // Bare route handler example
  router.get('/hello', (_) {
    return Response.Ok('Hello World!');
  });
  
  // Plucking things out of the container example
  router.get('/config', (Request request) {
    print(request.container.make('@config.app.name'));
    return Response.Ok(request.container.make('@config.app.name'));
  });
  
  // Path Params example
  router.get('/:name', (Request request) {
    return Response.Ok(request.pathParams['name']);
  });
  
  var app = App(router: router);
  return app.start();
}
```
