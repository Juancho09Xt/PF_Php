$(function () {
    $("#example1").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": ["excel", "pdf"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
  });