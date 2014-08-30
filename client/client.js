Session.setDefault('addingStory', null);
Session.setDefault('addingTag', null);

Deps.autorun(function() {
  Meteor.subscribe('stories');
  Meteor.subscribe('tags');
});

Template.current.story = function() {
  return Stories.find({isCurrent: true}, {sort: {'priority': -1, 'updateStateAt': -1}});
};

Template.backlog.story = function() {
  return Stories.find({isCurrent: false}, {sort: {'priority': -1, 'createdAt': -1}});
};

Template.storyTag.addingTag = function() {
  return Session.equals('addingTag', this._id);
};

Template.storyItem.events({
  'click .mtr_upvote-story' : function() {
    Meteor.call('upvoteStory', this._id);
  },

  'click .mtr_toggle-loe' : function(event) {
    var story = Stories.findOne(this._id); // Does this get fixed with subscribe?
    var selectedLoe = $(event.target).data('loe');
    var averageLoe = (story.totalLoe + selectedLoe) / (story.loeUpdates + 1)
    Meteor.call('updateLoe', this._id, {
      selectedLoe: selectedLoe,
      averageLoe: averageLoe
    });
  },

  'click .mtr_add-tag_toggle' : function(event) {
    $(event.target).closest('.story-tag').addClass('open');
  },

  'click .mtr_move-story' : function() {
    Stories.update(this._id, {$set: {isCurrent: !this.isCurrent}});
    Meteor.call('updateStateAt', {
      id: this._id,
      updateStateAt: Date.now()
    })
  },

  'click .mtr_start' : function() {
    Meteor.call('startStory', this._id);
    Stories.update(this._id, {$set: {isCurrent: true}});
  },

  'click .mtr_stop' : function() {
    Meteor.call('stopStory', this._id);
  },

  'click .mtr_finish' : function() {
    Meteor.call('finishStory', this._id);
  }
});

Template.storyTag.events({
  'click .mtr_toggle-tag' : function(event) {
    Session.set('addingTag', this._id);
  },

  'keydown .mtr_add-tag' : function(event) {
    if (event.which == 13) {
      var tag = $(event.target);
      var tagContent = {
        tagName: tag.val(),
        storyId: this._id
      };

      if(tagContent != '') {
        Meteor.call('addTag', tagContent);
        tag.val('');
        Session.set('addingTag', null);
      }
    }
  }
});

Template.newStory.events({
  'click #mtr_addStory' : function(event, template) {
    var storyTitle = template.find('#mtr_newStoryTitle');
    var newStory = {
      title: storyTitle.value,
      time:  Date.now()
    };

    if(storyTitle.value != '') {
      Meteor.call('addStory', newStory);
      storyTitle.value = '';
    }
  }
});
