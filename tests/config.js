exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/**/*.js'],
    framework: 'mocha',
    useAllAngular2AppRoots: true,
    directConnect: true,

    mochaOpts: {
        ui: 'bdd',
        reporter: 'spec',
        timeout: 30000,
        bail: true
    },
    
    capabilities: {
        'browserName': 'chrome'
    }
};