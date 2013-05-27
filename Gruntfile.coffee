module.exports = (grunt) ->

  grunt.initConfig
    compass:
      dist:
        options:
          config: 'config.rb'
    coffee:
      compile:
        expand: true
        flatten: true
        src: ['coffee/*.coffee']
        dest: 'js/'
        ext: '.js'
        options:
          bare: true
    watch:
      compass:
        files: ['scss/*.scss']
        tasks: 'compass'
      coffee:
        files: ['coffee/*.coffee']
        tasks: 'coffee'

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  grunt.registerTask 'default', [
    'watch'
  ];