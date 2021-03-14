//npm modules
import pkg from './package.json';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import express from 'express';
import browserSync from 'browser-sync';

//load moudles
import loadMoudle from './system/loadModule';
import { target as paths } from './system/settings/paths'

const options = {
    pattern: path.join(paths.tasks, '**/tasks/*.js'),
    paths: paths,
};

const plugins = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
    scope: ['dependencies', 'devDependencies', 'peerDependencies']
});

plugins.pkg = pkg;
plugins.gulp = gulp;
plugins.path = path;
plugins.express = express;
plugins.browserSync = browserSync;

loadMoudle( plugins, options );