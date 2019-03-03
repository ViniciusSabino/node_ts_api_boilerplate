const { env } = process;

export default {
    application: env.APPLICATION,
    port: env.PORT,
    environment: env.NODE_ENV,
};
