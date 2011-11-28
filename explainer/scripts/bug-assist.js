document.addEventListener('DOMContentLoaded', function() {
    var inputs = {
            product: 'WebAppsWG',
            component: 'Component Model',
            short_desc: '[Explainer]: ',
            comment: '',
            blocked: '14949'
    };

    var form = document.body.appendChild(document.createElement('form'));
    form.style.cssText = 'position:fixed;width:10em;top:1em;right:1em;font-family:Tahoma,sans-serif;font-size:11px;opacity:0.8';
    form.action = 'http://www.w3.org/Bugs/Public/enter_bug.cgi';
    form.target = '_blank';
    form.textContent = 'See a problem? Select text and ';

    var submit = form.appendChild(document.createElement('input'));
    submit.type = 'submit';
    submit.style.cssText = 'font-family:Tahoma,sans-serif;font-size:10px';
    submit.value = 'File a bug';

    Object.keys(inputs).forEach(function(name) {
        var input = form.appendChild(document.createElement('input'));
        input.type = 'hidden';
        input.name = name;
        input.value = inputs[name];
        inputs[name] = input;
    });

    form.addEventListener('submit', function() {
        var selectedText = window.getSelection().toString();
        if (selectedText)
            inputs.comment.value = '"' + selectedText + '"';
    }, false);

}, false);