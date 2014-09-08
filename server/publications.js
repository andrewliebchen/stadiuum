Meteor.publish('ideas', function() {
  return Ideas.find({});
});

Meteor.publish('singleIdea', function(id) {
  return id && Ideas.find(id);
});

Meteor.publish('ideaTasks', function(ideaId) {
  return Tasks.find({parentId: ideaId});
});

Meteor.publish('tasks', function() {
  return Tasks.find({'status.isFinished': null, 'status.inDevelopment': true});
});

Meteor.publish('singleTask', function(id) {
  return id && Tasks.find(id);
});
