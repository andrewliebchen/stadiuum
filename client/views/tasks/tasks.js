Session.setDefault('addingTask', null);

Template.current.task = function() {
  return Tasks.find({isCurrent: true}, {sort: {'priority': -1, 'updateStateAt': -1}});
};

Template.backlog.task = function() {
  return Tasks.find({isCurrent: false}, {sort: {'priority': -1, 'createdAt': -1}});
};

Template.taskItem.events({
  'click .mtr_item-link' : function() {
    Router.go('singleTask', {_id: this._id});
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

  'click .mtr_move-task' : function() {
    Tasks.update(this._id, {$set: {isCurrent: !this.isCurrent}});
    Meteor.call('updateStateAt', {
      id: this._id,
      updateStateAt: Date.now()
    });
  },

  'click .mtr_move-task_development' : function() {
    Tasks.update(this._id, {$set: {status: {inDevelopment: true, isNotStarted: true}}});
    Meteor.call('updateStateAt', {
      id: this._id,
      updateStateAt: Date.now()
    });
  },

  'click .mtr_start' : function() {
    Meteor.call('startTask', this._id);
    Items.update(this._id, {$set: {isCurrent: true}});
  },

  'click .mtr_stop' : function() {
    Meteor.call('stopTask', this._id);
  },

  'click .mtr_finish' : function() {
    Meteor.call('finishTask', this._id);
  }
});
