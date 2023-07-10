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
      var project = [projectName, projectType, dueDate]
      function setLocalStorage () {
        localStorage.setItem('project', project);
        
      }
      setLocalStorage()
      console.log(localStorage)
    });

    function getLocal () {
        var project = localStorage.getItem('project')
        var projectName = project[0]
        var projectType = project[1]
        var dueDate = project[2]
        const row = `<tr>
        <td>${projectName}</td>
        <td>${projectType}</td>
        <td>${dueDate}</td>
      </tr>`;
      $('#projectTableBody').append(row);

    }
    getLocal()

  });