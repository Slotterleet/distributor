// Distributor
Blocks.distributor.buildType = () => extend(Router.RouterBuild, Blocks.distributor, {
  canControl(){
    return true;
  }
})

// UI
Events.on(EventType.ClientLoadEvent, e => {
  Vars.ui.settings.addCategory("Distributor", "distributor", t => {
    t.checkPref("distributor-language", false)
  })
})

// Distributor Language
if (Core.settings.getBool("distributor-language")) {
  Core.bundle.debug("distributor");
}

