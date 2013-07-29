module.exports = (grunt) ->

  grunt.initConfig
    compass:
      dev:
        options:
          config: 'config.rb'
      pro:
        options:
          config: 'config.rb'
          environment: 'production'
    coffee:
      compile:
        expand: true
        flatten: true
        src: ['coffee/*.coffee']
        dest: 'js/'
        ext: '.js'
        options:
          bare: true
    uglify:
      compress_target:
        options:
          mangle: false
        files:{
          'js/main.js': 'js/main.js'
        }
    watch:
      compass:
        files: ['scss/*.scss']
        tasks: 'compass:dev'
      coffee:
        files: ['coffee/*.coffee']
        tasks: 'coffee'
      # js:
      #   files: ['js/*.js']
      #   tasks: 'uglify'
    webfont:
      dist:
        src: 'font/svg/*.svg'
        dest: 'font/'
        destCss: 'scss/'
        options:
          font: 'icon'
          types: ['woff','ttf','eot']
          stylesheet: 'scss'
          htmlDemo: false
          syntax: 'bootstrap'
          relativeFontPath: 'font/'

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-webfont'

  grunt.registerTask 'default', ['watch'];
  grunt.registerTask "min", ['uglify', 'compass:pro']
