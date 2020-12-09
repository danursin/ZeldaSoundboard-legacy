(function (angular) {
    "use strict";

    angular.module("SoundService", [])
        .service("soundService", [function () {
            var self = this;

            self.sounds = [
                {
                    img: "img/attackPic.png",
                    play: function (playCount) {
                        var number = Math.floor(5 * Math.random());
                        var src = "sounds/attack" + number + ".mp3";
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/eponaPic.png",
                    play: function (playCount) {
                        var src = "sounds/eponaSound.mp3";
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/ganonLaugh.png",
                    play: function (playCount) {
                        var src = "sounds/ganondorfLaugh.mp3";
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/goronPic.png",
                    play: function (playCount) {
                        var src;
                        if (playCount % 2 === 0) {
                            src = "sounds/goronUp.mp3";
                        } else {
                            src = "sounds/goronDown.mp3";
                        }
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/heartContainer.png",
                    play: function (playCount) {
                        var src = "sounds/heartContainer.mp3";
                        var audio = new Audio(src);
                        audio.addEventListener("ended", function() {
                            var subsequent = new Audio("sounds/getSmallHeart.mp3");
                            var plays = 0;
                            subsequent.addEventListener("ended", function () {
                                if (plays < playCount) {
                                    subsequent.play();
                                }
                                plays++;
                            });
                            subsequent.play();
                        });
                        audio.play();
                    }
                },
                {
                    img: "img/linkDying.png",
                    play: function (playCount) {
                        var src = "sounds/linkDie.mp3";
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/navi.png",
                    play: function (playCount) {
                        var src;
                        switch (playCount % 5) {
                            case 0:
                            case 2:
                                src = "sounds/heyNavi.mp3";
                                break;
                            case 1:
                            case 3:
                                src = "sounds/helloNavi.mp3";
                                break;
                            case 4:
                                src = "sounds/listenNavi.mp3";
                                break;
                            default:
                                throw "error message";
                        }
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/secretSmall.gif",
                    play: function (playCount) {
                        var src = "sounds/secretOld.mp3";
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/skullKidPic.png",
                    play: function (playCount) {
                        var src = "sounds/skullKidLaugh.mp3";
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/smallHeart.png",
                    play: function (playCount) {
                        var src = "sounds/getSmallHeart.mp3";
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/treasureChest.png",
                    play: function (playCount) {
                        var src = "sounds/box-open.wav";
                        var audio = new Audio(src);
                        audio.play();
                    }
                },
                {
                    img: "img/whoawhoa.png",
                    play: function (playCount) {
                        var src = "sounds/whoawhoa.mp3";
                        var audio = new Audio(src);
                        audio.play();
                    }
                }
            ];

            return self;
        }]);

}(window.angular));