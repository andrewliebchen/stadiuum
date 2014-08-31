Template.navItems.helpers({
  activeClass : function (template) {
    var baseClass = 'btn btn-default';
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? baseClass + ' active' : baseClass;
  }
});
