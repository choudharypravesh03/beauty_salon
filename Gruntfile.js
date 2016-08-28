module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        clean: ["./dist"],
        mkdir: {
            dist: {
                options: {
                    create: ['./dist']
                }
            }
        },
        exec: {
            makeDist: {
                cmd: 'rm -rf dist && mkdir dist'
            },
            bower: {
                cmd: 'bower install'
            }
        },

        // configure uglify to minify js files -------------------------------------
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/script/script.js': 'public/script/script.js',
                    'dist/vendors/js/imagesloaded.js': 'public/vendors/js/imagesloaded.js',
                    'dist/vendors/js/jquery.js': 'public/vendors/js/jquery.js'
                }
            }
        },

        // configure cssmin to minify css files ------------------------------------
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/style/style.min.css': 'public/style/*.css'
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public/images',
                    src: ['**/*.{png,jpg,gif,ico,svg,GIF}'],
                    dest: 'dist/images'
                }]
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        cwd: 'public/fonts',  // set working folder / root to copy
                        src: '**/*',           // copy all files and subfolders
                        dest: 'dist/fonts',    // destination folder
                        expand: true           // required when using cwd
                    },
                    {
                        cwd: 'public/vendors',  // set working folder / root to copy
                        src: '**/*',           // copy all files and subfolders
                        dest: 'dist/vendors',    // destination folder
                        expand: true           // required when using cwd
                    },
                    {
                        cwd: 'views',  // set working folder / root to copy
                        src: '**/*',           // copy all files and subfolders
                        dest: 'dist/views',    // destination folder
                        expand: true           // required when using cwd
                    }
                ]
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-develop');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-usemin');


    /**
     * Run end to end tests for static compilation
     */
    grunt.registerTask('dist', [
        'clean',
        'mkdir:dist',
        'copy:dist',
        'cssmin',
        'imagemin',
        'uglify'

    ]);

}