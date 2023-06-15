var myApp_riot = {
  css: "my-app h1,[is=\"my-app\"] h1{ color: green; display: flex; } my-app .unmount-animation,[is=\"my-app\"] .unmount-animation{ opacity: 1; transition: opacity 1s; } my-app .unmount-animation.is-unmount,[is=\"my-app\"] .unmount-animation.is-unmount{ opacity: 0; }",
  exports: {
    state: {
      finishAnimation: false,
      test: 'Hello Riot!'
    },
    onMounted: function onMounted() {
      this.anime({
        targets: this.$('[data-ref="button"]'),
        translateX: 20,
        easing: 'easeInOutSine',
        duration: 1000,
        loop: true,
        direction: 'alternate'
      });
    },
    animationUnmount: function animationUnmount(e) {
      var _this = this;
      this.$('[data-ref="button"]').addEventListener('transitionend', function (e) {
        console.log('button transitionend');
        _this.unmount();
      });
      this.$('[data-ref="button"]').classList.add('is-unmount');
    }
  },
  template: function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<h1>Thie is Riot test.</h1><p expr0="expr0"> </p><p><button expr1="expr1" class="unmount-animation" data-ref="button">\n      my-appをアンマウント\n    </button></p><p><raw-html expr2="expr2" data-html="コンポーネントのテスト"></raw-html></p><h2>スロットの内容</h2><slot expr3="expr3"></slot>', [{
      redundantAttribute: 'expr0',
      selector: '[expr0]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: function evaluate(_scope) {
          return _scope.state.test;
        }
      }]
    }, {
      redundantAttribute: 'expr1',
      selector: '[expr1]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: function evaluate(_scope) {
          return _scope.animationUnmount;
        }
      }]
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: function evaluate(_scope) {
        return 'raw-html';
      },
      slots: [],
      attributes: [],
      redundantAttribute: 'expr2',
      selector: '[expr2]'
    }, {
      type: bindingTypes.SLOT,
      attributes: [],
      name: 'default',
      redundantAttribute: 'expr3',
      selector: '[expr3]'
    }]);
  },
  name: 'my-app'
};

export { myApp_riot as default };
//# sourceMappingURL=my-app.riot.js.map
