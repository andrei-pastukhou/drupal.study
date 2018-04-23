(function($) {
  Drupal.behaviors.onload_page = {
    attach: function (context, settings){
      update_table_full (context, settings);
    }
  };

  // Function redraw table.
  function update_table_full(context, settings)
  {
    if (settings['training5_file_rows_table']) {
      $('#training5-table-files').find("tr:gt(0)").remove();
      row_array = settings['training5_file_rows_table'];
      row_array.forEach(function (value, index, array) {
        //console.log (settings['training3_user_id'] + value.data.user_id);
        if(Number(settings['training5_user_id']) == Number(value.data.user_id)){
          style = 'class = "tr5_user_file"';
        }
        else {
          style = '';
        }
        $('#training5-table-files > tbody:last').append('<tr ' + style + '>' +
            '<td>' + (index + 1) + '</td>' +
            '<td>' + value.data.user_id + '</td>' +
            '<td>' + value.data.path + '</td>' +
            '<td>' + value.data.status + '</td>' +
            '<td>' + value.data.url + '</td>' +
            '</tr>');

      }); // End forEach.
    } // End if.
  }
})(jQuery);
