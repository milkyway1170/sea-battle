import { CellStatusEnum } from './enums';

export interface IPlayerNames {
  firstPlayer: string;
  secondPlayer: string;
}

export interface IShip {
  name: string;
  length: number;
  orientation: string;
  isPlaced: boolean;
}

export interface ISelectedShip extends IShip {}

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IFieldCell {
  cellStatus: CellStatusEnum;
  position: ICoordinates;
  isTemporary: boolean;
}

export interface IPlacingOfShip {
  cellStatus: CellStatusEnum;
  length: number;
  orientation: string;
  isPlaced: boolean;
  position: ICoordinates;
}
