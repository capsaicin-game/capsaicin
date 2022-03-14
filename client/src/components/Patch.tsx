import React from 'react';
// export enum PepperColor {
//   "Red",
//   "Blue",
//   "Yellow",
//   "Green",
//   "Orange",
//   "Purple",
//   "Brown",
//   "White",
//   "Black",
//   "Ghost",
// }
// type PlayerColor = "Red"|"Blue"|"Yellow"|"Green"|"Orange"|"Purple";


//  interface Pepper {
//   kind: 'pepper',
//   color: PepperColor;
// }

// interface Player {
//   kind: 'player',
//   color: PlayerColor;
// }
// interface Point {
//   x: number;
//   y: number;
// }
// type PatchItem = Pepper|Player|null;
// import { PepperPatch } from 'logic';
// interface PepperPatch {
//   grid: PatchItem[];
//   w: number;
//   h: number;
//   players: { [ key: string ]: Point };
// }
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
