const inputJSONString = `{"id":18,"name":"EXCEL ЭИ и ФК по пластинам Малой сборки","footnote_sql_ora":"","footnote_sql_pg":"","caption_sql_ora":"","caption_sql_pg":"","sql_ora":"/*\n\"columns\": [0, 1,2,3,4,5,6,7]\n*/\n\nSELECT\n  q2.good_name  AS \" Изделие \",\n  q2.rl_number AS \"№ СЛИ\", \n  q2.rl_number || '#' || q2.RL_COMMENT AS \"Комментарий СЛИ\",\n  q2.rl_number || '#' || q2.RLO_DIRECTIVE AS \"Указания технолога\",\n  q2.rl_number || '#' || q2.RLO_COMMENT AS \"Коментарий оператора\",\n  q2.dw_waf_id AS \"№ пластины\",\n  q2.dw_waf_id || '#' || q2.matched_ms AS \"№ Мал.сб.\", \n  q2.dw_waf_id || '#' || q2.c100 AS \"Годные\"\nFROM\n(  \n\n  SELECT \n    q3.RLO_DIRECTIVE, \n    q3.RLO_COMMENT, \n    q3.RL_COMMENT,\n    q3.good_name,\n    q3.bl_name, \n    q3.rl_number, \n    q3.dw_waf_id, \n    q3.matched_ms,\n    sum(q3.c100) as c100,\n    sum(q3.co) as c0\n  FROM\n  (\n\n -- P32122-02-A2\n \n    SELECT\n      q.RLO_DIRECTIVE, \n      q.RLO_COMMENT, \n      q.RL_COMMENT,\n      q.good_name,\n      q.bl_name, \n      q.rl_number, \n      q.dw_waf_id, \n      q.matched_ms,\n      --q.DWMH_ID,\n      -- q.count_DWMH_ID,\n      CASE WHEN q.DWMH_ID = 100 THEN\n        q.count_DWMH_ID\n      ELSE\n        0\n      END AS c100 ,\n      CASE WHEN q.DWMH_ID != 100 THEN\n        q.count_DWMH_ID\n      ELSE\n        0\n      END AS co\n    FROM \n  (\n    SELECT    \n      eii.RLO_DIRECTIVE, \n      eii.RLO_COMMENT, \n      eii.RL_COMMENT,\n      eii.good_name,\n      eii.bl_name, \n      eii.rl_number, \n      eii.rl_id, \n      eii.dw_waf_id, \n      eii.DW_ID ,\n      ms2.rl_number  as matched_ms,\n      wmp.dwm_id,\n      mct.DWMH_ID,\n      count(mct.DWMH_ID) AS count_DWMH_ID\n    FROM\n      ( \n        SELECT  -- ms.*, ei.*, ei2.* -- ,\n          DISTINCT\n          ei2.RLO_DIRECTIVE, \n          ei2.RLO_COMMENT, \n          ei2.RL_COMMENT,\n          ei2.good_name,\n          ei2.bl_name, \n          ei2.rl_number, \n          ei2.rl_id, \n          ei2.dw_waf_id, \n          ei2.DW_ID \n        FROM \n        (\n          -- малая сборка - листы, выбранные из планопа\n          SELECT\n            --SPLIT_PART(SPLIT_PART(bl.bl_name, ' ',1), '.',1) good_name,\n            REGEXP_SUBSTR (REGEXP_SUBSTR (bl.bl_name, '[^ ]+', 1), '[^.]+',  1) good_name,\n            bl.bl_name,\n            rl.rl_number,\n            w.dw_waf_id,\n            w.DW_ID\n          FROM\n            a_route_lists rl,\n            a_base_lists bl,\n            a_route_list_o rlo,\n            a_route_list_o_u_start rloust,\n            d_wafer w\n          WHERE\n            bl.bl_id = rl.bl_id\n            --AND upper(bl.bl_name)  LIKE upper('%малая сборка%')\n            AND rlo.rl_id = rl.rl_id\n            AND rlo.rlo_number = 1\n            AND rloust.rlo_id = rlo.rlo_id\n            AND w.dw_id = rloust.u_id\n            AND rl.RL_NUMBER in ( 11368,11606,11607,11630,11631,8930,10751,10755,10756,10770,10771,10814,10815,11235,11323,11324,11325,11326,11327,11433,11605,11643,11766,12099 )   \n        ) ms \n\n        LEFT OUTER JOIN\n        (\n          -- листы ЭИ для пластин выбранных листов малой сборки\n          SELECT\n            --SPLIT_PART(SPLIT_PART(bl.bl_name, ' ',1), '.',1) good_name,\n            REGEXP_SUBSTR (REGEXP_SUBSTR (bl.bl_name, '[^ ]+', 1), '[^.]+', 1) good_name, bl.bl_name, rl.rl_number, rl.rl_id,\n            w.dw_waf_id , w.DW_ID --, rlolast.RLO_DIRECTIVE, rlolast.RLO_COMMENT, rl.RL_COMMENT, rl.RL_COMMENT_2, rl.RL_COMMENT_3\n          FROM\n            a_route_lists rl,\n            a_base_lists bl,\n            a_route_list_o rlo,\n            a_route_list_o_u_start rloust,\n            d_wafer w\n          WHERE\n            bl.bl_id = rl.bl_id\n            AND upper(bl.bl_name)\n            LIKE upper('%ЭИ и ФК%')\n            AND rlo.rl_id = rl.rl_id\n            AND rlo.rlo_number = 1\n            AND rloust.rlo_id = rlo.rlo_id\n            AND w.dw_id = rloust.u_id\n        ) ei \n          ON ei.dw_id = ms.dw_id -- связь по id пластины\n\n        LEFT OUTER JOIN\n        (\n          SELECT\n            --SPLIT_PART(SPLIT_PART(bl.bl_name, ' ',1), '.',1) good_name,\n            REGEXP_SUBSTR (REGEXP_SUBSTR (bl.bl_name, '[^ ]+', 1), '[^.]+', 1) good_name, \n            bl.bl_name, rl.rl_number, rl.rl_id, w.dw_waf_id, w.DW_ID, rlolast.RLO_DIRECTIVE, rlolast.RLO_COMMENT, rl.RL_COMMENT || ' ' || rl.RL_COMMENT_2 || ' ' || rl.RL_COMMENT_3 as RL_COMMENT\n          FROM\n            a_route_lists rl,\n            a_base_lists bl,\n            a_route_list_o rlo,\n            a_route_list_o_u_start rloust,\n            d_wafer w,\n            a_route_list_o rlolast\n          WHERE\n            bl.bl_id = rl.bl_id\n            AND upper(bl.bl_name)\n            LIKE upper('%ЭИ и ФК%')\n            AND rlo.rl_id = rl.rl_id\n            AND rlo.rlo_number = 1\n            AND rloust.rlo_id = rlo.rlo_id\n            AND w.dw_id = rloust.u_id\n            AND rlolast.rl_id = rl.rl_id\n            AND rlolast.rlo_number = (\n              SELECT\n                max(rlo_number)\n              FROM\n                a_route_list_o\n              WHERE\n                rl_id = rl.rl_id)\n        ) ei2 \n          ON ei2.rl_id = ei.rl_id\n\n    --   ORDER BY  ei2.good_name,ei2.rl_number, ei2.dw_waf_id\n      ) eii\n      LEFT OUTER JOIN \n      (\n        -- малая сборка - листы, выбранные из планопа второй раз, чтобы избежать удвоений\n        SELECT\n          rl.rl_number,\n          w.dw_waf_id,\n          w.DW_ID\n        FROM\n          a_route_lists rl,\n          a_route_list_o rlo,\n          a_route_list_o_u_start rloust,\n          d_wafer w\n        WHERE\n            rlo.rl_id = rl.rl_id\n          AND rlo.rlo_number = 1\n          AND rloust.rlo_id = rlo.rlo_id\n          AND w.dw_id = rloust.u_id\n          AND rl.RL_NUMBER in ( 11368,11606,11607,11630,11631,8930,10751,10755,10756,10770,10771,10814,10815,11235,11323,11324,11325,11326,11327,11433,11605,11643,11766,12099 )   \n      ) ms2\n      ON ms2.DW_ID = eii.DW_ID,\n      d_wafer_map wmp, \n      d_wafer_map_content mct\n    WHERE \n        wmp.dw_id = eii.dw_id\n        AND wmp.dwm_number = 2\n        AND mct.dwm_id = wmp.dwm_id  \n    GROUP BY\n      eii.RLO_DIRECTIVE, \n      eii.RLO_COMMENT, \n      eii.RL_COMMENT,\n      eii.good_name,\n      eii.bl_name, \n      eii.rl_number, \n      eii.rl_id, \n      eii.dw_waf_id, \n      eii.DW_ID ,\n      ms2.rl_number,\n      wmp.dwm_id,\n      mct.DWMH_ID\n   -- ORDER BY  eii.good_name,eii.rl_number, eii.dw_waf_id  \n\n\n\n\n  \n  \n\n  )q\n\n  --  where q.dw_waf_id = 'P32122-02-A2'\n \n  )q3\n  GROUP BY\n   q3.RLO_DIRECTIVE, \n    q3.RLO_COMMENT, \n    q3.RL_COMMENT,\n    q3.good_name,\n    q3.bl_name, \n    q3.rl_number, \n    q3.dw_waf_id, \n    q3.matched_ms\n  \n  ORDER BY \n  q3.good_name,\n  q3.rl_number,\n  q3.dw_waf_id\n  \n\n  \n)q2\nORDER BY\nq2.good_name,\nq2.rl_number,\nq2.dw_waf_id\n","sql_pg":"","comment":"{\n  \"type\":\"EXCEL\",\n  \"rowspanizer\":{\n    \"columns\": [0, 1,2,3,4,5,6,7]\n  }\n}","execdb":0,"param":"[ ]"}`;
const jsonObj = {
  "id":18,
  "name":"EXCEL ЭИ и ФК по пластинам Малой сборки",
  "footnote_sql_ora":"",
  "footnote_sql_pg":"",
  "caption_sql_ora":"",
  "caption_sql_pg":"",
  "sql_ora":`/*
"columns": [0, 1,2,3,4,5,6,7]
*/

SELECT
  q2.good_name  AS " Изделие ",
  q2.rl_number AS "№ СЛИ", 
  q2.rl_number || '#' || q2.RL_COMMENT AS "Комментарий СЛИ",
  q2.rl_number || '#' || q2.RLO_DIRECTIVE AS "Указания технолога",
  q2.rl_number || '#' || q2.RLO_COMMENT AS "Коментарий оператора",
  q2.dw_waf_id AS "№ пластины",
  q2.dw_waf_id || '#' || q2.matched_ms AS "№ Мал.сб.", 
  q2.dw_waf_id || '#' || q2.c100 AS "Годные"
FROM
(  

  SELECT 
    q3.RLO_DIRECTIVE, 
    q3.RLO_COMMENT, 
    q3.RL_COMMENT,
    q3.good_name,
    q3.bl_name, 
    q3.rl_number, 
    q3.dw_waf_id, 
    q3.matched_ms,
    sum(q3.c100) as c100,
    sum(q3.co) as c0
  FROM
  (

 -- P32122-02-A2
 
    SELECT
      q.RLO_DIRECTIVE, 
      q.RLO_COMMENT, 
      q.RL_COMMENT,
      q.good_name,
      q.bl_name, 
      q.rl_number, 
      q.dw_waf_id, 
      q.matched_ms,
      --q.DWMH_ID,
      -- q.count_DWMH_ID,
      CASE WHEN q.DWMH_ID = 100 THEN
        q.count_DWMH_ID
      ELSE
        0
      END AS c100 ,
      CASE WHEN q.DWMH_ID != 100 THEN
        q.count_DWMH_ID
      ELSE
        0
      END AS co
    FROM 
  (
    SELECT    
      eii.RLO_DIRECTIVE, 
      eii.RLO_COMMENT, 
      eii.RL_COMMENT,
      eii.good_name,
      eii.bl_name, 
      eii.rl_number, 
      eii.rl_id, 
      eii.dw_waf_id, 
      eii.DW_ID ,
      ms2.rl_number  as matched_ms,
      wmp.dwm_id,
      mct.DWMH_ID,
      count(mct.DWMH_ID) AS count_DWMH_ID
    FROM
      ( 
        SELECT  -- ms.*, ei.*, ei2.* -- ,
          DISTINCT
          ei2.RLO_DIRECTIVE, 
          ei2.RLO_COMMENT, 
          ei2.RL_COMMENT,
          ei2.good_name,
          ei2.bl_name, 
          ei2.rl_number, 
          ei2.rl_id, 
          ei2.dw_waf_id, 
          ei2.DW_ID 
        FROM 
        (
          -- малая сборка - листы, выбранные из планопа
          SELECT
            --SPLIT_PART(SPLIT_PART(bl.bl_name, ' ',1), '.',1) good_name,
            REGEXP_SUBSTR (REGEXP_SUBSTR (bl.bl_name, '[^ ]+', 1), '[^.]+',  1) good_name,
            bl.bl_name,
            rl.rl_number,
            w.dw_waf_id,
            w.DW_ID
          FROM
            a_route_lists rl,
            a_base_lists bl,
            a_route_list_o rlo,
            a_route_list_o_u_start rloust,
            d_wafer w
          WHERE
            bl.bl_id = rl.bl_id
            --AND upper(bl.bl_name)  LIKE upper('%малая сборка%')
            AND rlo.rl_id = rl.rl_id
            AND rlo.rlo_number = 1
            AND rloust.rlo_id = rlo.rlo_id
            AND w.dw_id = rloust.u_id
            AND rl.RL_NUMBER in ( 11368,11606,11607,11630,11631,8930,10751,10755,10756,10770,10771,10814,10815,11235,11323,11324,11325,11326,11327,11433,11605,11643,11766,12099 )   
        ) ms 

        LEFT OUTER JOIN
        (
          -- листы ЭИ для пластин выбранных листов малой сборки
          SELECT
            --SPLIT_PART(SPLIT_PART(bl.bl_name, ' ',1), '.',1) good_name,
            REGEXP_SUBSTR (REGEXP_SUBSTR (bl.bl_name, '[^ ]+', 1), '[^.]+', 1) good_name, bl.bl_name, rl.rl_number, rl.rl_id,
            w.dw_waf_id , w.DW_ID --, rlolast.RLO_DIRECTIVE, rlolast.RLO_COMMENT, rl.RL_COMMENT, rl.RL_COMMENT_2, rl.RL_COMMENT_3
          FROM
            a_route_lists rl,
            a_base_lists bl,
            a_route_list_o rlo,
            a_route_list_o_u_start rloust,
            d_wafer w
          WHERE
            bl.bl_id = rl.bl_id
            AND upper(bl.bl_name)
            LIKE upper('%ЭИ и ФК%')
            AND rlo.rl_id = rl.rl_id
            AND rlo.rlo_number = 1
            AND rloust.rlo_id = rlo.rlo_id
            AND w.dw_id = rloust.u_id
        ) ei 
          ON ei.dw_id = ms.dw_id -- связь по id пластины

        LEFT OUTER JOIN
        (
          SELECT
            --SPLIT_PART(SPLIT_PART(bl.bl_name, ' ',1), '.',1) good_name,
            REGEXP_SUBSTR (REGEXP_SUBSTR (bl.bl_name, '[^ ]+', 1), '[^.]+', 1) good_name, 
            bl.bl_name, rl.rl_number, rl.rl_id, w.dw_waf_id, w.DW_ID, rlolast.RLO_DIRECTIVE, rlolast.RLO_COMMENT, rl.RL_COMMENT || ' ' || rl.RL_COMMENT_2 || ' ' || rl.RL_COMMENT_3 as RL_COMMENT
          FROM
            a_route_lists rl,
            a_base_lists bl,
            a_route_list_o rlo,
            a_route_list_o_u_start rloust,
            d_wafer w,
            a_route_list_o rlolast
          WHERE
            bl.bl_id = rl.bl_id
            AND upper(bl.bl_name)
            LIKE upper('%ЭИ и ФК%')
            AND rlo.rl_id = rl.rl_id
            AND rlo.rlo_number = 1
            AND rloust.rlo_id = rlo.rlo_id
            AND w.dw_id = rloust.u_id
            AND rlolast.rl_id = rl.rl_id
            AND rlolast.rlo_number = (
              SELECT
                max(rlo_number)
              FROM
                a_route_list_o
              WHERE
                rl_id = rl.rl_id)
        ) ei2 
          ON ei2.rl_id = ei.rl_id

    --   ORDER BY  ei2.good_name,ei2.rl_number, ei2.dw_waf_id
      ) eii
      LEFT OUTER JOIN 
      (
        -- малая сборка - листы, выбранные из планопа второй раз, чтобы избежать удвоений
        SELECT
          rl.rl_number,
          w.dw_waf_id,
          w.DW_ID
        FROM
          a_route_lists rl,
          a_route_list_o rlo,
          a_route_list_o_u_start rloust,
          d_wafer w
        WHERE
            rlo.rl_id = rl.rl_id
          AND rlo.rlo_number = 1
          AND rloust.rlo_id = rlo.rlo_id
          AND w.dw_id = rloust.u_id
          AND rl.RL_NUMBER in ( 11368,11606,11607,11630,11631,8930,10751,10755,10756,10770,10771,10814,10815,11235,11323,11324,11325,11326,11327,11433,11605,11643,11766,12099 )   
      ) ms2
      ON ms2.DW_ID = eii.DW_ID,
      d_wafer_map wmp, 
      d_wafer_map_content mct
    WHERE 
        wmp.dw_id = eii.dw_id
        AND wmp.dwm_number = 2
        AND mct.dwm_id = wmp.dwm_id  
    GROUP BY
      eii.RLO_DIRECTIVE, 
      eii.RLO_COMMENT, 
      eii.RL_COMMENT,
      eii.good_name,
      eii.bl_name, 
      eii.rl_number, 
      eii.rl_id, 
      eii.dw_waf_id, 
      eii.DW_ID ,
      ms2.rl_number,
      wmp.dwm_id,
      mct.DWMH_ID
   -- ORDER BY  eii.good_name,eii.rl_number, eii.dw_waf_id  




  
  

  )q

  --  where q.dw_waf_id = 'P32122-02-A2'
 
  )q3
  GROUP BY
   q3.RLO_DIRECTIVE, 
    q3.RLO_COMMENT, 
    q3.RL_COMMENT,
    q3.good_name,
    q3.bl_name, 
    q3.rl_number, 
    q3.dw_waf_id, 
    q3.matched_ms
  
  ORDER BY 
  q3.good_name,
  q3.rl_number,
  q3.dw_waf_id
  

  
)q2
ORDER BY
q2.good_name,
q2.rl_number,
q2.dw_waf_id
`,
  "sql_pg":"",
  "comment":`{
  "type":"EXCEL",
  "rowspanizer":{
    "columns": [0, 1,2,3,4,5,6,7]
  }
}`,
  "execdb":0,
  "param":"[ ]"
};


function saveParamsToJSON() {
  //debugger;
  let jsonEntriesArray = Object.entries(jsonObj);
  let jsonObjString = "{";
  for (var item of jsonEntriesArray) {
    //jsonObjString += "\"" + item[0] +"\": `" + item[1] + "`,";
    //jsonObjString += item[0] +": `" + item[1] + "`,";
    //jsonObjString += "`" + item[0] +"`: `" + item[1] + "`,";
   // jsonObjString += "@" + item[0] +"@: @" + item[1] + "@,";
   jsonObjString += "@" + item[0] +"@: `" + item[1] + "`,";
  }
  jsonObjString = jsonObjString.substring(0, jsonObjString.length - 1) +"}";
  let jsonObjStringCorrected = jsonObjString;
  debugger;
  //jsonObjStringCorrected = jsonObjStringCorrected.replace(/`,@/g, '`,\n@');
  jsonObjStringCorrected = jsonObjStringCorrected.replace(/\"/g, '\\"');
 //jsonObjStringCorrected = jsonObjStringCorrected.replace(/\`/g, '\"');
 jsonObjStringCorrected = jsonObjStringCorrected.replace(/\n/g, '\\n');
 jsonObjStringCorrected = jsonObjStringCorrected.replace(/\//g, '\\/');
 //jsonObjStringCorrected = jsonObjStringCorrected.replace(/\*/g, '\\*');
 jsonObjStringCorrected = jsonObjStringCorrected.replace(/`/g, '\"');
 jsonObjStringCorrected = jsonObjStringCorrected.replace(/@/g, '\"');
 
  let json3 =  JSON.parse( jsonObjStringCorrected );


  let json2 = JSON.parse( JSON.stringify(jsonObj) );

  let jsonFormatted = jsonObjString ; //inputJSONString;
  let localTextArea = document.querySelector("#out-text-id");
  let localTextDiv = document.querySelector("#out-text-html");
  localTextArea.textContent = jsonFormatted;


  jsonFormatted = jsonFormatted.replace(/{"/g, "{<br>\u00a0\u00a0\"");
  jsonFormatted = jsonFormatted.replace(/"}/g, "\"<br>}");
  jsonFormatted = jsonFormatted.replace(/\\n/g, "<br>");
  jsonFormatted = jsonFormatted.replace(/\n/g, "<br>");
  jsonFormatted = jsonFormatted.replace(/ /g, '\u00a0');
  jsonFormatted = jsonFormatted.replace(/\\"/g, '"');
  jsonFormatted = jsonFormatted.replace(/,\"/g, ",<br>\u00a0\u00a0\"");
  localTextDiv.innerHTML = jsonFormatted;
  //alert(localTextDiv.innerHTML);

  //console.log('aabbaabbcc'.allReplace({'a': 'h', 'b': 'o'}));
  /*
  var jsonFormatted2 = jsonFormatted.allReplace([
    ['\\n', '<br>'],
    ['\\"', '""'],
    ['{"', '{<br>"'],
    ['"}', '"<br>}'],
    [' ', '\u00a0']
  ]);
*/
  //let jsonFormatted2 = "";
  //jsonFormatted.replace(new RegExp('\n','g'), '<br />');
  //jsonFormatted2 = replaceAll('{"', '{</br>"', jsonFormatted);
  // var jsonFormatted2 = jsonFormatted.replace(/\\n/g, "<br>");
  // jsonFormatted = jsonFormatted2.replace(/ /g, '\u00a0');
  // jsonFormatted2 = jsonFormatted.replace(/\\"/g, '"');

  //showMessage(  jsonFormatted2);
  

  // showMessage( replaceAll("\n", "</br>", jsonFormatted) );
  //  .replace(/(?:\r\n|\r|\n)/g, '<br>')
    // .replace(/\"/g, '"')
    // .replace(`,"`, `,<br>"`)
    // .replace(`{"`, `{<br>"`)
    // .replace(`"}`, `"<br>}`)
  //  );


} 

String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x of obj) {
        retStr = retStr.replace(x[0], 'g', x[1]);
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
