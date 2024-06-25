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
 * @fileoverview Backend api service for email dashboard page.
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UrlInterpolationService} from 'domain/utilities/url-interpolation.service';
import {EmailData} from './email-dashboard-result.component';

@Injectable({
  providedIn: 'root',
})
export class EmailDashboardResultBackendApiService {
  RESULT_HANDLER_URL = '/emaildashboardresult/<query_id>';
  CANCEL_EMAIL_HANDLER_URL = '/emaildashboardcancelresult/<query_id>';
  TEST_BULK_EMAIL_URL = '/emaildashboardtestbulkemailhandler/<query_id>';

  constructor(
    private http: HttpClient,
    private urlInterpolationService: UrlInterpolationService
  ) {}

  async submitEmailAsync(data: EmailData, queryId: string): Promise<Object> {
    let resultHandlerUrl = this.urlInterpolationService.interpolateUrl(
      this.RESULT_HANDLER_URL,
      {
        query_id: queryId,
      }
    );
    return this.http
      .post(resultHandlerUrl, {
        data,
      })
      .toPromise();
  }

  async cancelEmailAsync(queryId: string): Promise<Object> {
    let cancelUrlHandler = this.urlInterpolationService.interpolateUrl(
      this.CANCEL_EMAIL_HANDLER_URL,
      {
        query_id: queryId,
      }
    );
    return this.http.post(cancelUrlHandler, {}).toPromise();
  }

  async sendTestEmailAsync(
    emailSubject: string,
    emailBody: string,
    queryId: string
  ): Promise<Object> {
    let testEmailHandlerUrl = this.urlInterpolationService.interpolateUrl(
      this.TEST_BULK_EMAIL_URL,
      {
        query_id: queryId,
      }
    );

    return this.http
      .post(testEmailHandlerUrl, {
        email_subject: emailSubject,
        email_body: emailBody,
      })
      .toPromise();
  }
}
