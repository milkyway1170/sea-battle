import { CellStatusEnum, PlayersEnum } from './enums';

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
  shipName: string | null;
}

export interface ITemporarySetShip {
  cellStatus: CellStatusEnum;
  length: number;
  orientation: string;
  isPlaced: boolean;
  position: ICoordinates;
  fieldName: string;
}

export interface IFields {
  firstPlayerField: IFieldCell[];
  secondPlayerField: IFieldCell[];
}

export interface ISetShip {
  fieldName: string;
  shipName: string;
}
