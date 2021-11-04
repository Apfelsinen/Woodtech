document.addEventListener('DOMContentLoaded', function() {

	function toggleMenu() {
        $('.menu-toggle').toggleClass('menu-toggle_active')
    }

    $('.menu-toggle').click(function () {
        toggleMenu()
    })
})
