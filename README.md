Backbone-ToggleSwitch
=====================

Backbone ToggleSwitch is the simple MVC widget you've been looking for...

You just need a toggle widget right? Sure, it wouldn't take too teribly long to implement this bad boy your self, but with ToggleWidget you can save your valuable time and inject a beautiful Backbone switch into your web app in seconds!

Installation
-----------
To get ToggleSwitch up and running, make sure you have the requrements installed and attached to your document.

Include backbone.toggleswitch.css at the top of your document and backbone.toggleswitch.js below the dependencies.

Requirements
-----------
* Backbone.js
* Underscore.js
* jQuery

Basic Use
--------

```javascript
var widget = new ToggleSwitch();

widget.$el.appendTo('#example-1');
```

**Theme**
```javascript
var widget = new ToggleSwitch({theme: 'theme-yellow'});
```
Options:
* theme-red
* theme-green
* theme-blue
* theme-yellow

**Animation**
```javascript
var widget = new ToggleSwitch({animated: true});
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

**Global Configuration**

You can set global configuration options such as theme to using ToggleSwitch.config. Each of these options can be set individually as seen up above with the theme and animations.

```javascript
ToggleSwitch.configure({
    theme: 'theme-green', // Theme name. Defaults to theme-green.
    animated: false,      // Uses CSS3 animations on toggle. Defaults to false.
    onValue: 'On',        // Text for on value. Defaults to on.
    offValue: 'Off'       // Text for off value. Defaults to off.
});
```
*Fun fact* whenever you call the configure method, all switches will update automagically!

For full documentation visit http://zacharybabtkis.com/demos/toggleSwitch/.
