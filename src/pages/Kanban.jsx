import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { productsTableData } from '../data/dummy';

const ProductTable = () => {
  const [items, setItems] = useState(productsTableData);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Product Inventory (Drag to Reorder)
      </Typography>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="productList">
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {items.map((product, index) => (
                <Draggable key={product.id} draggableId={product.id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <Paper
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      elevation={snapshot.isDragging ? 8 : 2}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: snapshot.isDragging ? 'primary.light' : 'background.paper',
                        transition: 'background-color 0.3s',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Category: {product.category} | Price: ${product.price} | Stock: {product.stock}
                        </Typography>
                      </Box>
                      <Typography
                        variant="caption"
                        color={product.stock > 0 ? 'green' : 'red'}
                        sx={{ fontWeight: 600 }}
                      >
                        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Typography>
                    </Paper>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default ProductTable;
