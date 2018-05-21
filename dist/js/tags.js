riot.tag2('app-raw', '<span></span>', '', '', function(opts) {

  this.root.innerHTML = opts.content
  this.on('update', function() {
    this.root.innerHTML = opts.content
  })
});
riot.tag2('app-tag', '<div> <h1>Thie is Riot test.</h1> <p onclick="{foo}">test = {test}</p> </div>', 'app-tag h1,[data-is="app-tag"] h1{ color: orange; display: flex; }', '', function(opts) {
    var tag = this

    tag.test = 'Hello Riot!'

    tag.foo = function (e) {
      alert('foo')
    }
});