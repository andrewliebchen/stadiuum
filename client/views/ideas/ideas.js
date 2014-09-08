
Template.ideas.idea = function() {
  return Ideas.find({}, {sort: {'priority': -1}});
};

Template.childTasks.task = function() {
  return Tasks.find({});
}

Template.ideaItem.events({
  'click .mtr_item-link' : function() {
    Router.go('singleIdea', {_id: this._id});
  }
});

Template.newTask.events({
  'click #mtr_addTask' : function(event, template) {
    var taskTitle = template.find('#mtr_newTaskTitle');
    var newTask = {
      title:      taskTitle.value,
      time:       Date.now(),
      parentId:   Session.get('currentIdea')
    };

    if(taskTitle.value != '') {
      Meteor.call('addTask', newTask);
      taskTitle.value = '';
    }
  }
});
