(function initlialize() {
  document.addEventListener("DOMContentLoaded", function() {
    addRow();
  });
})();

function addRow() {
    let table = document.querySelector('table');
    let footer = table.querySelector('tfoot');
    let tr = document.createElement('tr');
    let td = document.createElement('th');
    
    td.setAttribute('colspan', '5');
    td.innerText = 'Top Movies';
    td.style.textTransform = 'uppercase';
    td.style.fontWeight = 'bold';

    tr.appendChild(td);
    footer.appendChild(tr);
}
