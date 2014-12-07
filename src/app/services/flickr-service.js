/* @ngInject */
module.exports = function FlickService($resource) {
    'use strict';

    return $resource('https://api.flickr.com/services/feeds/photos_public.gne',
        {
            format: 'json',
            jsoncallback: 'JSON_CALLBACK'
        },
        {
            'get': { method: 'JSONP' }
        }
    );

};
