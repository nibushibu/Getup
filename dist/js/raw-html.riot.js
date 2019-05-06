var rawHtml_riot = {
  'css': null,
  'exports': null,

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<span expr3><!----></span>', [{
      'redundantAttribute': 'expr3',
      'selector': '[expr3]',

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

export default rawHtml_riot;
