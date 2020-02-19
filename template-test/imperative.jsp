
<style>
     
    
	
	#plan-editRloObj-popup {
		z-index: 5000;
	}
	
	input.inputEditPopUpObj{
		width: 55px;
		margin-right:5px;
	}
	
	.rloEditObjAlign{
		align-items: flex-start !important;
	}
	
	.textCenter{
		text-align: center;
	}
	
	div.divEditRloObjBlock{
		margin: 0 10px;
	}
	
	div#divRloEditObjName{
	    width: 400px;
    	text-align: center;
    }
    
    div#divRloEditObjControl{
    	text-align: center;
    	margin-top: 10px;
    }
	
	
     
</style>
	<div id="divRloEditObjName"></div>
	<div class="editPopUp-container spacebetween rloEditObjAlign">
		<div class="divEditRloObjBlock">
			<h3 class="textCenter">Вход</h3>
			<div id="inEditPopUpObj"></div>
		</div>
	
		<div class="divEditRloObjBlock">
			<h3 class="textCenter">Выход</h3>
			<div id="outEditPopUpObj"></div>
		</div>
	
		<div class="divEditRloObjBlock">
			<h3 class="textCenter">Брак</h3>
			<div id="defectEditPopUpObj"></div>
		</div>
	</div>
	<div id="divRloEditObjControl">
		<div class="divRloEditObjCheckbox">
			<input id="inputRloUnitCalcHelp" type="checkbox" checked="checked">
			<label for="inputRloUnitCalcHelp">Помощь в рассчётах</label>
		</div>
		<div class="divRloEditObjCheckbox">
			<input id="inputRlosUnitRecount" type="checkbox" >
			<label for="inputRlosUnitRecount">Пересчёт на последующих операциях</label>
		</div>
		<div id="divDefectCancelCheckbox" class="divRloEditObjCheckbox">
			<input id="inputRlosDefectCancel" type="checkbox" >
			<label for="inputRlosDefectCancel">с отменой брака</label>
		</div>
	</div>
	
<script>
	function getCurrRloObjData(o)  {		
		$.ajax({
			url : "${model.planUrl}" + "getRloObjData/" + o.id,
			type : "get",
			success : function(rloObjData){
				if(rloObjData.result != "ERROR")
					showEditRloObjPopup(rloObjData.data, o.number + ': ' + o.name, o.id );
				else
					showError(rloObjData.text);
			},
			error : function(rloObjData){
				showError(rloObjData.responseText ? rloObjData.responseText : rloObjData.status + " " + rloObjData.statusText);
			}
		});
	}
	
	function showEditRloObjPopup(objData, rloNumName, pRloId){
		
		$('div#divRloEditObjName').html('<p>' + rloNumName + '</p>');
		
		var inObjStr = "";
		for(var i = 0; i < objData.inc.length; i++){
			var currObj = objData.inc[i];
			inObjStr += '<div class="divEditInElem"><input type="text" class="inputEditPopUpObj" name="' + currObj.p_ut_id + '" value="' + currObj.p_count_u_in + '" />';
			inObjStr += '<label class="labelEditPopUpObj">' + currObj.ut_abbreviation + '</label></div>';
		}
		$('div#inEditPopUpObj').html(inObjStr);
		
		var outObjStr = "";
		for(var j = 0; j < objData.out.length; j++){
			var currObj = objData.out[j];
			outObjStr += '<div class="divEditOutElem"><input type="text" class="inputEditPopUpObj" name="' + currObj.p_ut_id + '" value="' + currObj.p_count_u_out + '" />';
			outObjStr += '<label class="labelEditPopUpObj">' + currObj.ut_abbreviation + '</label></div>';
		}
		$('div#outEditPopUpObj').html(outObjStr);
		
		var defObjStr = "";
		for(var j = 0; j < objData.out.length; j++){
			var currObj = objData.out[j];
			defObjStr += '<div class="divEditDefectElem"><input type="text" class="inputEditPopUpObj" name="' + currObj.p_ut_id + '" value="' + currObj.p_count_u_defect + '" />';
			defObjStr += '<label class="labelEditPopUpObj">' + currObj.ut_abbreviation + '</label></div>';
		}
		$('div#defectEditPopUpObj').html(defObjStr);
		
		showPopup($('#plan-editRloObj-popup'));
		
		//установить значения чекбоксов по умолчанию
		$('input#inputRloUnitCalcHelp').prop('checked', true);
		$('input#inputRlosUnitRecount').prop('checked', false);
		//скроем дополнительный чекбокс для очистки брака
		$('div#divDefectCancelCheckbox').css("visibility", "hidden");
		
		//перхват нажатия на чекбокс "Пересчёт..."
		$('input#inputRlosUnitRecount').on('click', function(){
			if($('input#inputRlosUnitRecount:checked').length > 0){
				$('div#divDefectCancelCheckbox').css("visibility", "visible");
				$('input#inputRlosDefectCancel').prop('checked', false);
			}else{
				$('div#divDefectCancelCheckbox').css("visibility", "hidden");
			}
		});
		
		//перехват клика по Сохранить
		$('div#plan-editRloObj-popup div.popup-actions a.submit').on('click', function(e){
			$('input#inputRlosUnitRecount').off();
			$('div#plan-editRloObj-popup .popup-close').off();
			$('div#plan-editRloObj-popup div.popup-actions a.submit').off();
			checkEditedObj(pRloId);
		});
		
		//перехват клика по Отмена
		$('div#plan-editRloObj-popup .popup-close').on('click', function(e){
			$('input#inputRlosUnitRecount').off();
			$('div#plan-editRloObj-popup .popup-close').off();
			$('div#plan-editRloObj-popup div.popup-actions a.submit').off();
			closePopup($('#plan-editRloObj-popup'));
		});
		
		//перехват снятия фокуса с input  
		$("input.inputEditPopUpObj").on('change', function(){
			//строка должна содержать только целые положительные
			if(!(/^\d+$/.test(this.value)))
						this.value = 0;
			
			if($('input#inputRloUnitCalcHelp:checked').length > 0){//если включена помощь в рассчётах
				var objType = this.getAttribute('name');//тип ПТ
				
				//здесь предполагаем следующее:
				//1)набор типов ПТ на выходе и в браке совпадает;
				//2)если типы ПТ на входе и выходе различаются - произошло создание новго типа ПТ(!не учитываем операцию "демонтаж крышек"!)
				//при этом на выходе будет только один тип ПТ(свежесозданный)
				
				var inc;
				var out;
				var defect;
				
				switch(this.parentElement.className){
				
				case 'divEditInElem'://изменили кол-во на входе
					defect = $('div.divEditDefectElem input.inputEditPopUpObj[name=' + objType + ']').val();
					if(defect){//если изменяемый тип ПТ найден в браке
						$('div.divEditOutElem input.inputEditPopUpObj[name=' + objType + ']').val(+this.value - +defect);
					}else{
						//проверяем если на выходе только 1 тип ПТ - значит произошло создание нового типа ПТ
						if($('div.divEditOutElem input.inputEditPopUpObj').length = 1){
							//ищем наименьшее кол-во ПТ на входе среди всех типов ПТ
							inc = getMinInputVal($('div.divEditInElem input.inputEditPopUpObj'));
							//находим значение на выходе как разницу (наименьшее на входе - значение в браке)
							defect = $('div.divEditDefectElem input.inputEditPopUpObj').val();
							$('div.divEditOutElem input.inputEditPopUpObj').val(inc - +defect);
						}
					}
					break;
					
				case 'divEditOutElem'://изменили кол-во на выходе
					inc = $('div.divEditInElem input.inputEditPopUpObj[name=' + objType + ']').val();
					if(inc){//если изменяемый тип ПТ найден на входе
						$('div.divEditDefectElem input.inputEditPopUpObj[name=' + objType + ']').val(+inc - +this.value);
					}else{
						//проверяем если на выходе только 1 тип ПТ - значит произошло создание нового типа ПТ
						if($('div.divEditOutElem input.inputEditPopUpObj').length = 1){
							//ищем наименьшее кол-во ПТ на входе среди всех типов ПТ
							inc = getMinInputVal($('div.divEditInElem input.inputEditPopUpObj'));
							//находим значение в браке как разницу(наименьшее на входе - значение на выходе)
							$('div.divEditDefectElem input.inputEditPopUpObj').val(inc - +this.value)
						}
					}
					break;
					
				case 'divEditDefectElem'://изменили кол-во в браке
					inc = $('div.divEditInElem input.inputEditPopUpObj[name=' + objType + ']').val();
					if(inc){//если изменяемый тип ПТ найден на входе
						$('div.divEditOutElem input.inputEditPopUpObj[name=' + objType + ']').val(+inc - +this.value);
					}else{
						//проверяем если на выходе только 1 тип ПТ - значит произошло создание нового типа ПТ
						if($('div.divEditOutElem input.inputEditPopUpObj').length = 1){
							//ищем наименьшее кол-во ПТ на входе среди всех типов ПТ
							inc = getMinInputVal($('div.divEditInElem input.inputEditPopUpObj'));
							//находим значение на выходе как разницу (наименьшее на входе - значение в браке)
							$('div.divEditOutElem input.inputEditPopUpObj').val(inc - +this.value);
						}
					}
					break;
					
				default:
					showError('Ошибка ввода параметров.')
					break;
				}
			}
		});
	}
	
	function getMinInputVal(someInput){
		var inc = someInput.map(function(){
			return $(this).val();	
		}).get();
		return Math.min.apply( Math, inc );
	}
	
	function checkEditedObj(pRloId){
		var gotNegativ = false;
		//проверка на отрицательные значения(появляются в результате пересчётов)
		$("input.inputEditPopUpObj").each(function(){
			if(+this.value < 0)
				gotNegativ = true;
		});
		if(gotNegativ){
			showError('Присутствуют отрицательные значения - сохранять нельзя.');
		}else{
			$('div#plan-editRloObj-popup div.popup-actions a').unbind();
			closePopup($('#plan-editRloObj-popup'));
			saveRloObjData(pRloId);
		}
	}
	
	function saveRloObjData(pRloId){
		
		var inObj = [];
		$('div#inEditPopUpObj input.inputEditPopUpObj').each(function(index, value){
			inObj.push( {ut_id : this.getAttribute('name'), ut_count : this.value} ); 
		});
		
		var outObj = [];
		$('div#outEditPopUpObj input.inputEditPopUpObj').each(function(index, value){
			outObj.push( {ut_id : this.getAttribute('name'), ut_count : this.value} ); 
		});
		
		var defObj = [];
		$('div#defectEditPopUpObj input.inputEditPopUpObj').each(function(index, value){
			defObj.push( {ut_id : this.getAttribute('name'), ut_count : this.value} ); 
		});
		
		var recountId = ($('input#inputRlosUnitRecount:checked').length > 0 
							? $('input#inputRlosUnitRecount:checked').length + $('input#inputRlosDefectCancel:checked').length
							: 0);
									
		var sendObj = {
					recount : recountId,
					rloId : +pRloId,
					inObj : inObj,
					outObj : outObj,
					defObj : defObj
				};
		$.ajax({
			url : "${model.planUrl}" + "saveEditRloObjData/",
			contentType:"application/json",    	
			type : "POST",
			dataType : 'json',  
			data : JSON.stringify(sendObj),
			success : function(saveObjData){
				if(saveObjData.result != "ERROR")
					rloGrid.reload(function(){
						rloGrid.goToLineWIntoView(pRloId);
						$('div#msg-popup div.popup-body').html(saveObjData.data);
						showPopup($("#msg-popup"));
					});
				else
					showError(saveObjData.text);
			},
			error : function(saveObjData){
				showError(saveObjData.responseText ? saveObjData.responseText : saveObjData.status + " " + saveObjData.statusText);
			}
		});
	}

</script>
	