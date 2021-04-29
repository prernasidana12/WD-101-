
/* The function should return the names of those entries whose date is the current date. The names should be separated by a comma.

For example, here's an array of three entries and assume the date now is 2021-01-21.

[{ name: "Johny" , date: "2021-01-21T02:53:42+05:30" }, { name: "Sugar" , date: "2021-01-22T02:53:42+05:30" }, { name: "Sun" , date: "2021-01-21T03:53:42+05:30" }]

The function should return: ``` Johny,Sun ```. Please note that the names are separated by a comma without space.
*/


function todaysEntries(entries) {
	// Complete the function
	let namesResult=[]; 
	let currentDate = new Date().toLocaleDateString();
	let filterDate=(newDate)=>new Date(newDate).toLocaleDateString();
	entries.forEach(item=>{
	if(filterDate(item.date)===currentDate)
		namesResult.push(item.name);
	});
	return namesResult.join(",");
}

module.exports = todaysEntries;
