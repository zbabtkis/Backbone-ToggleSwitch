Backbone-ToggleSwitch
=====================

Backbone ToggleSwitch is the simple MVC widget you've been looking for...

You just need a toggle widget right? Sure, it wouldn't take too teribly long to implement this your self, but with Backbone ToggleWidget you can save your valuable time and in seconds have a beautiful Backbone based View and Model to support your sweet new web app!

Installation
-----------
To get ToggleSwitch up and running, make sure you have the requrements installed and attached to your document.

Include backbone.toggleswitch.css at the top of your document and backbone.toggleswitch.js below the dependencies.

Requirements
-----------
* Backbone.js
* Underscore.js
* jQuery

You can also install with bower!

```bower install --save backbone-toggleswitch```

Basic Use
--------

```javascript
var widget = new ToggleSwitch();

widget.$el.appendTo('#example-1');
```

API
---
**Toggle**

To change the value of the switch programatically, use the toggle method.

```html
<button class='btn'>Toggle</button>
```

```javascript
$('.btn').click(function() {
    widget.toggle()
});
```

**Get Value**

You can of course get the current value of the switch by accessing the value attribute of the switch model ( true | false ).

```javascript
$('.btn').click(function() {
    var value = widget.model.get('value');
                        
    alert(value);
});
```

**Detect Change**

If you need to subscribe to 'change' events for the switch, add an event listener to the widget model.

```javascript
widget.model.on('change', function() { 
    alert("changed to: " + this.get('value')); 
});
```

For full documentation visit http://zacharybabtkis.com/demos/toggleSwitch/.
