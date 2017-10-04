(function ($) {
  Drupal.behaviors.onload_page = {
    // Attach function which will execute when all DOM structured will build.
    attach: function (context, settings) {
      var table_selector = '#training3-table-files';
      var row_array = settings['training3_file_rows_table'];
      // OLD VERSION/ NOT USE.
      // TODO DELETE befor commit
      // // Catch an event of submit form, and redraw whole table.
      // $('#training3-upload-form').bind('submit', function(){
      //   setTimeout(function() {
      //    var row_array_temp = settings['training3_file_rows_table'];
      //     Drupal.behaviors.onload_page.redraw_table_full(settings,table_selector,row_array_temp)
      //   }, 1000);
      // });

      if ($(table_selector, context).length > 0) { // If exist some page.
        if (settings['training3_file_rows_table']) { // If exist setting's object.
          this.draw_table_full(settings, table_selector, row_array);
        }
      }
    },
    // Function draw table.
    draw_table_full: function (settings, table_selector, row_array) {
      row_array.forEach(function (value, index, array) {
        var tr = Drupal.behaviors.onload_page.get_query_row(value.data, index + 1);
        if (Number(settings['training3_user_id']) == Number(value.data.user_id)) {
          tr.className = "tr3_user_file";
        }
        $(table_selector + ' > tbody:last').append(tr);
      }); // End forEach.
    },
    // Function return object of tr with all data inside.
    get_query_row: function (row_data, index) {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.appendChild(document.createTextNode(index));
      tr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(document.createTextNode(row_data.user_id));
      tr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(document.createTextNode(row_data.path));
      tr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(document.createTextNode(row_data.status));
      tr.appendChild(td);
      td = document.createElement('td');
      td.innerHTML = row_data.url;
      tr.appendChild(td);
      return tr;
    },
    // Function to redraw table. First of all delete all rows, then call function to draw table.
    redraw_table_full: function (settings, table_selector, row_array) {
      $(table_selector).find("tr:gt(0)").remove(); // Delete all row from table.
      Drupal.behaviors.onload_page.draw_table_full(settings, table_selector, row_array); // Draw table again.
    },
  };

  // Drupal namesapce and area to use and execute ajax response.
  Drupal.ajax.prototype.commands.ajax_submit_form = function (ajax, response, status) {
    Drupal.behaviors.onload_page.redraw_table_full(
      Drupal.settings, // Array with settings.
      '#training3-table-files', // Table selector.
      Drupal.settings['training3_file_rows_table'] // Data with row's information
    ); // Redraw table.
  };
})(jQuery);


