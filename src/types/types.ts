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
}

export interface IInitialFieldCell extends IFieldCell {
  isTemporary: boolean;
  shipName: string | null;
}

export interface IGameFieldCell extends IFieldCell {}

export interface ITemporarySetShip extends IInitialFieldCell {
  length: number;
  orientation: string;
  isPlaced: boolean;
  fieldName: string;
  shipName: string;
}

export interface IInitialFields {
  firstPlayerField: IInitialFieldCell[];
  secondPlayerField: IInitialFieldCell[];
}

export interface IGameFields {
  firstPlayerField: IGameFieldCell[];
  secondPlayerField: IGameFieldCell[];
}

export interface ISetShip {
  fieldName: string;
  shipName: string;
}
