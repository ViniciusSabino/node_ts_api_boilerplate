import compose from "koa-compose";

import homeRoute from "./home";

export default compose([homeRoute.middleware()]);
