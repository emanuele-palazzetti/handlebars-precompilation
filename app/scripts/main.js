if (typeof jQuery === "undefined") { throw new Error("This project requires jQuery") }

;(function($, App) { "use strict";

    // Build your template with automatical injection of Handlebar pre-compiled templates
    var _nodeHtml = $('.js-marketing'),
        firstNews = new App.Model.News('Happy news!', 'We are writing this section using a template engine with context'),
        secondNews = new App.Model.News('Some old news', 'Here you can store old information'),
        news = [firstNews, secondNews];

    var _html = App.Templates.news({news: news});
    _nodeHtml.html(_html);
})(jQuery, App);
