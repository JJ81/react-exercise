import React, { Component } from 'react';
import CheckList from './CheckList';

class Card extends Component {
	constructor() {
		super(...arguments); // ??
		this.state = {
			showDetails: false
		};
	}

	toggleDetails(){
		this.setState({showDetails: !this.state.showDetails});
	}

	render() {
		let card_details;

		let sideColor = {
			position: 'absolute',
			zIndex: -1,
			top: 0,
			bottom: 0,
			left: 0,
			width: 7,
			backgroundColor: '#f00' // Quotation으로 감쌰야 한다. js내에서 css를 적용하는 방식으로 이해하면 된다..
		};

		if(this.state.showDetails){
			card_details = (
				<div className="card_details">
					{this.props.description}
					<CheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
			);
		}

		return (
			<div className="card">
				{/* <div className="card__title" onClick={this.toggleDetails.bind(this)}>{this.props.title}</div> 주석은 이와 같이 */}
				<div style={sideColor} />
				<div className={this.state.showDetails? "card__title card__title--is-open" : "card__title"} onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
				{card_details}
			</div>	
		);
	}
}

export default Card;