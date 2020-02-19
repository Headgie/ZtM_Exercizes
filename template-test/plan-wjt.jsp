<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@ page session="false" %>

<tiles:insertDefinition name="popupTemplate">
	<tiles:putAttribute name="popup" type="object" value="${model.editRloPopUp}" />
</tiles:insertDefinition>

<tiles:insertDefinition name="popupTemplate">
 	<tiles:putAttribute name="popup" type="object" value="${model.editRloObjPopup}" /> 
 	<tiles:putAttribute name="body">
 		<jsp:include page="widgets/plan-editRloObj-popup-wjt.jsp"></jsp:include> 
 	</tiles:putAttribute>							    
</tiles:insertDefinition>

<tiles:insertDefinition name="popupTemplate">
 	<tiles:putAttribute name="popup" type="object" value="${model.rlCalcPopup}" /> 
 	<tiles:putAttribute name="body">
 		<jsp:include page="widgets/plan-rlCalc-popup-wjt.jsp"></jsp:include> 
 	</tiles:putAttribute>							    
</tiles:insertDefinition>

<tiles:insertDefinition name="popupTemplate">
 	<tiles:putAttribute name="popup" type="object" value="${model.renameRlPopup}" /> 
 	<tiles:putAttribute name="body">
 		<jsp:include page="widgets/plan-renameRl-popup-wjt.jsp"></jsp:include> 
 	</tiles:putAttribute>							    
</tiles:insertDefinition>

<tiles:insertDefinition name="popupmenuTemplate">
		<tiles:putAttribute name="popupmenu" type="object" value="${model.popupMenu}" />
</tiles:insertDefinition>

<tiles:insertDefinition name="defaultTemplateJQ3">
<c:set var="helpPage" value="ch03s03.html" scope="request" />


<tiles:putAttribute name="appliedStyles">
	<link rel="stylesheet" href="/resources/css/assembler/assembler.css" type="text/css" />

	<style>	

		.hidden{
			display: none;
		}
		.disabled {
			background: #aaaaaa;
			border: 1px solid #888888; 
			color: #4e7072;
		}
			
		.pressed {
			background: #f7dbaf;
			border: 1px solid #888888; 
			color: #4e7072;
		}
		
		.edit-mode-button {
		    background-color: #EF5350!important;		   
		    color: #F5F5F5!important;
		}
		
		.dgrid .ui-table tbody tr td{
		    vertical-align: middle;
		}
		
		.popup-menu ul li a:hover {
	  		text-shadow: 0 0 8px;
		}
		
		.popup-menu li {
		    border-bottom: dotted #fed7b0 1px;
		}
		.toolbar-label {
			width: 500px;
			float: left;
		}
		
		div.popup-menu {
			padding: 3px 5px;
		} 

		
		#main-container {
		    height: 100%;
		    width: 100%;
   			overflow: hidden;
   			/*background: #FAFAFA;*/
   			border-radius: 5px;
   			padding: 4px;
   			margin-bottom: 5px;
   			display: table;	
		}
		
		#separator-layouts {
			height: 84vh;
			overflow: hidden; 
		}		
		
		.widget_div{
			
		}
		
		.c-layout {
		    min-height: 34px;
		    width: 100%;
		    overflow: hidden;
		    overflow-y: hidden;		   
		}
		
		.splitter {
		    margin: 5px 0px;
		    height: 4px;
		    background-color: #F5F5F5;
		    cursor: row-resize;
		    border-radius: 2px;
		    border: 1px solid #607D8B;
		}
		
		#botton-layout {
			overflow: none;
    		height: 600px; 
    		/*border: 1px solid #607D8B;*/
    	}
		
		#vault-toolbar {
			height:34px;
			/*background: #03a9f4; */
			margin-top: 4px;
		}
		.editPopUp-container{
		padding: 0;
	    margin: 0;
	    list-style: none;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-flex-flow: row wrap;
	    flex-wrap: wrap;
		}
		
		.h2_pt0{
			padding-top : 0px !important
		}
		
		.spacebetween{
			justify-content: space-between;
			align-items: center;
		}
		
		.spacebetween_align_none{
			justify-content: space-between;
		}
		
		div.divEditRloPopUpValue{
			margin-left: 7px;
		}
		
		div#edit_rlo_popup p{
			padding: 0px;
		}
		
		div#edit_rlo_popup p#pEditPopUpOperName{
			text-align: center;
		    max-width: 400px;
		}
		input.inputTimeEditRlo{
			width: 155px;
			text-align: center;
		}
		input.inputStandartEditRlo{
			width: 55px;
		}
		
		.aButtonEditRloPopUp{
			margin: 0px !important;
		}
		
		
	</style>
</tiles:putAttribute>
<tiles:putAttribute name="appliedScripts">

	<script src="/resources/scripts/shared/d3.min.js"></script>
	<script src="/resources/scripts/shared/charts.js"></script>
	<script src="/resources/scripts/shared/popupConfirm.js"></script>
	<script src="/resources/scripts/shared/popupMenu.js"></script>
</tiles:putAttribute>
<tiles:putAttribute name="body">

	<div id='conflict-popup' class='popup-wrapper' style='display: none; '>
			<div class='popup-hwrapper'>
				<div class='popup' style=' width:80vw;  max-width:80vw; min-height:600px;'  >
				    <div class='popup-caption'>
				    	<div class='popup-caption-text'>
				    	Список конфликтов
						 </div>
				    	<span class='popup-close'></span>
			    	</div>
			    	<div class='popup-body' 	>
			    		<div id="conflicts-grid"></div>
	  		
			    	</div>
	    		</div>
	   		</div>
	</div>
	<div id="main-container">
	
		<div id="separator-layouts">
			<div id="top-layout" class="c-layout">		
				<div>
					<jsp:include page="widgets/plan-toolbar-wjt.jsp"></jsp:include> 
				</div>
				<!--  class="widget_div" -->
				<div class="widget_div">
					<jsp:include page="widgets/plan-rlo-wjt.jsp"></jsp:include> 
				</div>
			</div>
			<div class="splitter splitter-h"></div>
			<div id="botton-layout" class="c-layout">
				<div id="period-toolbar" class= "toolbar" > <!-- style="display: none;" -->
					<label >Изменение периода:&nbsp;</label>
					<input type="button" class="toolbar-button" value="<<" id="buttonBackPeriod" title="Сдвиг периода на сутки назад" onclick="periodBack()" />	
					<div class="input-wrapper inline" id="datefrom-wrapper">
						<input type="text" autocomplete="off" class="inline datetimepicker toolbar-element " id="date-from" name="date-from" />
					</div>
					<div class="input-wrapper inline" id="dateto-wrapper">
						<input type="text" autocomplete="off" class="inline datetimepicker toolbar-element " id="date-to" name="date-to" />
					</div>
					<input type="button" class="toolbar-button" value=">>" id="buttonForwardPeriod" title="Сдвиг периода на сутки вперед" onclick="periodForward()" />	
					<input type="button" class="toolbar-button" value="Применить" id="buttonPeriodApply" title="Изменение периода без скрытия блока кнопок" onclick="updatePeriod()" />
					<input type="button" class="toolbar-button float-right " value="Редактирование на диаграмме" id="buttonEdit" title="Включает режим редактиования на диаграмме" onclick="toggleEditMode()" />	
				</div>
				<jsp:include page="widgets/plan-chart-wjt.jsp"></jsp:include>
				<div id="vault-toolbar">
					<div id="rlo-name-toolbar" class= "toolbar" >	
						<div class="input-wrapper inline" id="rl-name-wrapper">
							<h2>
								<label id="rlo-name"></label>
							</h2>
						</div>
						<input type="button" class="toolbar-button float-right "  value="Редактировать" id="buttonEditRlo" title="" onclick="rloBarEdit();" />
						<input type="button" class="toolbar-button float-right " value="Удалить" id="buttonDeleteRlo" title="" onclick="rloBarDelete();" />
						<input type="button" class="toolbar-button float-right "  value="ПТ" id="buttonEditPTRlo" title="" onclick="rloBarEditPT();" />
						<input type="button" class="toolbar-button float-right  "  value="План/Фон" id="buttonPlanFonRlo" title="" onclick="rloBarPlanFon();" />
						<input type="button" class="toolbar-button float-right "  value="Вставить операцию" id="buttonInsertRlo" title="" onclick="rloBarInsert();" />
					</div>
				</div>	
			</div>
		</div>		
	</div>
</tiles:putAttribute>
<tiles:putAttribute name="pageScripts">

	<script>	
		var conflictsGrid;
		$(function() {
			
			redrawSplitter();
			
			conflictsGrid = $('#conflicts-grid').dGrid({
				url: "${model.urlBase}plan/conflict-list",
				idcol:"rloa",
				insertable: false,	   
				searchable: false,
				size: 5000,
				showRows: false,
				dataTableHeight : "580px",
				fixHeader: true,
				showArrows: false,
				showRowResult: false,	        	
				schema: [
					{"header":"ID", "key":"rloa", "visible":false},
					{"header":"", "key":"rla", "visible":false},
					{"header":"", "key":"rl_type", "visible":false},
					{"header":"Конфликт", "key":"source" , onclick: selectConflict},
					{"header":"Описание", "key":"descr", onclick: selectConflict}
			   	]
	    	});
			
		});
		
		function selectConflict(data, event){
			closePopup($("#conflict-popup"));
			rlodata = {rloId: data.rloa, rlId:data.rla, rlType: data.rl_type};
			reloadGridOnSelectBar(rlodata);		
		}
		function redrawSplitter() {
			onSplitMove($(".splitter.splitter-h").offset(), false);
		}
	
		$('.splitter.splitter-h').draggable({
		    axis: 'y', 
		    containment: 'parent',
		    helper: 'none', 
		    drag: function (event, ui) { 

		    	onSplitMove(ui.offset, true);
		    } 
		});	
		
		
		function onSplitMove(splitOffset, checkHeight) {
			//магические числа(да, это плохое решение)
			var re = 75
			var mi = 65;
			var fa = 234 
			var sol = 194;
			var min_chart_height = 200;
			
			var bl_height = $("#separator-layouts")[0].offsetHeight - splitOffset.top + 50;
			document.getElementById('gantt-chart').setAttribute("min-height", "100px");
			
		//!!NEW start
			if(!checkHeight){
				var new_tl_height = splitOffset.top - $(".mainmenu")[0].offsetHeight
				$('#rls').height(new_tl_height-re-30);
				$('#rlo-table').height(new_tl_height-re);
				$('#rlo-list').height(new_tl_height-re);
				$('#upper').height(new_tl_height-re);
				$('#acc_panel_sli').height(new_tl_height-fa);
				$('#acc_panel_slii').height(new_tl_height-fa);
				$('#acc_panel_esl').height(new_tl_height-fa);   
		        
		        rloGrid.$el.find('.ui-table-data').css("height", (tl_height - 131)+ "px");
		        
		        if (chart!= null) {
					chart.series[0].BaseSVGHeight = bl_height-mi;
					chart.resize();
				}
				return;
			}
		//!!NEW end
		
			if (checkHeight && bl_height < min_chart_height){//
				return;
			} 
				
			var tl_height = splitOffset.top - $(".mainmenu")[0].offsetHeight; 	       
			$('#top-layout').height(tl_height);
			$('#rls').height(tl_height-mi-30);
			$('#rlo-table').height(tl_height-mi);
			$('#rlo-list').height(tl_height-mi);
			$('#upper').height(tl_height-mi);
			$('#acc_panel_sli').height(tl_height-sol);
			$('#acc_panel_slii').height(tl_height-sol);
			$('#acc_panel_esl').height(tl_height-sol);   
	        
	        $('#botton-layout').height(bl_height);
	        rloGrid.$el.find('.ui-table-data').css("height", (tl_height - 131)+ "px");

	        if (chart!= null) {
				chart.series[0].BaseSVGHeight = bl_height-94;
				chart.resize();
			}
	   	
		}

		// Функции кнопок
		// Раскомментировать при реализации панели периода
		
		function periodBack(){
			var dateFrom = document.getElementById('date-from').value;
			var dateTo = document.getElementById('date-to').value;
			var newdateFrom = addDay(dateFrom, -1);
			document.getElementById('date-from').value = newdateFrom;
			var newdateTo = addDay(dateTo, -1);
			document.getElementById('date-to').value = newdateTo;
			updatePeriod();
		}
		
		function periodForward(){
			var dateFrom = document.getElementById('date-from').value;
			var dateTo = document.getElementById('date-to').value;
			var newdateFrom = addDay(dateFrom, 1);
			document.getElementById('date-from').value = newdateFrom;
			var newdateTo = addDay(dateTo, 1);
			document.getElementById('date-to').value = newdateTo;		
			updatePeriod();
		}
		
		function updatePeriod(){
			//Просто обновляем данные страницы
			//refreshPageData();
			refreshChartData();
		}
		
		function addDay(dateString, days){
			var dateTimeArray = dateString.split(' ');
			var dateArray = dateTimeArray[0].split('.');
			var day = dateArray[0];
			var month = dateArray[1];
			var year = dateArray[2];
			var timeArray = dateTimeArray[1].split(':');
			var hour = timeArray[0];
			var minute = timeArray[1];
			
			var oldDate = new Date(year, parseInt(month)-1, day);
			
			oldDate.setDate(oldDate.getDate() + days);

			var formated_date = oldDate.format("d.m.Y") + " "+dateTimeArray[1];
			return formated_date;
		}
	
		function showConflictPopup(){
			
			var popup = $("#conflict-popup");
			popup.find(".popup-close").off().on('click', function(){closePopup(popup);});
			showPopup($("#conflict-popup"));
			conflictsGrid.reload();
		}
		
	</script>
	
</tiles:putAttribute>
</tiles:insertDefinition>				