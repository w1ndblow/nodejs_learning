function bindMe(func, context) {

  function bind_context (context) {
      return func.apply(context);
  }

  return bind_context;
}
