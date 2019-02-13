/*
 * Copyright 2016 LinkedIn Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('single-heuristic-detail', 'Integration | Component | single heuristic detail', {
  integration: true
});

test('it renders', function(assert) {

  this.set("yarnappheuristicresult", {
    name: "Mapper Skew",
    severity: "None",
    details: [
      {
        name: "Group A",
        value: "4 tasks @ 443 MB avg"
      },
      {
        name: "Group B",
        value: "53 tasks @ 464 MB avg"
      },
      {
        name: "Number of tasks",
        value: "57"
      }
    ]
  });

  this.render(hbs`{{single-heuristic-detail yarnappheuristicresult=yarnappheuristicresult}}`);

  assert.equal(this.$().text().trim().split("\n").join("").replace(/ /g, ''), 'MapperDataSkewSeverity:NoneGroupA4tasks@443MBavgGroupB53tasks@464MBavgNumberoftasks57');

});
