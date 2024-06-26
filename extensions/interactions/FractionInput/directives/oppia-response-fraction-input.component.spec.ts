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
 * @fileoverview Unti tests for the FractionInput response.
 */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ResponseFractionInput} from './oppia-response-fraction-input.component';
import {HtmlEscaperService} from 'services/html-escaper.service';

describe('ResponseFractionInput', () => {
  let component: ResponseFractionInput;
  let fixture: ComponentFixture<ResponseFractionInput>;
  let mockHtmlEscaperService = {
    escapedJsonToObj: function (answer: string) {
      return JSON.parse(answer);
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseFractionInput],
      providers: [
        HtmlEscaperService,
        {
          provide: HtmlEscaperService,
          useValue: mockHtmlEscaperService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseFractionInput);
    component = fixture.componentInstance;
  });

  it("should display user's response", () => {
    component.answer =
      '{' +
      '"isNegative": false,' +
      '"wholeNumber": 0,' +
      '"numerator": 1,' +
      '"denominator": 3' +
      '}';

    component.ngOnInit();

    expect(component.escapedAnswer).toBe('1/3');
  });
});
