import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const OverviewOrderBook = ({ isBuy, position }) => {
  const [values, setValues] = useState(Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => getRandomNumber(position))));

  function getRandomNumber(position) {
    if (position === 'left') {
      // Génère des valeurs entre 0 et 0.18 si la position est 'left'
      return Math.random() * 0.18;
    } else {
      // Génère des valeurs entre 0 et 100 si la position est 'right'
      return Math.floor(Math.random() * 100) + 1;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prevValues) => (
        prevValues.map((row) => row.map(() => getRandomNumber(position)))
      ));
    }, 1000);

    return () => clearInterval(interval);
  }, [position]);

  const rectangles = values.map((row, rowIndex) => (
    <Box
      key={rowIndex}
      sx={{
        flex: '0 0 100%',
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {row.map((value, colIndex) => (
        <Box
          key={colIndex}
          sx={{
            flex: '0 0 10%',
            height: '10%',
            backgroundColor: isBuy
              ? `rgba(0, 128, 0, ${value / 100})` // Vert avec opacité basée sur la valeur
              : `rgba(255, 0, 0, ${value / 100})`, // Rouge avec opacité basée sur la valeur
            border: '1px solid #fff',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
          }}
        >
          {position === 'left' ? value.toFixed(2) : value}
          </Box>
      ))}
    </Box>
  ));

  return (
    <Box
      sx={{
        display: 'flex',
        width: '50%',
        borderRadius: '4px',
        overflow: 'hidden',
        borderRadius: '5px',
      }}
    >
      {rectangles}
    </Box>
  );
};

OverviewOrderBook.propTypes = {
  isBuy: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default OverviewOrderBook;