const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

var buildSrc = "build/keystone";
var src = "keystone/src";

// clean the contents of the distribution directory
gulp.task('clean', function() {
    return del(buildSrc + '/**/*');
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['keystone/src/**/*', 'keystone/index.html', 'keystone/resources/css/*.css', '!keystone/src/**/*.ts'], {
            base: 'keystone'
        })
        .pipe(gulp.dest(buildSrc))
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
    return gulp.src([
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/router.dev.js',
            'node_modules/node-uuid/uuid.js',
            'node_modules/immutable/dist/immutable.js',
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js'
        ])
        .pipe(gulp.dest(buildSrc + '/lib'))
});

// linting
gulp.task('tslint', function() {
    return gulp.src('keystone/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});


// TypeScript compile
gulp.task('compile', ['clean'], function() {
    return gulp
        .src(tscConfig.files)
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(buildSrc + '/js'));
});

// Run browsersync for development
gulp.task('serve', ['build'], function() {
    browserSync({
        server: {
            baseDir: buildSrc
        }
    });

    gulp.watch([src + '/**/*', 'keystone/index.html', 'keystone/resources/css/styles.css'], ['buildAndReload']);
});

gulp.task('build', ['tslint', 'compile', 'copy:libs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);
