// Copyright 2022 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Unit tests for the view learner group details
 * modal component.
 */

import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, waitForAsync, TestBed} from '@angular/core/testing';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ShortLearnerGroupSummary} from 'domain/learner_group/short-learner-group-summary.model';
import {MockTranslatePipe} from 'tests/unit-test-utils';
import {ViewLearnerGroupDetailsModalComponent} from './view-learner-group-details-modal.component';

class MockActiveModal {
  close(): void {
    return;
  }

  dismiss(): void {
    return;
  }
}

describe('View Learner Group Details Modal Component', function () {
  let component: ViewLearnerGroupDetailsModalComponent;
  let fixture: ComponentFixture<ViewLearnerGroupDetailsModalComponent>;

  const shortLearnerGroup = new ShortLearnerGroupSummary(
    'sampleId2',
    'sampleTitle 2',
    'sampleDescription 2',
    ['username1'],
    7
  );

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLearnerGroupDetailsModalComponent, MockTranslatePipe],
      providers: [
        {
          provide: NgbActiveModal,
          useClass: MockActiveModal,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLearnerGroupDetailsModalComponent);
    component = fixture.componentInstance;
    component.learnerGroup = shortLearnerGroup;

    fixture.detectChanges();
  });

  it('should check whether component is initialized', () => {
    expect(component).toBeDefined();
  });
});
