#!/bin/sh

cd test-module
npm install
npm run build
cd ..

cd app
npm install
npm run build