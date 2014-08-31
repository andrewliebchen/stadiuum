Session.setDefault('addingTask', null);
Session.setDefault('addingTag', null);

Deps.autorun(function() {
  Meteor.subscribe('tasks');
  Meteor.subscribe('tags');
});

Template.current.task = function() {
  return Tasks.find({isCurrent: true}, {sort: {'priority': -1, 'updateStateAt': -1}});
};

Template.backlog.task = function() {
  return Tasks.find({isCurrent: false}, {sort: {'priority': -1, 'createdAt': -1}});
};

Template.taskTag.addingTag = function() {
  return Session.equals('addingTag', this._id);
};

Template.taskItem.events({
  'click .mtr_upvote-task' : function() {
    Meteor.call('upvoteTask', this._id);
  },

  'click .mtr_toggle-loe' : function(event) {
    var task = Tasks.findOne(this._id); // Does this get fixed with subscribe?
    var selectedLoe = $(event.target).data('loe');
    var averageLoe = (task.totalLoe + selectedLoe) / (task.loeUpdates + 1)
    Meteor.call('updateLoe', this._id, {
      selectedLoe: selectedLoe,
      averageLoe: averageLoe
    });
  },

  'click .mtr_add-tag_toggle' : function(event) {
    $(event.target).closest('.task-tag').addClass('open');
  },

  'click .mtr_move-task' : function() {
    Tasks.update(this._id, {$set: {isCurrent: !this.isCurrent}});
    Meteor.call('updateStateAt', {
      id: this._id,
      updateStateAt: Date.now()
    })
  },

  'click .mtr_start' : function() {
    Meteor.call('startTask', this._id);
    Tasks.update(this._id, {$set: {isCurrent: true}});
  },

  'click .mtr_stop' : function() {
    Meteor.call('stopTask', this._id);
  },

  'click .mtr_finish' : function() {
    Meteor.call('finishTask', this._id);
  }
});

Template.taskTag.events({
  'click .mtr_toggle-tag' : function(event) {
    Session.set('addingTag', this._id);
  },

  'keydown .mtr_add-tag-to-task' : function(event) {
    if (event.which == 13) {
      var tag = $(event.target);
      var tagContent = {
        tagName: tag.val(),
        taskId: this._id
      };

      if(tagContent != '') {
        Meteor.call('addTagTotask', tagContent);
        tag.val('');
        Session.set('addingTag', null);
      }
    }
  }
});

Template.newTask.events({
  'click #mtr_addTask' : function(event, template) {
    var taskTitle = template.find('#mtr_newTaskTitle');
    var newTask = {
      title: taskTitle.value,
      time:  Date.now()
    };

    if(taskTitle.value != '') {
      Meteor.call('addTask', newTask);
      taskTitle.value = '';
    }
  }
});
