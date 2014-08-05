Ideas     = new Meteor.Collection('ideas');
Stories   = new Meteor.Collection('stories');   // Belong to ideas
Messages  = new Meteor.Collection('messages');  // Belong to ideas, stories, or users
Tasks     = new Meteor.Collection('tasks');     // Belong to stories
Documents = new Meteor.Collection('documents'); // Belong to ideas and stories

