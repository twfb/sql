/*
 *   Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import { ParsedUrlQuery } from 'querystring';

export const SQL_TRANSLATE_ROUTE = `/_opendistro/_sql/_explain`;
export const PPL_TRANSLATE_ROUTE = `/_opendistro/_ppl/_explain`;
export const SQL_QUERY_ROUTE = `/_opendistro/_sql`;
export const PPL_QUERY_ROUTE = `/_opendistro/_ppl`;
export const FORMAT_CSV = `format=csv`;
export const FORMAT_JSON = `format=json`;
export const FORMAT_TEXT = `format=raw`;

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'User-Agent': 'Kibana',
};

export const CLUSTER = {
  ADMIN: 'admin',
  SQL: 'opendistro_sql',
  DATA: 'data',
};

export const convertQueryToString = (query: string | ParsedUrlQuery) => {
  let index;
  let queryString = '';
  for (index = 0; index < Object.keys(query).length; ++index) {
    queryString += query[index.toString()];
  }
  return queryString;
};
