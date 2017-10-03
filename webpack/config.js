const path = require('path');

const config = {

    env: process.env.NODE_ENV || 'development',

    // ----------------------------------
    // Project Structure
    // ----------------------------------
    path_base: path.resolve(__dirname, '..'),
    dir_src: 'src',
    dir_dist: 'build',

    // ----------------------------------
    // Compiler Configuration
    // ----------------------------------
    compiler_devtool         : 'source-map',
    compiler_public_path     : "/"
};

// ------------------------------------
// Environment
// ------------------------------------
config.globals = {
    'process.env'  : {
        'NODE_ENV' : JSON.stringify(config.env)
    },
    'NODE_ENV'     : config.env,
    '__DEV__'      : config.env === 'development',
    '__PROD__'     : config.env === 'production',
    '__TEST__'     : config.env === 'test',
    '__BASENAME__' : JSON.stringify(process.env.BASENAME || '')
};

// ------------------------------------
// Utilities
// ------------------------------------
function base () {
    const args = [config.path_base].concat([].slice.call(arguments));
    return path.resolve.apply(path, args)
}

config.paths = {
    base   : base,
    src : base.bind(null, config.dir_src),
    dist   : base.bind(null, config.dir_dist)
};

module.exports = config;