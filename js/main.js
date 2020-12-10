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