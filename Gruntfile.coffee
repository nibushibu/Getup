module.exports = (grunt) ->

  grunt.initConfig
    compass:
      dev:
        options:
          config: "config.rb"
      pro:
        options:
          config: "config.rb"
          environment: "production"
    coffee:
      compile:
        expand: true
        flatten: true
        src: ["coffee/*.coffee"]
        dest: "js/"
        ext: ".js"
        options:
          bare: true
    autoprefixer:
      single_file:
        src: "css-dev/main.css"
        dest: "css/main.css"
    uglify:
      options:
        mangle: false
      compress_target:
        files:
          "js/main.js": "js/main.js"
    watch:
      compass:
        files: ["scss/*.scss"]
        tasks: "compass:dev"
      coffee:
        files: ["coffee/*.coffee"]
        tasks: "coffee"
      autoprefixer:
        files: ["css-dev/main.css"]
        tasks: "autoprefixer"
      # js:
      #   files: ["js/*.js"]
      #   tasks: "uglify"
    webfont:
      dist:
        src: "font/svg/*.svg"
        dest: "font/"
        destCss: "scss/"
        options:
          font: "icon"
          types: ["woff","ttf","eot"]
          stylesheet: "scss"
          htmlDemo: false
          syntax: "bem"
          relativeFontPath: "../font/"
    replace:
      dist:
        src: ["scss/_icon.scss"]
        overwrite: true
        replacements: [
          from: ".icon_"
          to: ".icon--"
        ]
    imageoptim:
      src: ["img"]
      options:
        jpegMini: false
        imageAlpha: true
        quitAfter: true
    copy:
      files:
        expand: true
        flatten: true
        src: [
          "bower_components/jquery/jquery.min.js"
          "bower_components/modernizr/modernizr.js"
        ]
        dest: "js/vendor/"
        filter: "isFile"
    concat:
      dist:
        src: [
          "js/plugins-base.js"
          "bower_components/jquery.transit/jquery.transit.js"
        ]
        dest: "js/plugins.js"

  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-compass"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-webfont"
  grunt.loadNpmTasks "grunt-text-replace"
  grunt.loadNpmTasks "grunt-imageoptim"
  grunt.loadNpmTasks "grunt-autoprefixer"
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-contrib-copy"

  grunt.registerTask "default", ["watch"];
  grunt.registerTask "min", ["uglify", "compass:pro", "autoprefixer"]
  grunt.registerTask "icon", ["webfont", "replace"]
  grunt.registerTask "init", ["copy", "concat"]