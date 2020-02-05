
<button id="result-print-menu" class="main-button"  onclick="saveResultToJSON()">Сохранить данные в JSON</button>
<button id="result-print-menu" class="main-button"  onclick="saveParamsToJSON()">Сохранить параметры в JSON</button>

<script>

function saveResultToJSON() {
  alert(JSON.stringify(queryResultJson));
}

function saveParamsToJSON() {
  let curReport = fReportGrid.master.filter((obj) => { 
    return obj.id === currentReport.reportId;
  })[0];
  let jsonFormatted = JSON.stringify(curReport);


  //console.log('aabbaabbcc'.allReplace({'a': 'h', 'b': 'o'}));
  var jsonFormatted2 = jsonFormatted.allReplace({
    '\\n': '<br>',
    '\\"': '""',
    '{"': '{<br>"',
    '"}': '"<br>}',
    ' ': '\u00a0'
  });

  //let jsonFormatted2 = "";
  //jsonFormatted.replace(new RegExp('\n','g'), '<br />');
  //jsonFormatted2 = replaceAll('{"', '{</br>"', jsonFormatted);
  // var jsonFormatted2 = jsonFormatted.replace(/\\n/g, "<br>");
  // jsonFormatted = jsonFormatted2.replace(/ /g, '\u00a0');
  // jsonFormatted2 = jsonFormatted.replace(/\\"/g, '"');

  showMessage(  jsonFormatted2);
  

  // showMessage( replaceAll("\n", "</br>", jsonFormatted) );
  // 	.replace(/(?:\r\n|\r|\n)/g, '<br>')
    // .replace(/\"/g, '"')
    // .replace(`,"`, `,<br>"`)
    // .replace(`{"`, `{<br>"`)
    // .replace(`"}`, `"<br>}`)
  //	);


}	

String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};



function escapeSpaces (str) {
  return str.replace(/^ +/mg, function (match) {
      return match.replace(/ /g, "&nbsp;");
  });
}

function replaceAll(find, replace, str) {
    try {
      str = str.replace(new RegExp(find,"g"), replace);
    }
    catch (e) { }
    return str;
}


function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
</script>