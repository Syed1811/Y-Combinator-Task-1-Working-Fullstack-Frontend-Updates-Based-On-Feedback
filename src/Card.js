import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  handleCardClick = () => {
    // Add any additional functionality when clicking on a card (if needed)
    // For example, opening a modal with more details about the task
  };

  render() {
    let className = ['Card'];
    if (this.props.status === 'backlog') {
      className.push('Card-grey');
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue');
    } else if (this.props.status === 'complete') {
      className.push('Card-green');
    }

    return (
      <div
        className={className.join(' ')}
        data-id={this.props.id}
        data-status={this.props.status}
        onClick={this.handleCardClick}
      >
        <div className="Card-content">
          <div className="Card-title">{this.props.name}</div>
          {/* You can include other card details here */}
        </div>
      </div>
    );
  }
}
