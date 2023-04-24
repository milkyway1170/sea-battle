// import { DEFAULT_FIELD } from '@/constants/mock-data';
// import { CellStatusEnum, OrientationEnum } from '@/types/enums';
// import { IFieldCell, IPlacingOfShip, ISelectedShip } from '@/types/types';
// import { createEvent, createStore } from 'effector';
// import { setSelectedShip } from '../selected-ship';
// import { setIsPlaced } from '../ships-list';

// export const $firstPlayer = createStore<IFieldCell[]>(DEFAULT_FIELD);

// export const placingOfShip = createEvent<IPlacingOfShip>();
// export const setShip = createEvent<string>();

// const placing = (state: IFieldCell[], data: IPlacingOfShip) => {
//   const { position, length, orientation } = data;
//   const newField = state.map((item) => {
//     if (orientation === OrientationEnum.Horizontal) {
//       if (
//         item.position.y >= position.y &&
//         item.position.y < position.y + length &&
//         item.position.x === position.x &&
//         item.isTemporary
//       )
//         return {
//           ...item,
//           cellStatus: CellStatusEnum.AliveShip,
//           isTemporary: true,
//         };
//     } else {
//       if (
//         item.position.x >= position.x &&
//         item.position.x < position.x + length &&
//         item.position.y === position.y &&
//         item.isTemporary
//       )
//         return {
//           ...item,
//           cellStatus: CellStatusEnum.AliveShip,
//           isTemporary: true,
//         };
//     }
//     if (item.isTemporary)
//       return {
//         ...item,
//         cellStatus: CellStatusEnum.Empty,
//         isTemporary: false,
//       };
//     return item;
//   });
//   return newField;
// };

// const setNewShip = (state: IFieldCell[], name: string) => {
//   setIsPlaced(name);
//   setSelectedShip(null);
//   return state.map((item) => {
//     return { ...item, isTemporary: false };
//   });
// };

// $firstPlayer.on(placingOfShip, (state, data) => placing(state, data));
// $firstPlayer.on(setShip, (state, name) => setNewShip(state, name));
