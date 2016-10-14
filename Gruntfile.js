
/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
            clean: ['dist/**/*.html', 'dist/css', 'dist/svg', 'dist/js',' dist/assets'],
            all: ['dist/']
    },
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! project - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> NEOPA Inc. \n' +
      '*/\n',
   jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        latedef: true,
        newcap: true,
        noarg: true,
        nonew: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      files: [
        'src/js/**/common.js',
        // '!src/js/**/extras/**'
      ],
    },
    // concat: {
    //   options: {
    //     banner: '<%= banner %>',
    //     stripBanners: true,
    //   },
    //   user: {
    //     files: {
    //       'dist/js/common.js': ['src/js/*.js'],
    //     }
    //   },
    //   // extras: {
    //   //   src: [
    //   //     'src/js/extras/*.js',
    //   //     ],
    //   //   dest: 'dist/js/extras.js',
    //   // }
    // },
    uglify: {
      options: {
        report: 'min',
        preserveComments: false,
        compress: {
          global_defs: {
            "DEBUG": false
          },
        },
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/js/',
          src: ['*.js'],
          dest: 'dist/js/min/',
        }],
        //
      }
    },
    sass: {
        dist: {
            files: {
                'dist/css/app.css' : 'src/scss/app.scss',
            }
        }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['css/*.css', 'images/svg/*.svg', 'images/common/favicon.ico', 'js/*.js', 'bower_components/*/dist/*', 'images/*', 'fonts/*'],
          dest: 'dist/',
        }]
      }
    },
    cssmin: {
      dist: {
        options: {
          noAdvanced: false
        },
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css', '!app-v.*'],
        dest: 'dist/css/',
        ext: '.min.css'
      }
    },
    assets_versioning: {
      options: {
        tag: 'date',
      },
      dist: {
          files: {
              'dist/css/app-v.css' : 'src/css/app.css',
              'dist/js/app-v.js' : 'src/js/app.js',
          }
      }
    },
    processhtml: {
      options: {
        process: true,
        strip:true,
        data: {
          ts: '<%= new Date().getTime() %>'
        }
      },
      pre: {
        options: {
          strip: false
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.html'],
          dest: 'tmphtml/',
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'tmphtml/',
          src: ['**/*.html', '!inc/**'],
          dest: 'dist/',
        }]
      },
      dev: {
        options: {
          strip: false,
          data: {
            ts: 'fixed'
          }
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.html', '!inc/**'],
          dest: 'target/',
        }]
      }
    },
    relativeRoot: {
      dev: {
        options: {
          root: 'target'
        },
        files: [{
          expand: true,
          cwd: '<%= relativeRoot.dev.options.root %>',
          src: ['**/*.html'],
          dest: 'target/'
        }]
      },
      dist: {
        options: {
          root: 'dist'
        },
        files: [{
          expand: true,
          cwd: '<%= relativeRoot.dist.options.root %>',
          src: ['**/*.html'],
          dest: 'dist/'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/images/',
        }]
      }
    },
    rsync: {
      options: {
        recursive: true,
        args: ["--verbose"],
        exclude: [".git*", "**/movie/**", "wordpress/**"],
        host: "the-concrete",
      },
      stage: {
        options: {
          src: "dist/js dist/images dist/css dist/bower_components dist/assets",
          dest: "/home/the-concrete/www/julian-web/wp-content/themes/julian-web",
          delete: true,
        }
      },
      prod: {
        options: {
          src: "dist/js dist/images dist/css dist/bower_components dist/assets",
          dest: "/home/the-concrete/www/julian-web/wp-content/themes/julian-web",
          delete: true,
        }
      },
      themes: {
        options: {
          src: "wp/wp-content/themes/julian-web/",
          exclude: "**/js/** **/images/** **/css/** **/assets/**",
          dest: "/home/the-concrete/www/julian-web/wp-content/themes/julian-web",
        }
      },
      themes_prod: {
        options: {
          src: "wp/wp-content/themes/julian-web/",
          exclude: "**/js/** **/images/** **/css/** **/assets/**",
          dest: "/home/the-concrete/www/julian-web/wp-content/themes/julian-web",
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      html:{
        files: ['src/**'],
        tasks: ['processhtml:dev', 'relativeRoot:dev'],
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-relative-root');
  grunt.loadNpmTasks('grunt-rsync');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-assets-versioning');

  // Default task.
  grunt.registerTask('default', ['clean']);
  grunt.registerTask("dev", ['processhtml:dev', 'relativeRoot:dev']);
  grunt.registerTask("dist", ['clean:clean', 'assets_versioning' , 'copy', 'uglify', 'processhtml:pre', 'processhtml:dist', 'relativeRoot:dist', 'newer:imagemin']);
  grunt.registerTask("deploy", ['dist', 'rsync:stage', 'rsync:themes']);
  grunt.registerTask("deploy:prod", ['dist', 'rsync:prod', 'rsync:themes_prod']);
};
