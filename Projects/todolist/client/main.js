import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Todos } from '../api/todos.js';

import './main.html';


/*
const todos = [
  {name: 'Pickup kids from school', time: '8:00'},
  {name: 'Go food shopping', time:'10:00'},
  {name: 'Meeting the boss', time: '3:00'}
];

Template.todoList.helpers({
  title: function(){
    return 'My Todos';
  },
  todos: function(){
    return todos;
  }
});
*/

Template.todoList.helpers({
  title: function(){
    return 'My Todos';
  },
  todos: function(){
    return Todos.find({});
  }
});

Template.todoList.events({
  'submit .todo-form'(event){
    event.preventDefault();
    //console.log('Submitted');
    const name = event.target.name.value;
    const time = event.target.time.value;

    //console.log(name+' '+time);
    Todos.insert({
      name: name,
      time: time
    });

    event.target.name.value = '';
    event.target.time.value = '';
  }
});
