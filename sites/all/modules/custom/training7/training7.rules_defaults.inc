<?php
/**
 * Implements hook_default_rules_configuration().
 * Autoload rules configuration to rules module.
 */
function training7_default_rules_configuration() {

  $items = array();
  $items['rules_training7_view_lottery_page'] = entity_import('rules_config', '
  { "rules_training7_view_lottery_page" : {
    "LABEL" : "training7_view_lottery_page",
    "PLUGIN" : "reaction rule",
    "OWNER" : "rules",
    "REQUIRES" : [ "pathrules", "training7", "rules" ],
    "ON" : { "init" : [] },
    "IF" : [
      { "pathrules_checkpath" : { "path" : "training7\/lottery", "operation" : "equals" } },
      { "AND" : [] },
      { "training7_condition_win_lottery" : [] }
    ],
    "DO" : [
      { "drupal_message" : { "message" : "Congratulation [site:current-user] you win! Your lucky number is [lottery:lucky_number]. It happened at [lottery:timestamp]." } }
    ]
  }
}'
  );
  return $items;

}

