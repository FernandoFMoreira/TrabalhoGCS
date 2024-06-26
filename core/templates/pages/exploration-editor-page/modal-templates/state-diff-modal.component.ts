// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Component for state diff modal.
 */

import {Input, OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmOrCancelModal} from 'components/common-layout-directives/common-elements/confirm-or-cancel-modal.component';
import {State} from 'domain/state/StateObjectFactory';
import {HistoryTabYamlConversionService} from '../services/history-tab-yaml-conversion.service';
import {EntityTranslationsService} from 'services/entity-translations.services';

export interface headersAndYamlStrs {
  leftPane: string;
  rightPane: string;
}

interface mergeviewOptions {
  lineNumbers: boolean;
  readOnly: boolean;
  mode: string;
  viewportMargin: number;
}

@Component({
  selector: 'oppia-state-diff',
  templateUrl: './state-diff-modal.component.html',
})
export class StateDiffModalComponent
  extends ConfirmOrCancelModal
  implements OnInit
{
  // These properties are initialized using Angular lifecycle hooks
  // and we need to do non-null assertion. For more information, see
  // https://github.com/oppia/oppia/wiki/Guide-on-defining-types#ts-7-1

  // The following properties will be null when there is no change introduced
  // in either of the state. It remains same as original State.
  @Input() newState!: State | null;
  @Input() oldState!: State | null;
  @Input() newStateName!: string;
  @Input() oldStateName!: string;
  @Input() headers!: headersAndYamlStrs;
  showingTranslationChanges: boolean = false;

  yamlStrs: headersAndYamlStrs = {
    leftPane: '',
    rightPane: '',
  };

  CODEMIRROR_MERGEVIEW_OPTIONS: mergeviewOptions = {
    lineNumbers: true,
    readOnly: true,
    mode: 'yaml',
    viewportMargin: 100,
  };

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private historyTabYamlConversionService: HistoryTabYamlConversionService,
    private entityTranslationsService: EntityTranslationsService
  ) {
    super(ngbActiveModal);
  }

  ngOnInit(): void {
    if (!this.showingTranslationChanges) {
      this.historyTabYamlConversionService
        .getYamlStringFromStateOrMetadata(this.oldState)
        .then(result => {
          this.yamlStrs.leftPane = result;
        });

      this.historyTabYamlConversionService
        .getYamlStringFromStateOrMetadata(this.newState)
        .then(result => {
          this.yamlStrs.rightPane = result;
        });
    } else {
      this.historyTabYamlConversionService
        .getYamlStringFromTranslations(
          this.entityTranslationsService
            .languageCodeToLastPublishedEntityTranslations
        )
        .then(result => {
          this.yamlStrs.leftPane = result;
        });

      this.historyTabYamlConversionService
        .getYamlStringFromTranslations(
          this.entityTranslationsService.languageCodeToLatestEntityTranslations
        )
        .then(result => {
          this.yamlStrs.rightPane = result;
        });
    }
  }
}
