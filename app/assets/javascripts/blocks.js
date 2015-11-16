// Code for blocks
'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');

Blockly.Blocks.loops.HUE = 230;
// MoveForward
Blockly.Blocks['move_forward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("     Идти      ");
        this.appendDummyInput().appendField("     Вперед     ");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

// TurnLeft
Blockly.Blocks['turn_left'] = {
init: function() {
    this.appendDummyInput()
        .appendField("     Повернуть  ");
    this.appendDummyInput()
        .appendField("     налево   ");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
}
};

// TurnRight
Blockly.Blocks['turn_right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("     Повернуть  ");
        this.appendDummyInput()
            .appendField("     направо    ");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['while_not_finished'] = {
    init: function() {
        this.appendStatementInput("While")
            .appendField("Повторять пока не")
            .appendField(new Blockly.FieldImage("https://cdn0.iconfinder.com/data/icons/transportation-pack/512/13-512.png", 15, 15, "*"));
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['controls_repeat_3'] = {
    /**
     * Block for repeat n times (internal number).
     * The 'controls_repeat_ext' block is preferred as it is more flexible.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
            "args0": [
                {
                    "type": "field_input",
                    "name": "TIMES",
                    "text": "3"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.loops.HUE,
            "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
            "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
        this.getField('TIMES').setChangeHandler(
            Blockly.FieldTextInput.nonnegativeIntegerValidator);

    }
};

Blockly.Blocks['controls_repeat_2'] = {
    /**
     * Block for repeat n times (internal number).
     * The 'controls_repeat_ext' block is preferred as it is more flexible.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
            "args0": [
                {
                    "type": "field_input",
                    "name": "TIMES",
                    "text": "2"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.loops.HUE,
            "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
            "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
        this.getField('TIMES').setChangeHandler(
            Blockly.FieldTextInput.nonnegativeIntegerValidator);

    }
};

// while loop
Blockly.Blocks['controls_whileUntil'] = {
    /**
     * Block for 'do while/until' loop.
     * @this Blockly.Block
     */
    init: function() {
        var OPERATORS =
            [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
                [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];
        this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendValueInput('BOOL')
            .setCheck('Boolean')
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue('MODE');
            var TOOLTIPS = {
                'WHILE': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                'UNTIL': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            };
            return TOOLTIPS[op];
        });
    }
};

