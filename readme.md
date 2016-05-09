microscope-angular 2
====================

AngularJS 2 (Typescript / Browserify) starter kit.

![microscopejs](https://avatars0.githubusercontent.com/u/13710913?v=3&s=200)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/microscope-frontend/microscope-angular2)

Requirements
------------

* node >= 4.4.X
* npm
* gulp
* typescript CLI

Node.js installation
--------------------

#### Install on OSX

Using homebrew:

	brew install node

#### Install on Linux (Ubuntu/Mint)

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

#### Install on Windows

[Download Node.js MSI](http://nodejs.org/download/)

Installation
------------

#### install global gulp (sudo on linux/OSX) :

	npm install gulp

#### install local dependencies (sudo on linux/OSX) :

	npm install

Commands
--------

#### serve local development server:

	npm start

#### test (run gulp test):

	npm test

#### build:

	gulp build

* clean www directory.
* copy assets & templates in www directory.
* compile scripts source files to bundle.

#### release:

	gulp release
	
* validate source code (jsHint).
* clean www directory.
* copy assets & templates in www directory.
* compile scripts source files to bundle.
* uglify bundle.

#### test:

	gulp test
	
* validate source code (tslint).

#### serve:

	gulp serve
	
* clean www directory.
* copy assets & templates in www directory.
* compile scripts source files to bundle.
* run local server with generated 'www/' directory as root.
* Watch for changes in source files (scripts & assets).

Roadmap
=======

* babelify <=> gulp release bug
* Welcome form component
* CI / CD