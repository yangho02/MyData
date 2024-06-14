document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    icon.addEventListener('mouseenter', function() {
        dropdownMenu.style.display = 'block';
    });

    icon.addEventListener('mouseleave', function() {
        // Sử dụng timeout để kiểm tra nếu con trỏ chuột rời khỏi icon nhưng không rời khỏi menu
        setTimeout(function() {
            if (!icon.matches(':hover') && !dropdownMenu.matches(':hover')) {
                dropdownMenu.style.display = 'none';
            }
        }, 200);
    });

    dropdownMenu.addEventListener('mouseenter', function() {
        dropdownMenu.style.display = 'block';
    });

    dropdownMenu.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (!icon.matches(':hover') && !dropdownMenu.matches(':hover')) {
                dropdownMenu.style.display = 'none';
            }
        }, 200);
    });
});
