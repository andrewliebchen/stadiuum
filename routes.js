Router.configure({
  layoutTemplate: 'application',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('ideas', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('ideas');
    },
    data: function() {
      return Ideas.find({});
    }
  });

  this.route('singleIdea', {
    path: '/ideas/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleIdea', this.params._id),
        Meteor.subscribe('ideaTasks', this.params._id)
      ];
    },
    data: function() {
      Session.set('currentIdea', this.params._id);
      return Ideas.findOne(this.params._id);
    },
    onStop: function() {
      Session.set('currentIdea', null);
    }
  });

  this.route('tasks', {
    path: '/tasks',
    waitOn: function() {
      return Meteor.subscribe('tasks');
    },
    data: function() {
      return Tasks.find({});
    }
  });

  this.route('singleTask', {
    path: '/tasks/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleTask', this.params._id)
      ];
    },
    data: function() {
      return Items.findOne(this.params._id);
    }
  });
});

Router.onBeforeAction('loading');
