Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});

Router.route('/portfolio', {name: 'portfolio'});

Router.route('/portfolio/behavioral-risk', {name: 'brfss'});

Router.route('/portfolio/undaf-project', {name: 'undaf'});

// Router.route('/portfolio/justice-for-the-mentally-ill', {name: 'justice'});