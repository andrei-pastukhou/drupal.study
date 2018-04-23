<?php

/**
 * implementation of hook_rules_condition_info()
 */


function training7_rules_condition_info() {
  return array(
    'training7_condition_win_lottery' => array(
      'label' => t('taining7 user is winner of lottery'),
      'group' => t('training7 lottery'),
    ),
  );
}

/**
 * Condition packages_condition_packagetype
 */
function training7_condition_win_lottery() {

  return (training7_check_winner_cache()) ? TRUE : FALSE;
}
