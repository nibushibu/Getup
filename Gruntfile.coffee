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
    # sass:
    #   dev:
    #     files:
    #       "css/main.css": "scss/main.scss"
    #     options:
    #       sourcemap: true
    #       compass: true
    #   pro:
    #     files:
    #       "css/main.css": "scss/main.scss"
    #     options:
    #       sourcemap: false
    #       compass: true
    #       environment: "production"
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
      compress_target:
        options:
          mangle: false
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

  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-compass"
  # grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-webfont"
  grunt.loadNpmTasks "grunt-text-replace"
  grunt.loadNpmTasks "grunt-imageoptim"
  grunt.loadNpmTasks "grunt-autoprefixer"

  grunt.registerTask "default", ["watch"];
  grunt.registerTask "min", ["uglify", "compass:pro"]
  grunt.registerTask "icon", ["webfont", "replace"]