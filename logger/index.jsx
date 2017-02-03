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
  logger = new Window('palette', "logger", u, {closeButton:true, minimizeButton:true, maximizeButton:false, resizeable:false, borderless:false});
  logger.orientation = 'column';
  logger.margins = 5;
  logger.spacing = 5;
  logger.alignChildren = ['fill', 'fill'];
  
  TEXT_AREA = logger.add('edittext', u, "", {multiline: true});
  TEXT_AREA.preferredSize = [240,320];
  
  var clear_btn = logger.add('button', u, "Clear", {name: "clear"});
  clear_btn.onClick = function () {
    TEXT_AREA.text = "";
  }
  return logger
}
