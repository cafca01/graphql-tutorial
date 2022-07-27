(function process(/*ResolverEnvironment*/ env) {
  // By default try to get ID from the query arguments: getStudent(id: ID!)
  // If that is empty then try to use the value from the @source directive
  // in the schema definition.  This allows us to use the same resolver
  // from a query (getUser(id)) or from a nested field (getIncident/assignedTo)
  var sysId = env.getArguments().id || env.getSource();

  var gr = new GlideRecordSecure("sys_user");
  gr.query("sys_id", sysId);

  return gr;
})(env);
