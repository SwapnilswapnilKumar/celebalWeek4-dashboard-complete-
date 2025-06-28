import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { kanbanData } from '../data/dummy';
import { Header } from '../components';

const initialColumns = {
  'To Do': kanbanData.filter((item) => item.Status === 'To Do'),
  'In Progress': kanbanData.filter((item) => item.Status === 'In Progress'),
  'Testing': kanbanData.filter((item) => item.Status === 'Testing'),
  'Done': kanbanData.filter((item) => item.Status === 'Done'),
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceItems = [...columns[sourceCol]];
    const destItems = [...columns[destCol]];

    const [movedItem] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, movedItem);

    setColumns({
      ...columns,
      [sourceCol]: sourceItems,
      [destCol]: destItems,
    });
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />

      <DragDropContext onDragEnd={onDragEnd}>
        <Box display="flex" gap={2} overflow="auto">
          {Object.entries(columns).map(([columnId, items]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => (
                <Paper
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  sx={{
                    minWidth: 250,
                    maxWidth: 300,
                    backgroundColor: snapshot.isDraggingOver ? '#f0f0f0' : '#fafafa',
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <Typography variant="h6" textAlign="center" mb={2}>
                    {columnId}
                  </Typography>

                  {items.map((item, index) => (
                    <Draggable draggableId={item.Id.toString()} index={index} key={item.Id}>
                      {(provided, snapshot) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          sx={{
                            mb: 2,
                            p: 2,
                            borderRadius: 1,
                            backgroundColor: snapshot.isDragging ? '#e0f7fa' : '#ffffff',
                            boxShadow: 1,
                          }}
                        >
                          <Typography variant="subtitle1" fontWeight="bold">
                            {item.Summary}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.Id}
                          </Typography>
                        </Box>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </Paper>
              )}
            </Droppable>
          ))}
        </Box>
      </DragDropContext>
    </div>
  );
};

export default Kanban;
