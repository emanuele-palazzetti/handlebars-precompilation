=========================
Handlebars precompilation
=========================

Precompiled Handlebars_ templates!

.. _Handlebars: http://handlebarsjs.com

Notes
-----

This project is a simple demo on how to use precompiled templates with plain Javascript. My use case is to develop a
Javascript plugin with a perfect *template separation*. I **really hate** HTML code inside Javascript logic so,
thanks to Handlebars_ runtime, it is possible to have our template (and partials) into separated files.

Usage
-----

Install all ``npm`` and ``bower`` dependencies::

    $ npm install && bower install

Simply put your templates inside ``app/templates`` folder as *.hbs* file. Then use this template inside your Javascript
project:

.. code-block:: javascript

    var html = App.Templates.news(context);

``context`` is a Javascript object for the context (ex: {title: 'Foo', body: 'bar}) while ``news`` is the name of your
template file.

Conclusion
----------

It's really simple! :)
If you think that it's not a good idea to have Handlebars in your dependencies, probably you are not using it in your
project so forget everything I said. If you think it's too expensive this dependency, remember that you will use **only**
Handlebars runtime (and not the whole template engine) because template compilation is demanded to Grunt in your
development environment. The Handlebars runtime (min+gzip) is approximately 1k.

Credits
-------

For project template I've used Yeoman(yo_) so: "Thanks to all Yeoman developer!"

.. _yo: http://yeoman.io/
