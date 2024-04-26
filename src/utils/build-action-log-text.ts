import { ActionTypeEnum } from '@/types/enums';

export const buildActionLogText = (
  actionType: ActionTypeEnum,
  shipLength: number | null,
) => {
  const shipLengthText = ['', 'однопалупный', 'двухпалубный', 'трехпалубный'];

  const actionLogText = {
    [ActionTypeEnum.Hurt]: 'Вы ранили корабль противника',
    [ActionTypeEnum.Missed]: 'Не попали',
    [ActionTypeEnum.Slained]: `Вы убили ${
      shipLengthText[shipLength ?? 0]
    } корабль противника`,
  };
  return actionLogText[actionType];
};
