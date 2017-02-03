//@targetengine 'cc.milligramme.sui-palette-debug'

var create_main = function () {
  var w = new Window('window', "sui-palette-debug-test", u, {closeButton:true, minimizeButton:true, maximizeButton:false, resizeable:false, borderless:false});
  w.orientation = 'column';
  w.margins = 5;
  w.spacing = 5;
  w.alignChildren = ['fill', 'fill'];
  
  var button_bounds = [0, 0, 270, 46];
  var func1_btn  = w.add('button', button_bounds, "Func1 String/Number", {name: "func1"});
  var func2_btn  = w.add('button', button_bounds, "Func2: Array", {name: "func2"});
  var func3_btn  = w.add('button', button_bounds, "Func3: Hash", {name: "func3"});

  func1_btn.onClick = function () {
    var i = 100;
    while (i--) {
      PUTS(i);
    };
  }

  func2_btn.onClick = function () {
    var i = 10;
    var ary = [];
    while (i--) {
      ary.push(Math.random())
    };
    PUTS(ary);
  }

  func3_btn.onClick = function () {
    PUTS(app.properties.toSource());
  }
  return w
}

