import React from 'react';

export const Game = (): React.ReactElement => {
  return (
    <div className="board">
      <div className="market">market! </div>
      <div className="auction">auction</div>
      <div className="patch">patch</div>
      <div className="cookoff">cookoff</div>
      <div className="city-hall">city hall</div>
      <div className="turn-order">turn order</div>
    </div>
  );
};
