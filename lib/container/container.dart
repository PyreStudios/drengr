import 'dart:mirrors';

import 'package:steward/controllers/controller.dart';

/// A rudimentary DI container implementation
/// container bindings are created as needed.
class Container {
  Map<String, dynamic> bindings = {};

  /// Binds a new DI item into the container
  /// The function bound to the provided key will only be called when the container
  /// receives a request for the item at that key.
  void bind<T>(String key, T Function(Container) fn) {
    bindings[key] = fn;
  }

  /// Generate an item for a given key
  T make<T>(String key) {
    return bindings[key](this);
  }
}

// Annotation to mark a class as injectable for the DI container to auto-inject
class Injectable {
  const Injectable(this.containerKey);
  final String containerKey;
}
