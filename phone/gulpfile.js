
 // 引入gulp
 var gulp = require("gulp");

 //引用sass插件
 var sass = require("gulp-sass");

 //压缩css
 var uglifycss = require("gulp-uglifycss");

 // 工具
 var gutil = require("gulp-util");

 // 自动前缀
 var autoprefix = require("gulp-autoprefixer");

 //同时执行多个任务
 var runSequence = require("run-sequence");

 //sass任务
 gulp.task("sass", function(){
 	return gulp.src("scss/**/*.scss")
 		.pipe(sass())
 		.on('error', function(err) {
 	        gutil.log('Sass Error!', err.message);
 	        this.end();
 	    })
 		// .pipe(autoprefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
 		// .pipe(uglifycss({
 	 //      "max-line-len": 1024
 	 //    }))
 		.pipe(gulp.dest("style/"));
 });

 //实时监听任务
 gulp.task("watch",function(){
 	gulp.watch("scss/**/*.scss", ["sass"]);
 });

 gulp.task("default",function(){
 	runSequence('sass',"watch")
 })

 