// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require websocket_rails/main
//= require_tree .

function backToGame(){
    $('.runCodeBtn').show();
    $('.clearEditor').show();
    $('.congrats').hide();
}
function clearEditor(){
    Blockly.mainWorkspace.clear();
}

function storeTimeSpent(timeSpent, isLevelPassed){
    if (isLevelPassed==1){
        alert("level is passed with "+timeSpent+"seconds");
    }else {

    }
}

$(document).on('ready', function(){
    var runCodeBtn = $('.runCodeBtn');
    var clearEditor = $('.clearEditor');
    var congrats = $('.congrats');
    var startTime = Date.now();

    congrats.hide();

    runCodeBtn.on('click', function(){
        var timeSpent = Math.floor( (Date.now()-startTime)/1000);
        // convert blocks code into Python
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        Android.sendToNao(code, timeSpent ); // send code to android
        runCodeBtn.hide();
        clearEditor.hide();
        congrats.show();
    });
});
