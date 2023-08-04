// KanbanBoard.js

import React from 'react';
import Swimlane from './Swimlane';

const KanbanBoard = () => {
  return (
    <div className="kanban-board">
      <Swimlane title="Backlog" status="backlog" />
      <Swimlane title="In Progress" status="in-progress" />
      <Swimlane title="Complete" status="complete" />
    </div>
  );
};

export default KanbanBoard;
