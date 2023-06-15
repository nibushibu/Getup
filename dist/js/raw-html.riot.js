var rawHtml_riot = {
  css: null,
  exports: {
    setContent: function setContent() {
      this.$('[data-ref="content"]').innerHTML = String(this.props.dataHtml);
    },
    onMounted: function onMounted() {
      this.setContent();
    },
    onUpdated: function onUpdated() {
      this.setContent();
    }
  },
  template: function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<span data-ref="content"></span>', []);
  },
  name: 'raw-html'
};

export { rawHtml_riot as default };
