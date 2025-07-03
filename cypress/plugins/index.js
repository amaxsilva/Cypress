module.exports = (on, config) => {
    require('cypress-tags')(on, config);
    return config;
};