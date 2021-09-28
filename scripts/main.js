Blocks.distributor.buildType = () => extend(Router.RouterBuild, Blocks.distributor, {
  canControl(){
    return true;
  }
})