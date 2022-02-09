import React from 'react';
import { PepperPatch } from 'logic';

const PatchPiece = (): React.ReactElement => {
  return <div className="patch-piece"></div>;
}

export default (): React.ReactElement => {
  let patches = [];
  for (let i = 0; i < 70; i++) {
    patches.push(<PatchPiece />)
  }
  console.log(patches);
  return (
    <div className="patch">
      { patches }
    </div>
  );
}
