
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('app-tag', '<div> <h1>Thie is Riot test.</h1> <button class="unmount-animation" onclick="{animationUnmount}" ref="button">アンマウント！</button> </div>', 'app-tag h1,[data-is="app-tag"] h1{ color: orange; display: flex; } app-tag .unmount-animation,[data-is="app-tag"] .unmount-animation{ opacity: 1; transition: opacity 1s; } app-tag .unmount-animation.is-unmount,[data-is="app-tag"] .unmount-animation.is-unmount{ opacity: 0; }', '', function(opts) {
const tag = this;
tag.finishAnimation = false;
tag.test = 'Hello Riot!';

tag.animationUnmount = e => {
  tag.refs.button.addEventListener('transitionend', e => {
    console.log('きえた');
    tag.unmount();
  });
  tag.refs.button.classList.add('is-unmount');
};

tag.on('before-unmount', e => {
  console.log(tag);
});
});
riot.tag2('raw-html', '<span></span>', '', '', function(opts) {
this.root.innerHTML = opts.content;
this.on('update', function () {
  this.root.innerHTML = opts.content;
});
});});