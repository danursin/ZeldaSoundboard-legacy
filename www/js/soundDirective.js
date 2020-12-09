(function (angular) {
    "use strict";

    angular.module("ZeldaSoundDirective", [])
        .directive("zeldaSound", [
            function () {
                return {
                    templateUrl: "zelda-sound.html",
                    restrict: "E",
                    controller: "ZeldaSoundDirectiveController",
                    controllerAs: "soundCtrl",
                    scope: {
                        sound: "="
                    }
                };
            }
        ])
        .controller("ZeldaSoundDirectiveController", [function () {
            var ctrl = this,
                playCount = 0;
            ctrl.playSound = function (sound) {
                sound.play(playCount++);
            };
        }]);

}(window.angular));