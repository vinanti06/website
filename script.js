$(document).ready(function() {
    
    // 1. DOM Interaction: Show Modal
    $('#openLogin').click(function() {
        $('#loginModal').fadeIn(400);
    });

    // 2. Hide Modal when clicking close or outside the box
    $('.close-modal').click(function() {
        $('#loginModal').fadeOut(300);
    });

    $(window).click(function(event) {
        if (event.target.id === 'loginModal') {
            $('#loginModal').fadeOut(300);
        }
    });

    // 3. JQuery Form Handling
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        const id = $('#userId').val();
        
        // Simple dynamic feedback
        $(this).html(`<h3 style="color: #00d2ff; text-align: center;">Welcome, ${id}!<br>Initializing Dashboard...</h3>`);
        
        setTimeout(() => {
            $('#loginModal').fadeOut(500);
        }, 2000);
    });

    // 4. Scroll effect for Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').css('padding', '0.8rem 10%');
            $('.navbar').css('background', '#020617');
        } else {
            $('.navbar').css('padding', '1.5rem 10%');
            $('.navbar').css('background', 'rgba(15, 23, 42, 0.9)');
        }
    });
});
