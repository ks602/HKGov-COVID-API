let tableBody = document.getElementById("tableBody");

getData()
  .then(list => {
    if (list.code != null) {
      tableBody.innerHTML += getErrorText("Error " + list.code);
    }
    let length = (list.length > tableLength) ? tableLength : list.length;
    for (let i = 0; i < length; ++i) {
      addToTable(list[i]);
    }
  })
  .catch(err => {
    tableBody.innerHTML += getErrorText(err.message);
  });

async function getData() {
  let data = await fetch(`https://api.data.gov.hk/v2/filter?q=${encodeURIComponent(JSON.stringify(params))}`);
  let json = await data.json();
  return json;
}

function addToTable(entry) {
  let html = `<tr>
  <td>${entry["Quarantine centres"]}</td>
  <td>${entry["Address"]}</td>
  <td>${entry["Capacity (unit)"]}</td>
  <td>${entry["Current unit in use"]}</td>
  <td>${entry["Current person in use"]}</td>
</tr>`;
  tableBody.innerHTML += html;
}

function getErrorText(text) {
  return `<td colspan='5' class='text-center fw-bold text-danger'>${text}</td>`;
}