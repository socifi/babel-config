const packageJson = require('./../package');

/**
 * Get basic configuration for babel.

 * @param {Object|string} targets - Target for babel @see https://babeljs.io/docs/en/babel-preset-env#targets
 * @param {false|string} modules - Compile modules, "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | false
 * @returns {Object} Babel config
 */
module.exports = (targets = packageJson.browserslist.join(','), modules = 'commonjs') => {
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules,
                    targets,
                },
            ],
            '@babel/preset-typescript',
            '@babel/preset-react',
        ],
        plugins: [
            '@babel/external-helpers',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
        ],
    };
};
