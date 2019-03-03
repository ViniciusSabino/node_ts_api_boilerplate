import config from "../config";
import dictionary from "../utils/dictionaries";

const home = (ctx) => {
    const { application, environment } = config;
    ctx.ok({
        application,
        description: dictionary.home.applicationDescription,
        environment,
    });
};

export default home;
