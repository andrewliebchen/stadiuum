Router.configure({
  layoutTemplate: 'application',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('ideas', {
    path: '/',
    waitOn: function() {
      return [
        Meteor.subscribe('ideas')
      ];
    },
    data: function() {
      return Items.find({});
    }
  });

  this.route('tasks', {
    path: '/tasks',
    waitOn: function() {
      return [
        Meteor.subscribe('tasks')
      ];
    },
    data: function() {
      return Items.find({});
    }
  });

  this.route('singleTask', {
    path: '/tasks/:_id',
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
