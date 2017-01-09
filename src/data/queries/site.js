/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import SiteType from '../types/SiteType';

const me = {
  type: SiteType,
  resolve({ request }) {
    console.log(request.site);
    return request.site && {
      id: request.site.id,
      title: request.site.title,
      url: request.site.url,
      category: request.site.category,
    };
  },
};

export default me;
