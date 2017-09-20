
<?php
$elements = drupal_get_form('user_login_block');
$rendered = drupal_render($elements);
//print_r($elements);?>
<form action="<?php print $elements['#action'] ?>"
  method="<?php print $elements['#method'] ?>"
  id="<?php print $elements['#id'] ?>"
  accept-charset="<? print "UTF-8" ?>" >
<table>
<?php
  $output  = '<tr><td>' . $elements['name']['#children'] . '</td></tr>';
  $output .= '<tr><td>' . $elements['pass']['#children'] . '</td></tr>';
  $output .= '<tr><td>' . $elements['secret_key']['#children'] .
    $elements['secret_key']['#suffix'] . '</td></tr>';
  $output .= '<tr><td>' . $elements['actions']['#children'] . '</td></tr>';
  $output .= '<tr><td>' . $elements['links']['#children'] . '</td></tr>';
  $output .= $elements['form_build_id']['#children'];
  $output .= $elements['form_id']['#children'];
print $output;
?>
</table></form>
