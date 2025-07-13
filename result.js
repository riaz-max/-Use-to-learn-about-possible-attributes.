<script>
  const sheetURL = 'https://sheetdb.io/api/v1/3qs6xjacmjbr7';

  fetch(sheetURL)
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector("#resultTable tbody");
      data.forEach(row => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.name}</td><td>${row.class}</td><td>${row.marks}</td>`;
        tbody.appendChild(tr);
      });
    })
    .catch(error => {
      console.error("ডেটা আনতে সমস্যা:", error);
    });
</script>
