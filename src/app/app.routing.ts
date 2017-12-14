import { Routes, RouterModule } from '@angular/router';

import { JsonEditorWrapperComponent } from './record-editor/components/json-editor-wrapper';
import { RecordSearchComponent } from './record-editor/components/record-search';
import { HoldingpenEditorComponent } from './holdingpen-editor/holdingpen-editor.component';

const appRoutes: Routes = [
  { path: 'holdingpen/:objectid', component: HoldingpenEditorComponent },
  { path: ':type/search', component: RecordSearchComponent },
  { path: ':type/:recid', component: JsonEditorWrapperComponent }
];

export const appRoutingProviders = [];

export const routing = RouterModule.forRoot(appRoutes);
