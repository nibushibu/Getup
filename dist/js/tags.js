var appTag_tag = {
  'css': `app-tag :scope,[is="app-tag"] :scope{ app-tag h1,[is="app-tag"] h1{
        color: orange;
        display: flex;
      } app-tag .unmount-animation,[is="app-tag"] .unmount-animation{ app-tag opacity: 1;
        transition: opacity 1s;

        &.is-unmount,[is="app-tag"] opacity: 1;
        transition: opacity 1s;

        &.is-unmount{
          opacity: 0;
        }
      }
    }`,

  'exports': {
    state: {
      finishAnimation: false,
      test: 'Hello Riot!'
    },

    onMounted() {
      this.state.tl = anime.timeline({
        duration: 500
      });
      this.state.tl.add({
        targets: tag.refs.button,
        opacity: 0,
        duration: 1
      })
      .add({
        targets: tag.refs.button,
        opacity: 1,
        duration: 1000
      });
    },

    animationUnmount(){
      this.$('button').addEventListener('transitionend', function(e) {
        console.log('きえた');
        // this.unmount()
      });
      tag.$('button').classList.add('is-unmount');
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<div><h1>Thie is Riot test.</h1><button expr2 class="unmount-animation" ref="button">アンマウント！</button><raw-html expr3 content></raw-html></div>',
      [{
        'redundantAttribute': 'expr2',
        'selector': '[expr2]',

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
            return true;
          }
        }],

        'redundantAttribute': 'expr3',
        'selector': '[expr3]'
      }]
    );
  },

  'name': 'app-tag'
};

export default appTag_tag;
