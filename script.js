$(document).ready(function() {
    $('#projectForm').submit(function(event) {
      event.preventDefault();

      const projectName = $('#projectName').val();
      const projectType = $('#projectType').val();
      const dueDate = $('#dueDate').val();

      const row = `<tr>
        <td>${projectName}</td>
        <td>${projectType}</td>
        <td>${dueDate}</td>
      </tr>`;

      $('#projectTableBody').append(row);

      $('#projectModal').modal('hide');
      $('#projectForm')[0].reset();
    });
  });