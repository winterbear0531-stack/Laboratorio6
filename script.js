const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');

window.addEventListener('load', () => {
  checkboxes.forEach(cb => {
    const saved = localStorage.getItem(cb.id);
    if (saved === 'true') {
      cb.checked = true;
    }
  });
});

document.getElementById('guardar').addEventListener('click', () => {
  checkboxes.forEach(cb => {
    localStorage.setItem(cb.id, cb.checked);
  });
  alert('Selección guardada!');
});
