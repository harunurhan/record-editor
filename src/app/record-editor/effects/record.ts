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

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RecordActionType, Loaded, LoadFailed, Load, Save, Saved, SaveFailed } from '../actions/record';

import { RecordApiService } from '../../core/services';

export class RecordEffects {

  @Effect()
  loadRecord$ = this.actions$
    .ofType(RecordActionType.LOAD)
    .mergeMap((action: Load) => this.apiService.loadRecord(action.payload.type, action.payload.recid)
      .switchMap()
      .map(record => new Loaded(record))
      .catch(error => Observable.of(new LoadFailed(error)))
    );

  @Effect()
  saveRecord$ = this.actions$
    .ofType(RecordActionType.SAVE)
    .mergeMap((action: Save) => this.apiService.loadRecord(action.payload.type, action.payload.recid)
      .map(record => new Saved())
      .catch(error => Observable.of(new SaveFailed(error)))
    );

  constructor(private actions$: Actions,
    private apiService: RecordApiService) { }
}
