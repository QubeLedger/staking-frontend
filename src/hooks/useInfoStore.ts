import { createStore } from './store';

interface Info {
  apy: number,
  exchange_rate: number;
}

const defaultState: Info = {
  apy: 0,
  exchange_rate: 0, 
};

export const [useInfoStore] = createStore(defaultState);