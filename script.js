/*
You can check out my codepen for demo
$( "#from, #to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
			minDate:'-12m',// only allow back by 1 year only
			maxDate: '+12m', // 3 month from today
			showOn: "both",
			buttonImage: 'img/month_calendar.png',
			dateFormat: 'dd-mm-yy', // 'yy-mm-dd' , 'MM yy'
            onSelect: function( selectedDate, inst ) {
                if(this.id == 'from'){
                  var dateMin = $('#from').datepicker("getDate");

                  var rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 1); //  ,dateMin.getDate() + 1
                  var rMax = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 90); 
                  $('#to').val($.datepicker.formatDate('dd-mm-yy', new Date(rMax))); 
                  $('#to').datepicker("option","minDate",rMin); // min and max for to
                  $('#to').datepicker("option","maxDate",rMax);                    
                }
                
            }
        });

*/
$(function(){
		$( "#from, #to, #datepicker" ).datepicker({
				inline: true,
				//nextText: '&rarr;',
				//prevText: '&larr;',
				showOtherMonths: true,
				//dateFormat: 'dd MM yy',
				dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				//showOn: "button",
				//buttonImage: "img/calendar-blue.png",
				//buttonImageOnly: true,
			});
		});
