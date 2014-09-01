
Template.ideas.idea = function() {
  return Items.find({}, {sort: {'priority': -1}});
};

Template.singleIdea.task = function() {
  return Items.find({type: 'task'});
}

Template.ideaItem.events({
  'click .mtr_idea-link' : function() {
    Router.go('singleIdea', {_id: this._id});
  }
});
