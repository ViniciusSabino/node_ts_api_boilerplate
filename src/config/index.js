const { env } = process;

export default {
    port: env.PORT,
    environment: env.NODE_ENV || 'development',

    application: env.APPLICATION,

    mongodb: {
        connection: `mongodb://${env.MONGODB_CONNECTION}/${env.MONGODB_DATABASE}`,
    },
};
