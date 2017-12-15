import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as record from './record';

export interface State {
  record: record.State;
}

export const reducers: ActionReducerMap<State> = {
  record: record.reducer
};

export const selectRecordState = createFeatureSelector<record.State>('record');
