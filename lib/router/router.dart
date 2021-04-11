import 'dart:io';

import 'package:drengr/container/container.dart';
import 'package:drengr/controllers/controller.dart';
import 'package:drengr/controllers/controller_route_binding.dart';
import 'package:drengr/router/response.dart';
import 'package:drengr/router/request.dart';
import 'package:path_to_regexp/path_to_regexp.dart';

enum HttpVerb {
  Connect,
  Delete,
  Get,
  Head,
  Options,
  Patch,
  Post,
  Put,
  Trace
}

typedef RequestCallback = Response Function(Request request);

class Binding {
  HttpVerb verb;
  String path;
  RequestCallback callback;

  Binding({required this.verb, required this.path, required this.callback});
}


class Router {

  Container? container;
  List<Binding> bindings = [];

  void setDIContainer(Container container) {
    this.container = container;
  }

  void connect(String path, {RequestCallback? handler, Controller? controller, String? method}) => 
    _addBinding(path, HttpVerb.Connect, handler: handler, controller: controller, method: method);

  void delete(String path, {RequestCallback? handler, Controller? controller, String? method}) => 
    _addBinding(path, HttpVerb.Delete, handler: handler, controller: controller, method: method);

  void get(String path, {RequestCallback? handler, Controller? controller, String? method}) => 
    _addBinding(path, HttpVerb.Get, handler: handler, controller: controller, method: method);

  void options(String path, {RequestCallback? handler, Controller? controller, String? method}) => 
    _addBinding(path, HttpVerb.Options, handler: handler, controller: controller, method: method);

  void patch(String path, {RequestCallback? handler, Controller? controller, String? method}) => 
    _addBinding(path, HttpVerb.Patch, handler: handler, controller: controller, method: method);

  void post(String path, {RequestCallback? handler, Controller? controller, String? method}) => 
    _addBinding(path, HttpVerb.Post, handler: handler, controller: controller, method: method);

  void put(String path, {RequestCallback? handler, Controller? controller, String? method}) => 
    _addBinding(path, HttpVerb.Put, handler: handler, controller: controller, method: method);

  void trace(String path, {RequestCallback? handler, Controller? controller, String? method}) => 
    _addBinding(path, HttpVerb.Trace, handler: handler, controller: controller, method: method);

  void _addBinding(String path, HttpVerb verb, {RequestCallback? handler, Controller? controller, String? method}) {
    if (handler != null) {
      bindings.add(Binding(verb: HttpVerb.Trace, path: path, callback: handler));
    } else if (controller != null && method != null) {
      var container = this.container;
      if (container != null) {
        controller.setContainer(container);
      }
      bindings.add(ControllerRouteBinding(verb: verb, path: path, controller: controller, methodName: method));
    } else {
      throw Exception('Unable to add binding');
    }
  }

  Future serveHTTP() async {
    var port = container?.make('@config.app.port') ?? 4040;
    var server = await HttpServer.bind(
      InternetAddress.loopbackIPv4,
      port,
    );

    print('Bound server to port ${port}');

    await for (HttpRequest request in server) {
      var hasMatch = false;
      for (var i = 0; i < bindings.length; i++) {
        var params = <String>[];
        var regex = pathToRegExp(bindings[i].path, parameters: params);
        hasMatch = regex.hasMatch(request.uri.path);

        if (hasMatch) {
            var match = regex.matchAsPrefix(request.uri.path);
            if (match != null) {
            var pathParams = extract(params, match);
            var req = Request(request: request, pathParams: pathParams)..setContainer(container);
            var response = bindings[i].callback(req);
            _renderResponse(request, response);
            break;
          }
        }
      }

      if (!hasMatch) {
        request.response.statusCode = 404;
      }

      await request.response.close();
    }
  }

  void _renderResponse(HttpRequest request, Response response) {
    request.response.write(response.body);
  }
}
