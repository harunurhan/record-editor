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

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';

import { reducers } from './reducers';
import { RecordEffects } from './effects/record';

import { JsonEditorWrapperComponent } from './components/json-editor-wrapper';
import { RecordToolbarComponent } from './components/record-toolbar';
import { RecordHistoryComponent } from './components/record-history';
import { SearchBarComponent } from './components/search-bar';
import { TicketsComponent, NewTicketModalComponent, TicketComponent } from './components/tickets';
import { RecordSearchComponent } from './components/record-search';
import { SavePreviewModalComponent } from './components/save-preview-modal';
import { ManualMergeModalComponent } from './components/manual-merge-modal';




@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    StoreModule.forFeature('record-editor', reducers),
    EffectsModule.forFeature([RecordEffects]),
  ],
  declarations: [
    JsonEditorWrapperComponent,
    RecordToolbarComponent,
    RecordHistoryComponent,
    SearchBarComponent,
    TicketsComponent,
    NewTicketModalComponent,
    TicketComponent,
    RecordSearchComponent,
    SavePreviewModalComponent,
    ManualMergeModalComponent
  ],
  exports: [
    JsonEditorWrapperComponent
  ]
})
export class RecordEditorModule { }
