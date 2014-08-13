Session.setDefault('addingStory', false);

Template.currentUserAvatar.url = function() {
  return Gravatar.imageUrl(Meteor.user().profile.github.email);
};

Template.ideas.idea = function() {
  return Ideas.find({});
};

Template.newStory.isAdding = function() {
  return Session.equals('addingStory', true) ? 'is-adding' : '';
};


Template.mainNav.events({
  // Stub in showing chats/ideas in pane-1
  'click .nav-item' : function(event) {
    $('body').toggleClass('show-pane-1');
    $('.nav-item.active').removeClass('active');
    $(event.target).addClass('active');
  }
});

Template.ideaDetails.events({
  'click .mrt_toggle-add-story' : function(event) {
    return Session.set('addingStory', true);
  }
});

Template.newStory.events({

});
