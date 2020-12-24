function getDropMenu() {
  document.getElementById('dropmenu').classList.toggle('show-menu')
}

window.onclick = function(event) {
  if (!event.target.matches('.drop-button')) {
    let dropdowns = document.getElementsByClassName('dropmenu-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-menu')) {
        openDropdown.classList.remove('show-menu');
      }
    }
  }
}

$('.slider').slick({
  centerMode: true,
  slidesToShow: 1,
  variableWidth: true
});

$(document).ready(function() {
  $('.accordeon-item__trigger').click(function() {
    const parent = $(this).parent();

    if (parent.hasClass('accordeon-item--active')) {
      parent.removeClass('accordeon-item--active');
    } else {
      $('.accordeon-item').removeClass('accordeon-item--active')
      parent.addClass('accordeon-item--active')
    }
  })
})