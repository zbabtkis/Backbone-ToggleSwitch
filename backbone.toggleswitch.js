var ToggleSwitch = (function() {
    var Model = Backbone.Model.extend({
        defaults: {
            value: true
        },
        toggle: function(attr) {
            this.set(attr, !this.get(attr));
        }
    });
    
    var View = Backbone.View.extend({
        tagName: 'div',
        className: 'toggle-switch',
        defaults: {},
        events: {
            'click': 'toggle'
        },
        initialize: function(options) {
            this.model = new Model(this.defaults);
            this.listenTo(this.model, 'change:value', this.render);
            
            // Add to element registry.
            ToggleSwitch._elements.push(this);
            
            this.options = options;
                        
            return this;
        },
        render: function() {
            var isOn     = this.model.get('value') ? 'active' : '',
                defaults = ToggleSwitch.configure(),
                theme    = (this.options && this.options.theme) ? this.options.theme : defaults.theme,
                animated = ((this.options && this.options.animated) || defaults.animated) ? 'animate' : '';
            
            // Build element html and styles.
            this.$el.removeClass()
                .addClass([theme, animated, isOn, this.className].join(' '))
                .html(isOn ? '<span class="value">' + defaults.onValue + '</span>' : '<span class="value">' + defaults.offValue + '</span>');
                
            return this;
        },
        toggle: function() {
            this.model.toggle('value');
            
            return this;
        }
    });
    
    return View;
}());

// Holds elements for rerendering on configure.
ToggleSwitch._elements = [];

// Default options.
ToggleSwitch._options = {
    theme: 'theme-green',
    animated: false,
    onValue: 'On',
    offValue: 'Off'
}

// Allows for configuring widget options globally and getting current options.
ToggleSwitch.configure = function(configs) {
    if(configs) {
        _.each(configs, function(val, key) {
            ToggleSwitch._options[key] = val;
        });
        _.each(ToggleSwitch._elements, function(element) {
            element.render();
        });
    }
    
    return ToggleSwitch._options;
}
    
    