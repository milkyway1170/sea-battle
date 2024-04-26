import { ActionTypeEnum, CellStatusEnum } from './enums';

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
  isShooted: boolean;
  shipLength: number | null;
}

export interface IEnemyFieldCell extends IFieldCell {
  isShooted: boolean;
}

export interface ITemporarySetShip extends IInitialFieldCell {
  length: number;
  orientation: string;
  isPlaced: boolean;
  isFirstPlayer: boolean;
  shipName: string;
}

export interface IInitialFields {
  firstPlayerField: IInitialFieldCell[];
  secondPlayerField: IInitialFieldCell[];
}

export interface IEnemyFields {
  firstPlayerField: IEnemyFieldCell[];
  secondPlayerField: IEnemyFieldCell[];
}

export interface ISetShip {
  isFirstPlayer: boolean;
  shipName: string;
}

export interface ITakeShot {
  isFirstPlayer: boolean;
  position: ICoordinates;
}

export interface ITakeShotEnemyCell extends ITakeShot {
  isShotHit: boolean;
}

export interface IActionLogs {
  firstPlayerActionLogs: IActionLog[];
  secondPlayerActionLogs: IActionLog[];
}

export interface IActionLog {
  position: ICoordinates;
  actionType: ActionTypeEnum;
  text: string;
}

export interface IAddActionLog {
  isFirstPlayer: boolean;
  position: ICoordinates;
  actionType: ActionTypeEnum;
  shipLength: number | null;
}

export interface ICheckIsShipDead {
  isFirstPlayer: boolean;
  shipName: string | null;
  shipLength: number | null;
}

export interface IGetLastActionLogs {
  actionLogs: IActionLog[];
}
