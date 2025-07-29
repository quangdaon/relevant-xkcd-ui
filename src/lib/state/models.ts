import { localStorageWritable } from './localStorage';

export const isModelPickerUnlocked = localStorageWritable('MODEL_UNLOCKED', false);
export const selectedModel = localStorageWritable('MODEL_SELECTED', 0);
