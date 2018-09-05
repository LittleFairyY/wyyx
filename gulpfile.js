var gulp=require("gulp");
var minifyCss=require("gulp-minify-css");
var uglifyJs=require("gulp-uglify");
var connect=require("gulp-connect");
var sass=require("gulp-sass");
var babel=require("gulp-babel");
gulp.task("html",function(){
  //stream 流 app/**/*.html 所有app下的html文件  src() 读取    pipe() 下一步   dest() 存
  gulp.src("app/**/*.html").pipe(gulp.dest("dist")).pipe(connect.reload())
})
gulp.task("css",function(){
  gulp.src("app/css/**/*.css").pipe(minifyCss()).pipe(gulp.dest("dist/css")).pipe(connect.reload())
})
gulp.task("js",function(){
  gulp.src("app/js/**/*.js").pipe(babel({presets:['@babel/env']})).pipe(uglifyJs()).pipe(gulp.dest("dist/js")).pipe(connect.reload());
})
gulp.task("watch",function(){
  gulp.watch('./app/css/*.css',["css"]);
  gulp.watch('./app/js/*.js',["js"]);
  gulp.watch('./app/**/*.html',["html"]);
  gulp.watch("./app/sass/**/*",["sass"]);
})
gulp.task("img",function(){
  //位置迁移
  gulp.src("app/img/**/*").pipe(gulp.dest("dist/img"))
})
gulp.task("sass",function(){
  //将scss文件编译成css,
  gulp.src("app/sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
gulp.task("server",function(){
  //开启服务
  connect.server({
    livereload:true,
    port:2033,
    root:"dist"
  })
})

gulp.task("default",["server","css","js","html","watch","img","sass"])

