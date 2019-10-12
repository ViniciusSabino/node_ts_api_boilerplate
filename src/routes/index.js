import compose from 'koa-compose';

import homeRouter from './home';

const allRoutes = [homeRouter];

export default compose(allRoutes.map((route) => route.middleware()));
