import config from "../config";
import dictionarie from "../utils/dictionaries";

const home = (ctx) => {
    const { application, environment } = config;
    ctx.ok({
        application,
        description: dictionarie.home.applicationDescription,
        environment,
    });
};

export default home;
