/* @ngInject */
module.exports = function HelloCtrl($http, FlickrService) {
    'use strict';
    var vm = this;
    vm.displayText = 'Flickr Photos';
    vm.tags = 'forest';

    vm.search = function () {
        FlickrService.get({ tags: vm.tags }, function (resource) {
            vm.photos = resource.items;
        });
    };

    vm.search();
};
