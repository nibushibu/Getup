var app_riot = {
  'css': `app h1,[is="app"] h1{
      color: orange;
      display: flex;
    } app .unmount-animation,[is="app"] .unmount-animation{
      opacity: 1;
      transition: opacity 1s;
    } app .unmount-animation.is-unmount,[is="app"] .unmount-animation.is-unmount{
      opacity: 0;
    }`,

  'exports': {
    state: {
      finishAnimation: false,
      test: 'Hello Riot!'
    },

    onMounted() {
      anime({
        targets: this.$('[ref="button"]'),
        translateX: 20,
        easing: 'easeInOutSine',
        duration: 1000,
        loop: true,
        direction: 'alternate'
      });
    },

    animationUnmount(e){
      this.$('[ref="button"]').addEventListener('transitionend', function(e) {
        console.log('消えました');
      });
      this.$('[ref="button"]').classList.add('is-unmount');
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div><h1>Thie is Riot test.</h1><p expr4><!----></p><button expr5 class="unmount-animation" ref="button">アンマウント！</button><raw-html expr6 content="テスト"></raw-html></div>',
      [{
        'redundantAttribute': 'expr4',
        'selector': '[expr4]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.state.test;
          }
        }]
      }, {
        'redundantAttribute': 'expr5',
        'selector': '[expr5]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return scope.animationUnmount;
          }
        }]
      }, {
        'type': bindingTypes.TAG,
        'getComponent': getComponent,

        'evaluate': function(scope) {
          return 'raw-html';
        },

        'slots': [],

        'attributes': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'content',

          'evaluate': function() {
            return 'テスト';
          }
        }],

        'redundantAttribute': 'expr6',
        'selector': '[expr6]'
      }]
    );
  },

  'name': 'app'
};

export default app_riot;
