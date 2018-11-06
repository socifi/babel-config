/**
 * Get basic configuration for babel.
 *
 * @param {false|string} modules - Compile modules, "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | false
 * @returns {Object} Babel config
 */
module.exports = (modules = 'commonjs') => {
    return {
        presets: [
            '@babel/preset-react',
            '@babel/preset-typescript',
            [
                '@babel/preset-env',
                {
                    modules,
                    loose: true,
                    useBuiltIns: 'usage',
                },
            ],
        ],
        plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            'babel-plugin-transform-react-class-to-function',
            '@babel/plugin-syntax-dynamic-import',
        ],
        env: {
            development: {
                plugins: [
                    'react-hot-loader/babel',
                    'babel-plugin-typescript-to-proptypes',
                    'babel-plugin-runtyper',
                ],
            },
            production: {
                presets: [
                    [
                        'minify',
                        {
                            evaluate: false,
                            simplify: false,
                            // removeUndefined: false,
                            // deadcode: false,
                            // booleans: false,
                            // builtIns: false,
                            // consecutiveAdds: false,
                            // flipComparisons: false,
                            // guards: false,
                            // infinity: false,
                            // mangle: false,
                            // memberExpressions: false,
                            // numericLiterals: false,
                            // propertyLiterals: false,
                            // regexpConstructors: false,
                            // replace: false,
                            // simplifyComparisons: false,
                            // typeConstructors: false,
                            // undefinedToVoid: false,
                            mergeVars: false,
                            // removeConsole: false,
                            // removeDebugger: false,
                        },
                    ],
                ],
            },
        },
    };
};
