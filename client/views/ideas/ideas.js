
Template.ideas.idea = function() {
  return Items.find({}, {sort: {'priority': -1}});
};

Template.childTasks.task = function() {
  return Items.find({type: 'task'});
}

Template.ideaItem.events({
  'click .mtr_item-link' : function() {
    Router.go('singleIdea', {_id: this._id});
  }
});
