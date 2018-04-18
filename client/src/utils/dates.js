import moment from 'moment';

export default {
	//convert date from sql format for calendar
	format_for_calendar: function(sql_date){
		if(!sql_date) return;
		try {
		  let date = sql_date.split('-');
		  date[0] = parseInt(date[0], 10);
		  date[1] = parseInt(date[1]-1, 10);
		  date[2] = parseInt(date[2].substr(0,2), 10);
		  return new Date(date[0], date[1], date[2]);
		}
		catch(error){
		  	console.log('no data in format_for_calendar')
		};
	},

	format_for_display: function(sql_date){
		let mdate = moment(sql_date);
		return mdate.format('LL');
	}

}
