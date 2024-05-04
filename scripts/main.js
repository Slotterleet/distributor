// Distributor
Events.on(ContentInitEvent, e => {
  Vars.content.blocks().each(b => {
    if (!(b instanceof Router)) return;
    b.buildType = () => extend(Router.RouterBuild, b, {
      canControl(){
        return true;
      }
    })
  })
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

