import { atom } from "recoil";
import { ColorScheme } from '@mantine/core'

export const modeState = atom<ColorScheme>({
  key: 'modeState',
  default: 'light',
});