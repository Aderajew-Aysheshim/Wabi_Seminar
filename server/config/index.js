// config/index.js

// Load environment variables from .env file
require("dotenv").config();

module.exports = {
    // Server port
    PORT: process.env.PORT || 5000,

    // JWT secret key for authentication
    JWT_SECRET: process.env.JWT_SECRET || "secret",

    // MySQL database connection
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_NAME: process.env.DB_NAME || "wabiseminar"
};