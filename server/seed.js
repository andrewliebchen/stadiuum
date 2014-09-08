Meteor.startup(function () {
  Tasks.remove({});
  Ideas.remove({});

  if(Tasks.find().count() === 0) {
    // TASKS
    Tasks.insert({
      title:      "As a developer, I'd like to add stories to a current section, so that I can know what stories people are working on",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  true,
      createdAt:  Date.now(),
      status: {
        inDevelopment: true,
        isNotStarted:  true
      }
    });

    Tasks.insert({
      title:      "As a developer, I'd like to be able to add dividers between stories, so that I can plan sprints however I want",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  false,
      createdAt:  Date.now(),
      status: {
        inDevelopment: true,
        isNotStarted:  true
      }
    });

    Tasks.insert({
      title:      "As a developer, I'd like to be able to drag and drop stories to reorder them, so that I can add and remove stories from sections I want",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  false,
      createdAt:  Date.now(),
      status: {
        inDevelopment: true,
        isNotStarted:  true
      }
    });

    Tasks.insert({
      title:      "As a developer, I'd like to be able to sort the list of stories in different ways, so I can get different views of my queue",
      totalLoe:   0,
      averageLoe: 0,
      loeUpdates: 0,
      isCurrent:  false,
      createdAt:  Date.now(),
      status: {
        inDevelopment: true,
        isNotStarted:  true
      }
    });

    // IDEAS
    Ideas.insert({
      title:       'Teams',
      description: 'Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum.',
      createdAt:   Date.now()
    });

    Ideas.insert({
      title:       'Chat',
      description: 'Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum.',
      createdAt:   Date.now()
    });

    Ideas.insert({
      title:       'Notes',
      description: 'Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum.',
      createdAt:   Date.now()
    });
  };
});
