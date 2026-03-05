import "dotenv/config";

const config = {
    port : process.env.PORT || 6000,
    nodeEnv : process.env.NODE_ENV || "development"
};

export default config;