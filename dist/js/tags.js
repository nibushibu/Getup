var rawHtml_tag = {
  'css': null,
  'exports': null,

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<span expr6><!----></span>', [{
      'redundantAttribute': 'expr6',
      'selector': '[expr6]',

      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,

        'evaluate': function(scope) {
          return scope.props.content;
        }
      }]
    }]);
  },

  'name': 'raw-html'
};

export default rawHtml_tag;
