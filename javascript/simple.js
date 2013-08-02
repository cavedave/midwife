$(function(){
    
    HeaderView = Backbone.View.extend({    
        
        initialize: function() {
            _.bindAll(this, "render")
            this.header = $("#header-template").html();
            
        },        
        
        render: function() {
            $(this.el).html(this.header).fadeIn();            
            return this;
        }
    });
    
    
    
    FooterView = Backbone.View.extend({    
        
        initialize: function() {
            _.bindAll(this, "render")
            this.footer = $("#footer-template").html();            
        },        
        
        render: function() {
            $(this.el).html(this.footer).fadeIn();            
            return this;
        }
    });
    
    
    
    LoginView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "render", "login_press")
            this.login = $("#login-template").html();
        },
        
        events: {
            "click #login_button":  "login_press"
        },
        
        render: function() {
            $(this.el).html(this.login);
            return this;
        },
        
        login_press: function(e) {
            e.preventDefault();
            $("#login-container").fadeOut();
            var header = new HeaderView();
            $("#header").append(header.render().el);
            var footer = new FooterView();
            $("#footer").append(footer.render().el);
        }
        
    })
    
    
    
    
    var login = new LoginView();
    
    
    $("#main").append(login.render().el);
    
    
    
    
    
});