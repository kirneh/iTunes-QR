// ==UserScript==
// @name         iTunes QR
// @namespace    http://twitter.com/Kirnehx
// @homepageURL    http://twitter.com/Kirnehx
// @supportURL    http://twitter.com/Kirnehx
// @version      0.1
// @description  Show a QR on iTunes app page!
// @author       Kirnehx
// @match        https://itunes.apple.com/*
// @include      https://itunes.apple.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(document).ready(function(){
    var qrToggle = document.createElement('div');
    var qr = document.createElement('div');
    
    qrToggle.id = "qrToggle";
    qr.id = "qr";
    
    $(qrToggle).css({"cursor": "pointer", "width": "100%","text-align":"center","height":"30px","font-weight":"bold","vertical-align":"middle","color":"#298cda"});
    $(qrToggle).hover(
        function() {
            $(qrToggle).css("text-decoration","underline");
        },function() {
            $(qrToggle).css("text-decoration","none");
        });
    
    $(qr).css({"text-align":"center","width":"100%"});
    
    qrToggle.innerHTML = 'Click to show/hide QR';
    qr.innerHTML = '<img src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl='+document.location.href+'&chld=H|0">';
    
    $(qr).hide();
    $('#left-stack > div.lockup.product.application > a.action.view-in-itunes').after(qrToggle,qr);
    
    $("#qrToggle").click(function(){
        $("#qr").slideToggle();
    });
});