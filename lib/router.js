Router.configure({layoutTemplate : 'layout'})
Router.route('/', {name:'home'});
Router.route('/new', {name:'newForm'});
Router.route('/:name', {name:'bCard'});
