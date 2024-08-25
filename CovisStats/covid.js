$.ajax({
    type: 'GET',
    url: 'https://data.covid19india.org/data.json',
    success : function(response){
        console.log(response.statewise[0])
        for (var i=0;i<response.statewise.length;i++){

            var tablerow=`<tr><td>${response.statewise[i].state}</td><td>${response.statewise[i].confirmed}</td><td>${response.statewise[i].active}</td><td>${response.statewise[i].recovered}</td><td>${response.statewise[i].deaths}</td></tr>`
            $('#tbody').append(tablerow)
        }
        $('#covidtable').DataTable();
    },
    error : function(error){
        console.log(error)
    }
})