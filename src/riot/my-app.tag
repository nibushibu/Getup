<my-app>
  <div>
    <h1>Thie is Riot test.</h1>
    <p>{ state.test }</p>
    <button class="unmount-animation" onclick="{ animationUnmount }" ref="button">アンマウント！</button>
    <raw-html content="テスト"></raw-html>
  </div>

  <style>
    h1 {
      color: green;
      display: flex;
    }

    .unmount-animation {
      opacity: 1;
      transition: opacity 1s;

      &.is-unmount {
        opacity: 0;
      }
    }

  </style>
  <script>
    import anime from 'animejs';
    const tag = this

    tag.state = {
      finishAnimation: false,
      test: 'Hello Riot!'
    }

    tag.on('mount', function(){
      anime({
        targets: tag.refs.button,
        translateX: 20,
        easing: 'easeInOutSine',
        duration: 1000,
        loop: true,
        direction: 'alternate'
      })
    })

    function animationUnmount(e){
      tag.refs.button.addEventListener('transitionend', function(e) {
        console.log('消えました')
      })
      tag.refs.button.classList.add('is-unmount')
    }
  </script>
</my-app>