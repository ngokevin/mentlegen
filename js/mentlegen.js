function GentlemanCtrl($scope) {
    var timeout1;
    var timeout2;

    $scope.$watch('mother', function(newVal, oldVal) {
        if (newVal && $scope.father) {
            motherfather();
        } else if (!newVal) {
            clear();
        }
    });

    $scope.$watch('father', function(newVal, oldVal) {
        if (newVal && $scope.mother) {
            motherfather();
        } else if (!newVal) {
            clear();
        }
    });

    function motherfather() {
        $('audio')[0].play();
        timeout1 = setInterval(function() {
            $('h2, img, input, label').toggleClass('show');
        }, 550);
        timeout2 = setInterval(function() {
            $('html').toggleClass('flash');
            $('i').toggleClass('show');
        }, 400);
    }

    function clear() {
        $('audio')[0].pause();
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        $('h2, img, input, label').removeClass('show');
        $('html').removeClass('flash');
        $('i').removeClass('show');
    }
}
