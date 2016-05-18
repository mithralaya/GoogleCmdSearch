#!/usr/bin/env node
"use strict";

var program = require('commander');
var chalk = require('chalk');

var search = require('./search/google');

program
  .version('1.0.0')
  .description(
    console.log(chalk.blue.bold('G') + chalk.red.bold('o') + chalk.yellow.bold('o') + chalk.blue.bold('g') + chalk.green.bold('l') + chalk.red.bold('e'))
  )
  .usage('<query>');
program
  .command('*')
  .description('g <query>')
  .action(function(env) {
    search.index(env);
  });

program
  .parse(process.argv);

program.allowUnknownOption = function(arg) {
    this._allowUnknownOption = arguments.length === 0 || arg;
    return this;
};
