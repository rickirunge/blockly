/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The class representing a cursor that is used to navigate
 * between tab navigable fields.
 * @author samelh@google.com (Sam El-Husseini)
 */
'use strict';

/**
 * The class representing a cursor that is used to navigate
 * between tab navigable fields.
 * @class
 */
goog.module('Blockly.TabNavigateCursor');

/* eslint-disable-next-line no-unused-vars */
const Field = goog.requireType('Blockly.Field');
const object = goog.require('Blockly.utils.object');
const {ASTNode} = goog.require('Blockly.ASTNode');
const {BasicCursor} = goog.require('Blockly.BasicCursor');


/**
 * A cursor for navigating between tab navigable fields.
 * @constructor
 * @extends {BasicCursor}
 * @alias Blockly.TabNavigateCursor
 */
const TabNavigateCursor = function() {
  TabNavigateCursor.superClass_.constructor.call(this);
};
object.inherits(TabNavigateCursor, BasicCursor);

/**
 * Skip all nodes except for tab navigable fields.
 * @param {?ASTNode} node The AST node to check whether it is valid.
 * @return {boolean} True if the node should be visited, false otherwise.
 * @override
 */
TabNavigateCursor.prototype.validNode_ = function(node) {
  let isValid = false;
  const type = node && node.getType();
  if (node) {
    const location = /** @type {Field} */ (node.getLocation());
    if (type === ASTNode.types.FIELD && location && location.isTabNavigable() &&
        location.isClickable()) {
      isValid = true;
    }
  }
  return isValid;
};

exports.TabNavigateCursor = TabNavigateCursor;
