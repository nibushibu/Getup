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
        riot.unmount('app');
      });
      this.$('[ref="button"]').classList.add('is-unmount');
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div><h1>Thie is Riot test.</h1><p expr13><!----></p><button expr14 class="unmount-animation" ref="button">アンマウント！</button><raw-html expr15 content="テスト"></raw-html></div>',
      [{
        'redundantAttribute': 'expr13',
        'selector': '[expr13]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.state.test;
          }
        }]
      }, {
        'redundantAttribute': 'expr14',
        'selector': '[expr14]',

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

        'redundantAttribute': 'expr15',
        'selector': '[expr15]'
      }]
    );
  },

  'name': 'app'
};

export default app_riot;
