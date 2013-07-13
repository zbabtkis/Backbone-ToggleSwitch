var ToggleSwitch = (function() {
    var Model = Backbone.Model.extend({
        defaults: {
            value: true,
            enable: true
        },
        initialize: function(attributes, defaults) {
            _.extend(this, attributes);
            this.set(defaults);
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
            var defaults   = (options && options.defaults) ? options.defaults : {},
                attributes = (options && options.attributes) ? options.attributes : {};

            this.model = (options && options.model) ? options.model : new Model(attributes, defaults);
            this.options = options;

            this.listenTo(this.model, 'change:value', this.render);
            
            // Add to element registry.
            ToggleSwitch._elements.push(this);
                        
            return this;
        },
        render: function() {
            var isOn     = this.model.get('value') ? 'active' : '',
                enabled  = this.model.get('enable') ? '' : 'disabled',
                defaults = ToggleSwitch.configure(),
                theme    = (this.options && this.options.theme) ? this.options.theme : defaults.theme,
                animated = ((this.options && this.options.animated) || defaults.animated) ? 'animate' : '';
            
            // Build element html and styles.
            this.$el.removeClass()
                .addClass([theme, animated, isOn, enabled, this.className].join(' '))
                .html(isOn ? '<span class="value">' + defaults.onValue + '</span>' : '<span class="value">' + defaults.offValue + '</span>');
                
            this.model.get('enable') ? this.delegateEvents() : this.undelegateEvents();

            return this;
        },
        toggle: function() {
            this.model.toggle('value');
            
            return this;
        },
        enable: function(enable) {
            if(typeof enable === 'undefined') {
                this.model.set('enable', true);
            } else {
                this.model.set('enable', enable);
            }
        },
        disable: function() {
            this.enable(false);
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
    
    