# Easingの追加
jQuery.easing.quart = (x, t, b, c, d) ->
  -c * ((t = t / d - 1) * t * t * t - 1) + b

# ブラウザ判定 https://w3g.jp/blog/tools/js_browser_sniffing
_ua = (->
  ltIE6: typeof window.addEventListener is "undefined" and typeof document.documentElement.style.maxHeight is "undefined"
  ltIE7: typeof window.addEventListener is "undefined" and typeof document.querySelectorAll is "undefined"
  ltIE8: typeof window.addEventListener is "undefined" and typeof document.getElementsByClassName is "undefined"
  ltIE9: document.uniqueID and typeof window.matchMedia is "undefined"
  gtIE10: document.uniqueID and window.matchMedia
  Trident: document.uniqueID
  Gecko: "MozAppearance" of document.documentElement.style
  Presto: window.opera
  Blink: window.chrome
  Webkit: typeof window.chrome is "undefined" and "WebkitAppearance" of document.documentElement.style
  Touch: typeof document.ontouchstart isnt "undefined"
  Mobile: typeof window.orientation isnt "undefined"
  ltAd4_4: typeof window.orientation isnt "undefined" and typeof (EventSource) is "undefined"
  Pointer: window.navigator.pointerEnabled
  MSPoniter: window.navigator.msPointerEnabled
)()

$ ->

  # Windows判定
  unless navigator.platform.indexOf("Win") is -1
    $ "html"
      .addClass "windows"

  # アンカースクロール
  $("a[href*=#]").click ->
    if location.pathname.replace(/^\//, "") is @pathname.replace(/^\//, "") and location.hostname is @hostname
      $target = $(@hash)
      $target = $target.length and $target or $("[name=" + @hash.slice(1) + "]")
      if $target.length
        targetOffset = $target.offset().top
        $("html,body").animate
          scrollTop: targetOffset
          200
          "quart"
        false

  # IE6用Fix
  if $("html").hasClass "lt-ie7"
    $ ".list-inline > li"
      .addClass "ie-child"
