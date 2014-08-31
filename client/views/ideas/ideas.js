
Template.ideas.idea = function() {
  return Items.find({}, {sort: {'priority': -1}});
};

Template.singleIdea.task = function() {
  return Items.find({type: 'task'});
}
