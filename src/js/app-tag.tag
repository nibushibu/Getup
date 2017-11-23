<app-tag>
  <div>
    <h1>Thie is Riot test.</h1>
    <p>{ test }</p>
  </div>

  <style type="myCssParser">
    :scope {

      h1 {
        color: red;
        display: flex;
      }
    }
  </style>

  <script type="es6">
    const tag = this

    tag.test = 'Hello Riot'
  </script>
</app-tag>