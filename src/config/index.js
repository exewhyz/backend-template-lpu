import "dotenv/config";

const config = {
    port : parseInt(process.env.PORT, 10) || 6000,
    nodeEnv : process.env.NODE_ENV || "development",
    mongoUrl : process.env.MONGO_URL || "mongodb://localhost:27017/template"
};

export default config;