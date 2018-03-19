riot.tag2('app-tag', '<div> <h1>Thie is Riot test.</h1> <p>{test}</p> </div>', 'app-tag h1,[data-is="app-tag"] h1{ color: orange; -js-display: flex; display: flex; }', '', function(opts) {
'use strict';

var tag = this;

tag.test = 'Hello Riot';
});