(function ($) {
  // Drupal namesapce and area to use and execute ajax response.
  Drupal.ajax.prototype.commands.alert_message = function (ajax, response, status) {
    alert(Drupal.settings['training6-string']);
  };

  Drupal.ajax.prototype.commands.change_textarea_to_text = function (ajax, response, status) {
    $('#training6_wrapper_form').html(Drupal.checkPlain(Drupal.settings['training6-string']));
  };
})(jQuery);
