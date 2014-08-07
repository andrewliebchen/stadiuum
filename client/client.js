Template.currentUserAvatar.url = function() {
  return Gravatar.imageUrl(Meteor.user().profile.github.email);
};

Template.ideas.idea = function() {
  return Ideas.find({});
};

Template.mainNav.events({
  // Stub in showing chats/ideas in pane-1
  'click .nav-item' : function(event) {
    $('body').toggleClass('show-pane-1');
    $('.nav-item.active').removeClass('active');
    $(event.target).addClass('active');
  }
});
