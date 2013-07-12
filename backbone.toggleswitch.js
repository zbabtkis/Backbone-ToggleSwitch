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
        initialize: function() {
            this.model = new Model(this.defaults);
            this.listenTo(this.model, 'change:value', this.render);
                        
            return this;
        },
        render: function() {
            var isOn = this.model.get('value');
            
            this.$el.html(isOn ? '<span class="value">On</span>' : '<span class="value">Off</span>');
            this.$el.toggleClass('active', isOn);
            
            return this;
        },
        toggle: function() {
            this.model.toggle('value');
            
            return this;
        }
    });
    
    return View;
}());
    

if(typeof define !== 'undefined') {
    define(['jquery', 'underscore', 'backbone'], ToggleSwitch);
}