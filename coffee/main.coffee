# Easingの追加
jQuery.easing.quart = (x, t, b, c, d) ->
  -c * ((t = t / d - 1) * t * t * t - 1) + b


$ ->

  # アンカースクロール
  $("a[href*=#]").click ->
    if location.pathname.replace(/^\//, "") is @pathname.replace(/^\//, "") and
       location.hostname is @hostname
      $target = $(@hash)
      $target = $target.length and $target or $("[name=" + @hash.slice(1) + "]")
      if $target.length
        targetOffset = $target.offset().top
        $("html,body").animate
          scrollTop: targetOffset
          200
          "quart"
        false

  # IE用Fix
  if $("html").hasClass "lt-ie7"
    $ ".list-inline > li"
      .addClass "ie-child"
