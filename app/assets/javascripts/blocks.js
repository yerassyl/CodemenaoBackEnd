// Code for blocks

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
