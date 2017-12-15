/*
 * This file is part of record-editor.
 * Copyright (C) 2017 CERN.
 *
 * record-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * record-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with record-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
 */

import { Action } from '@ngrx/store';

import { RecordEndpoint } from '../../shared/interfaces';

export enum RecordActionType {
  CHANGE = '[Record] Change',
  SAVE = '[Record] Save',
  SAVING = '[Record] Saving',
  SAVED = '[Record] Saved',
  SAVE_FAILED = '[Record] Save Failed',
  LOAD = '[Record] Load',
  LOADING = '[Record] Loading',
  LOADED = '[Record] Loaded',
  LOAD_FAILED = '[Record] Load Failed'
}

export class Change implements Action {
  readonly type = RecordActionType.CHANGE;

  constructor(public payload: object) { }
}

export class Save implements Action {
  readonly type = RecordActionType.SAVE;

  constructor(public payload: RecordEndpoint) { }
}

export class Saved implements Action {
  readonly type = RecordActionType.SAVED;

  constructor() { }
}

export class SaveFailed implements Action {
  readonly type = RecordActionType.SAVE_FAILED;

  constructor(public payload: Error) { }
}

export class Load implements Action {
  readonly type = RecordActionType.LOAD;

  constructor(public payload: RecordEndpoint) { }
}


export class Loaded implements Action {
  readonly type = RecordActionType.LOADED;

  constructor(public payload: object) { }
}

export class LoadFailed implements Action {
  readonly type = RecordActionType.LOAD_FAILED;

  constructor(public payload: Error) { }
}

export type RecordAction =
  | Change
  | Save | Saved | SaveFailed
  | Load | Loaded | LoadFailed;
