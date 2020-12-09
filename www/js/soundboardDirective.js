(function(angular) {
    "use strict";

    angular.module("ZeldaSoundboardDirective", ["SoundService"])
        .directive("zeldaSoundboard", [function() {
            return {
                templateUrl: "zelda-soundboard.html",
                restrict: "E",
                controller: "ZeldaSoundboardDirectiveController",
                controllerAs: "sbCtrl"
            };
        }])
        .controller("ZeldaSoundboardDirectiveController", ["soundService", function (soundService) {
            var ctrl = this;
            ctrl.sounds = soundService.sounds;

        }]);

}(window.angular));