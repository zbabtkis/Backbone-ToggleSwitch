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
            
            ToggleSwitch._elements.push(this);
            
            this.options = options;
                        
            return this;
        },
        render: function() {
            var isOn     = this.model.get('value') ? 'active' : '',
                theme    = (this.options && this.options.theme) ? this.options.theme : ToggleSwitch.configure().theme,
                animated = ((this.options && this.options.animated) || ToggleSwitch.configure().animated) ? 'animate' : '';
            
            this.$el.removeClass()
                .addClass([theme, animated, isOn, this.className].join(' '))
                .html(isOn ? '<span class="value">On</span>' : '<span class="value">Off</span>');
                
            return this;
        },
        toggle: function() {
            this.model.toggle('value');
            
            return this;
        }
    });
    
    return View;
}());

ToggleSwitch._elements = [];

ToggleSwitch._options = {
    theme: 'theme-green',
    animated: false
}

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
    
    