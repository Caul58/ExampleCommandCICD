#!/usr/bin/env node
"use strict";
const program = require('commander');
const { exec } = require('child_process');
program
    .version('0.0.1')
    .description("An example CLI for construct flutter apps");
program
    .command('stage <stageName>')
    .description('run the required stage')
    .action(function (stageName) {
    switch (stageName) {
        case "analyze": {
            console.log("Analyze");
            exec("/Users/caulpermor/Development/flutter/bin/flutter analyze --no-pub", (err, stdout, stderr) => {
                if (err) {
                    console.log(stderr);
                }
                else {
                    console.log(stdout);
                }
            });
            break;
        }
        case "build": {
            console.log("Build");
            exec("/Users/caulpermor/Development/flutter/bin/flutter build ios --release --no-codesign", (err, stdout, stderr) => {
                if (err) {
                    console.log(stderr);
                }
                else {
                    console.log(stdout);
                }
            });
            break;
        }
        case "test": {
            console.log("Test");
            exec("/Users/caulpermor/Development/flutter/bin/flutter test --coverage", (err, stdout, stderr) => {
                if (err) {
                    console.log(stderr);
                }
                else {
                    console.log(stdout);
                }
            });
            break;
        }
        case "sign": {
            console.log("Sign");
            exec("cd ios && /usr/bin/xcodebuild -list", (err, stdout, stderr) => {
                if (err) {
                    console.log(stderr);
                }
                else {
                    console.log(stdout);
                }
            });
            break;
        }
        default: {
            console.log("No valid option selected");
            break;
        }
    }
}).on('--help', function () {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ jarvis stage analyze');
    console.log('  $ jarvis stage build');
    console.log('  $ jarvis stage test');
    console.log('  $ jarvis stage sign');
});
program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
