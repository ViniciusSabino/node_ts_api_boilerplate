import config from '../config';

const home = (ctx) =>
    ctx.ok({
        title: 'Node.js API Boilerplate',
        environment: config.environment,
    });

export default home;
