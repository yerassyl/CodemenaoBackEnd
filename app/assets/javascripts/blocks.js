// Code for blocks
'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');

Blockly.Blocks.loops.HUE = 120;
// MoveForward
Blockly.Blocks['move_forward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move forward");
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
        .appendField("Turn left");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
}
};

// TurnRight
Blockly.Blocks['turn_right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Turn Right");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['while'] = {
    init: function() {
        this.appendStatementInput("While")
            .appendField("While not")
            .appendField(new Blockly.FieldImage("https://cdn0.iconfinder.com/data/icons/transportation-pack/512/13-512.png", 15, 15, "*"));
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Blocks['controls_repeat'] = {
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
                    "text": "10"
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

