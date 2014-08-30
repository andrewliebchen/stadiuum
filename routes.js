Router.configure({
  layoutTemplate: 'application',
  loadingTemplate: 'loading',
});

Router.map(function() {
  this.route('tasks', {
    path: '/',
    waitOn: function() {
      return [
        Meteor.subscribe('stories') // Change to ideas
      ];
    },
    data: function() {
      return Stories.find({});
    }
  });

  this.route('singleTask', {
    path: '/task/:_id',
    waitOn: function() {
      return [
        // Meteor.subscribe('singleTask', this.params._id)
      ];
    },
    data: function() {
      // return Tasks.findOne(this.params._id);
    }
  });
});

Router.onBeforeAction('loading');
