import React from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '/GameMap.css';

const GameMap = () => {
  // Define locations with their details
  const locations = [
    { id: 1, name: 'MR & MS APSIT', floor: 'ground', x: 20, y: 85 },
    { id: 2, name: 'FINE ARTS', floor: 'ground', x: 25, y: 75 },
    { id: 3, name: 'APSIT GOT LATENT', floor: 'ground', x: 35, y: 65 },
    { id: 4, name: 'ESCAPE ROOM', floor: 'first', x: 65, y: 55 },
    { id: 5, name: 'HORROR ROOM', floor: 'first', x: 70, y: 45 },
    { id: 6, name: 'HUMAN TIC TAC TOE', floor: 'first', x: 75, y: 35 },
    { id: 7, name: 'TREASURE HUNT', floor: 'second', x: 30, y: 55 },
    { id: 8, name: 'THE COUCH GAME', floor: 'second', x: 40, y: 45 },
    { id: 9, name: 'JUST DANCE', floor: 'second', x: 35, y: 35 },
  ];

  // Floor labels
  const floorLabels = [
    { name: 'GROUND FLOOR', color: '#a2d149', x: 75, y: 85 },
    { name: 'FIRST FLOOR', color: '#f47443', x: 85, y: 15 },
    { name: 'SECOND FLOOR', color: '#7fdcde', x: 25, y: 15 },
  ];

  // Map colors based on floor
  const floorColors = {
    ground: '#a2d149',
    first: '#f47443',
    second: '#7fdcde',
  };

  // Get color for location based on floor
  const getLocationColor = (floor) => floorColors[floor] || '#ccc';

  return (
    <div className='schedule'></div>
  );
};

export default GameMap;