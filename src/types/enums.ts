export enum CellStatusEnum {
  Empty = 'Empty',
  AliveShip = 'Alive ship',
  SlainShip = 'Slain ship',
  Buffer = 'Buffer',
}

export enum OrientationEnum {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
}

export enum PlayersEnum {
  firstPlayer = 'firstPlayer',
  secondPlayer = 'secondPlayer',
}

export enum ActionTypeEnum {
  Missed = 'Missed',
  Slained = 'Slained',
  Hurt = 'Hurt'
}