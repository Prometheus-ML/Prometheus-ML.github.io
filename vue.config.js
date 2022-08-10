const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "대학생 인공지능 동아리 프로메테우스";
            args[0].description = "AI for future";
            args[0].thumbnail = "thumb.png";
            return args;
        })
  },
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: 'docs'
})
