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

            $.ajax({
                type: 'get',
                url: '/index.php/Assets/asset',
                dataType: 'JSON'
            }).done(function(data) {
                console.log(data)
            });



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
            console.log(e)
            var target = '.' + $(e.currentTarget).attr("data-class");
            console.log(target)
            //removes selected class from currently selected tab adds selected class to new selected tab
            $('.selected').removeClass('selected');
            $(e.currentTarget).addClass('selected');

            console.log(target);
            this.scroll(e, target);
        },
        codepen: function(){
            window.open('http://codepen.io/jell1/');
        },
        events: {
            'click .fa-chevron-down': 'scroll',
            'click .nav li': 'selectTab',
            'click .codepen': 'codepen'

        }
    });

    //usually returning the object you created...
    return portfolioView;
});
