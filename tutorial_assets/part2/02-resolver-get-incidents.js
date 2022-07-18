(function process(/*ResolverEnvironment*/ env) {
  var gr = new GlideRecordSecure("incident");

  // If these parameters were passed add them to the GR
  if (env.getArguments().callerId) {
    gr.addQuery("caller_id", env.getArguments().callerId);
  }

  // If the sys id is specified for getIncident
  if (env.getArguments().id) {
    gr.addQuery("sys_id", env.getArguments().id);
  }

  // default to last 5
  var last = env.getArguments().last || 5;

  // Handle optional "priority" argument
  if (env.getArguments().priority) {
    gr.addQuery("priority", env.getArguments().priority);
  }
  gr.orderByDesc("sys_created_on");
  gr.setLimit(last);
  gr.query();

  return gr;
})(env);
