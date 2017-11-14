import { NormalizerService } from './normalizer.service';
import { CommonApiService } from './common-api.service';
import { RecordApiService } from './record-api.service';
import { HoldingpenApiService } from './holdingpen-api.service';
import { AppConfigService } from './app-config.service';
import { CommonConfigsService } from './common-configs.service';
import { RecordCleanupService } from './record-cleanup.service';
import { FieldSplitterService } from './field-splitter.service';
import { DomUtilsService } from './dom-utils.service';
import { RecordSearchService } from './record-search.service';
import { SavePreviewModalService } from './save-preview-modal.service';

export {
  CommonApiService,
  HoldingpenApiService,
  RecordApiService,
  AppConfigService,
  CommonConfigsService,
  RecordCleanupService,
  FieldSplitterService,
  DomUtilsService,
  RecordSearchService,
  SavePreviewModalService,
  NormalizerService
};

export const CORE_SERVICES = [
  CommonApiService,
  HoldingpenApiService,
  RecordApiService,
  AppConfigService,
  CommonConfigsService,
  RecordCleanupService,
  FieldSplitterService,
  DomUtilsService,
  RecordSearchService,
  SavePreviewModalService,
  NormalizerService
];
