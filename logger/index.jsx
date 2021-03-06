//@targetengine 'cc.milligramme.sui-palette-debug'

var PUTS = function (args) {
  if (args instanceof Array) {
    args = args.join("\n");
  }
  if (TEXT_AREA) {
    TEXT_AREA.text += args + "\n"
  }
}

var create_logger = function () {
  logger = new Window('palette', "logger", u, {closeButton:true, minimizeButton:true, maximizeButton:false, resizeable:true, borderless:false});
  logger.orientation = 'column';
  logger.location = [100,100];
  logger.margins = 5;
  logger.spacing = 5;
  logger.alignChildren = ['fill', 'fill'];
  
  TEXT_AREA = logger.add('edittext', u, "", {multiline: true});
  TEXT_AREA.preferredSize = [240,320];
  
  var clear_btn = logger.add('button', u, "Clear", {name: "clear"});
  clear_btn.preferredSize = [240,23];
  clear_btn.minimumSize.height = 23;
  clear_btn.maximumSize.height = 46;
  clear_btn.onClick = function () {
    TEXT_AREA.text = "";
  }
  
  logger.onShow =
  logger.onResizing =
  logger.onResize = function() {
    this.layout.resize();
  }
  
  return logger
}
