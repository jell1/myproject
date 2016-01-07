define(['jquery',
    'underscore',
    'backbone',
    'BaseView',
    'text!templates/portfolio.html'
], function($, _, Backbone, BaseView, template) {
    var portfolioView = BaseView.extend({
        initialize: function(options) {
            this.render();
        },
        render: function() {
            var preparedTemplate = _.template(template);

            this.$el.html(preparedTemplate({
                test: 'test'
            }));
        },
        loadDetails: function() {
            PM.Modal.show('views/detailsView', {
                title: 'Registry',
                headerColor: '#4F7599',
                width: '900px'
            })
        },
        scroll: function(e, target) {
            console.log(target)
            //finds classes position and navigates there
            if (target) {
                var divPosition = $(target).offset();
            } else {
                var divPosition = $('.projects').offset();
            };

            $('html, body').animate({
                scrollTop: divPosition.top
            }, "slow");
        },
        selectTab: function(e) {
            //gets currenttargets clas
            var myClass = $(e.currentTarget).attr("class");
            console.log(myClass)

            if (myClass == 'projects-tab') {
                var target = '.projects';
            } else if (myClass == 'journey-tab'){
                var target = '.journey';
            } else if (myClass == 'contact-tab'){
                var target = '.contact';
            } else if(myClass == 'home-tab'){
                var target = '.home';
            }
            //removes selected class from currently selected tab adds selected class to new selected tab
            $('.selected').removeClass('selected');
            $(e.currentTarget).addClass('selected');

            console.log(target);
            this.scroll(e, target);
        },
        events: {
            'click .fa-chevron-down': 'scroll',
            'click li': 'selectTab',

        }
    });

    //usually returning the object you created...
    return portfolioView;
});
