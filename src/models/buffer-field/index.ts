// import { DEFAULT_FIELD } from '@/constants/mock-data';
// import { CellStatusEnum, OrientationEnum } from '@/types/enums';
// import { IFieldCell, IPlacingOfShip, ISelectedShip } from '@/types/types';
// import { createEvent, createStore } from 'effector';
// import { $firstPlayer } from '../first-player';
// import { useStore } from 'effector-react';

// export const $bufferField = createStore<IFieldCell[]>();

// export const placingOfShip = createEvent<IPlacingOfShip>();

// const placing = (state: IFieldCell[], data: IPlacingOfShip) => {
//   console.log(data.position);
//   const { position, length, orientation } = data;
//   const newField = state.map((item) => {
//     if (orientation === OrientationEnum.Horizontal) {
//       if (
//         item.position.y >= position.y &&
//         item.position.y < position.y + length &&
//         item.position.x === position.x
//       )
//         return { ...item, cellStatus: CellStatusEnum.AliveShip };
//       return item;
//     } else {
//       if (
//         item.position.x >= position.x &&
//         item.position.x < position.x + length &&
//         item.position.y === position.y
//       )
//         return { ...item, cellStatus: CellStatusEnum.AliveShip };
//       return item;
//     }
//   });
//   //   if (data.isPlaced) return state;
//   return newField;
// };

// $bufferField.on(placingOfShip, (state, data) => placing(state, data));
