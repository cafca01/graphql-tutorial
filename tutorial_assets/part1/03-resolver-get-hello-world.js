(function process(/*ResolverEnvironment*/ env) {
  var message = "Hello World";
  var name = env.getArguments().name;

  if (name) {
    message += " (and " + name + ")";
  }

  return {
    message: message,
  };
})(env);
