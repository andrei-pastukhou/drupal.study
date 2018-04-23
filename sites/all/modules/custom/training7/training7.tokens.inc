<?php
/**
 * implement hook_token_info
 * @return array
 */
function training7_token_info() {
  $type = array(
    'name' => t('Lottery'),
    'description' => t('Tokens to training7_lottery'),
    //'needs-data' => 'lottery',
  );
  $lottery['user_name'] = array(
    'name' => t("User name"),
    'description' => t("User name."),
  );
  $lottery['lucky_number'] = array(
    'name' => t("Lucky number"),
    'description' => t("Number which provide user to win."),
  );
  $lottery['timestamp'] = array(
    'name' => t("Timestamp"),
    'description' => t("Time in Unix format show, when was attempt."),
  );
    return array(
    'types' => array('lottery' => $type),
    'tokens' => array('lottery' => $lottery),
  );
}

/**
 * implement hook_tokens
 * @return array
 */
function training7_tokens($type, $tokens, array $data = array(), array $options = array()) {
  global $user;
  $replacements = array();
  if ($type == 'lottery') {
    if (empty($data['lottery'])) {
      $data = _training7_fill_lottery_object();
    }
    $lottery = $data['lottery'];
    foreach ($tokens as $name => $original) {
      switch ($name) {
        case 'user_name' :
          $replacements[$original] = $user->name;
          break;
        case 'lucky_number':
          $replacements[$original] = $lottery->lucky_number;
          break;

        case 'timestamp':
          $replacements[$original] = format_date($lottery->timestamp, 'custom', 'd-m-Y H:i:s');
          break;
      }
    }
  }
  return $replacements;
}
