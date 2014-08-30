Stories  = new Meteor.Collection('stories');
Tags     = new Meteor.Collection('tags');

Tags.initEasySearch('tagName');

