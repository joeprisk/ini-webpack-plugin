const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

class IniWebpackPlugin {

    constructor(options) {

        options = {
            path: './',
            hashValue: 'hash',
            filename: 'build.ini',
            values: {},
            ...options
        };

        this.path      = options.path;
        this.hashValue = options.hashValue;
        this.filename  = options.filename;
        this.values    = options.values;
    }

    apply(compiler) {

        compiler.hooks.done.tap(
            'IniWebpackPlugin',
            stats => this.buildIni(stats)
        );
    }

    buildIni(stats) {

        // default values

        const values = {
            ...this.values,
            [this.hashValue]: stats.hash
        };

        const stringOfData = Object.keys(values)
            .map(key => `${key}=${values[key]}`)
            .join('\n');

        mkdirp(this.path, (error) => {

            if(error) {

                console.warn(`Issue creating the directory ${this.path}`);

                return error;
            }

            fs.writeFileSync(
                    path.join(this.path, this.filename),
                    stringOfData
                );
        });
    }
}

module.exports = IniWebpackPlugin;
