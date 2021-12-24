
module.export={
  chainWebpack: config=>{
    config.resolve.alias
      .set('@',resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views',resolve('src/views'))
  }
}