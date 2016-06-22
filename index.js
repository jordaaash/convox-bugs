'use strict';

var fs     = require('fs');
var path   = require('path');
var expect = require('chai').expect;

describe('convox start', function () {
    it(".dockerignore works (as long as docker-compose.yml doesn't use 'volumes')", function () {
        var readFile = function () {
            var file   = path.join(__dirname, 'secrets', 'secret.txt');
            return fs.readFileSync(file, 'utf8');
        };
        expect(readFile).to.throw(/ENOENT/);
    });

    it(".env doesn't work", function () {
        expect(process.env).to.have.property('SOME_VAR', 'some_val');
    });
});
