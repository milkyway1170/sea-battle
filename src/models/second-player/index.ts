import { FIELDS } from '@/constants/mock-data';
import { CellStatusEnum } from '@/types/enums';
import { createStore } from 'effector';

export const $secondPlayer = createStore<CellStatusEnum[][]>(FIELDS);
