setInterval(function() {
    $('p').fadeOut(500, function() {
        var $this = $(this);
        $this.text($this.text() == 'Connected' ? '2457' : 'Connected');        
        $this.toggleClass('first second');        
        $this.fadeIn(500);
    });
}, 3000);​