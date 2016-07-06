/**
	장점: 애플리케이션의 사용자 인터페이스를 선언식으로 구성할 수 있다는 점
	render(), JSX, 속성, 상태
*/
import React from 'react';
import ReactDom from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
	{
		id: 1,
		title: 'Read the Book',
		description: 'I Shoud read the whole book',
		status: 'in-progress',
		tasks: []
	},
	{
		id: 2,
		title: 'Write some code',
		description: 'Code along with the sample in the book',
		status: 'todo',
		tasks: [
			{
				id: 1,
				name: 'ContactList Example',
				done: true
			},
			{
				id: 2,
				name: 'Kanban Example',
				done: false
			},
			{
				id: 3,
				name: 'My Own experiments',
				done: false
			}

		]
	},
	{
		id: 3,
		title: 'Test to things done',
		description: 'This stuff is done',
		status: 'done',
		tasks: []
	}
];


ReactDom.render( <KanbanBoard cards={cardsList} />, document.getElementById('app') );
