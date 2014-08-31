Meteor.publish('ideas', function() {
  return Items.find({type: 'idea'});
});

Meteor.publish('singleIdea', function(id) {
  return id && Items.find(id);
});

Meteor.publish('ideaTasks', function(ideaId) {
  return Items.find({parentId: ideaId, type: 'task'});
});

Meteor.publish('tasks', function() {
  return Items.find({type: 'task', 'status.isFinished': null});
});
