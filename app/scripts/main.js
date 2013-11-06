if (typeof jQuery === "undefined") { throw new Error("This project requires jQuery") }

;(function($, App) { "use strict";

    // Build your template with automatical injection of Handlebar pre-compiled templates
    var _nodeHtml = $('.js-marketing');

    var _html = App.Templates.news({title: 'Happy news!', body: 'We are writing this section using a template engine with context!'})
    _nodeHtml.html(_html);
})(jQuery, App);
