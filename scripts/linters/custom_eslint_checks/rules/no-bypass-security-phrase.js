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
 * @fileoverview Lint check to disallow the use of bypassSecurity
 * identifier phrase.
 */

'use strict';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Lint check to disallow the use of bypassSecurity identifier phrase.',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    schema: [],
    messages: {
      disallowBypassSecurity: 'Please do not use phrase "bypassSecurity"',
    },
  },

  create: function (context) {
    var checkAndReportBypassSecurity = function (node) {
      var identifierName = node.name;
      if (identifierName.includes('bypassSecurity')) {
        context.report({
          node: node,
          messageId: 'disallowBypassSecurity',
        });
      }
    };

    return {
      Identifier: function (node) {
        checkAndReportBypassSecurity(node);
      },
    };
  },
};
