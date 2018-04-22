/**
 * Project:	Star Admin Bootstrap Template [Free Version]
 * Original repo: https://github.com/BootstrapDash/StarAdmin-Free-Bootstrap-Admin-Template
 */

window.$ = require('jquery')
import 'popper.js'
import 'bootstrap';

window.$(function() {
    window.$('[data-toggle="offcanvas"]').on("click", function() {
        window.$('.sidebar-offcanvas').toggleClass('active')
    });
    
    var sidebar = window.$('.sidebar');
    
    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required
    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    window.$('.nav li a', sidebar).each(function() {
        var $this = window.$(this);
        if (current === "") {
            //for root url
            if ($this.attr('href').indexOf("index.html") !== -1) {
                window.$(this).parents('.nav-item').last().addClass('active');
                if (window.$(this).parents('.sub-menu').length) {
                    window.$(this).closest('.collapse').addClass('show');
                    window.$(this).addClass('active');
                }
            }
        } else {
            //for other url
            if ($this.attr('href').indexOf(current) !== -1) {
                window.$(this).parents('.nav-item').last().addClass('active');
                if (window.$(this).parents('.sub-menu').length) {
                    window.$(this).closest('.collapse').addClass('show');
                    window.$(this).addClass('active');
                }
            }
        }
    })
    
    //Close other submenu in sidebar on opening any
    
    sidebar.on('show.bs.collapse', '.collapse', function() {
        sidebar.find('.collapse.show').collapse('hide');
    });
    //Change sidebar and content-wrapper height
    applyStyles();
    
    function applyStyles() {
        //Applying perfect scrollbar
        if (window.$('.scroll-container').length) {
            const ScrollContainer = new PerfectScrollbar('.scroll-container');
        }
    }
    
    //checkbox and radios
    window.$(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
    
    window.$(".purchace-popup .popup-dismiss").on("click",function(){
        window.$(".purchace-popup").slideToggle();
    });
});

// import './off-canvas'
// import './misc'