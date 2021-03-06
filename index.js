window.onload = function() {
	var selectedField = document.getElementById('selectedField');
	var selectedOperator = document.getElementById('selectedOperator');
	var selectedValue = document.getElementById('selectedValue');

	var addBtn = document.getElementById('addBtn');
	var clearBtn = document.getElementById('clearBtn');
	var delBtn = document.getElementById('delBtn');

	var newRule = {
		selectedFieldVal: '',
		selectedOperatorVal: '',
		selectedValueVal: ''
	};
	var clearInputs = function() {
		selectedField.value = '';
		selectedOperator.value = '';
		selectedValue.value = '';
	};

	var rulesArr = [];
	selectedField.onchange = function(e) {
		newRule.selectedFieldVal = e.target.value;
	};
	selectedOperator.onchange = function(e) {
		newRule.selectedOperatorVal = e.target.value;
	};
	selectedValue.onchange = function(e) {
		newRule.selectedValueVal = Math.round(+e.target.value);
	};

	addBtn.onclick = function(e) {
		e.preventDefault();
		var newRuleObj = Object.assign({}, newRule);
		rulesArr.push(newRuleObj);
		clearInputs();
		console.log(rulesArr);
	};

	clearBtn.onclick = function(e) {
		e.preventDefault();		
		rulesArr.splice(0,rulesArr.length);
		rulesArr.push({});	
		clearInputs();
		console.log(rulesArr);				
	};
	
	delBtn.onclick = function(e) {
		e.preventDefault();	
		var newRulesArr = [];
		for (var i = 0; i < rulesArr.length; i++) {
			if (JSON.stringify(rulesArr[i]) === JSON.stringify(newRule)) {
				continue;
			}
			newRulesArr.push(rulesArr[i]);
		};
		rulesArr = newRulesArr;
		clearInputs();	
		console.log(rulesArr);	
	};
};