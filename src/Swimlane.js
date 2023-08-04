import React, { useEffect } from 'react';
import dragula from 'dragula';
import Card from './Card';
import './Swimlane.css';

const Swimlane = ({ name, status, clients, dragulaRef }) => {
  useEffect(() => {
    const container = dragulaRef.current;
    const drake = dragula([container]);

    // Handle the drop event
    drake.on('drop', (el, target, source) => {
      const taskId = el.dataset.id;
      const newStatus = target.dataset.status;
      updateTaskStatus(taskId, newStatus);
      el.dataset.status = newStatus;
      el.classList.add(newStatus); // Add new status class to the card element
    });
  }, [status, dragulaRef]);

  const updateTaskStatus = (taskId, newStatus) => {
    // Function to update the task status in the backend (implementation required)
    // This function should be implemented separately based on your backend
  };

  const cards = clients.map(client => {
    return (
      <Card
        key={client.id}
        id={client.id}
        name={client.name}
        description={client.description}
        status={client.status}
      />
    );
  });

  return (
    <div className={`Swimlane-column ${status}`}>
      <div className="Swimlane-title">{name}</div>
      <div className="Swimlane-dragColumn" ref={dragulaRef} data-status={status}>
        {cards}
      </div>
    </div>
  );
};

export default Swimlane;
