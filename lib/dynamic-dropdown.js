function accessMongo(){
    return $.ajax({
        url: dbAddress + collectionName,
        type: "GET",
        data: {"filter_status": "active"},
        dataType: 'JSONP',
        jsonp: 'jsonp',
        success: function(data){
            return data;
        }
    });
}

function generateDropDown(data) {
    var externalUrl = window.location.search.match(/url=([^&]+)/);
    if (data.rows.length > 0) {
        if(externalUrl !== null){
            externalUrl = externalUrl[1].replace(/%2F/g, "/");
            $( '#input_baseUrl' ).append( '<option value="' + externalUrl + '"> External resourse: ' + externalUrl + '</option>' );
        }
        var id = 1;
        for ( var i = 0; i < data.rows.length; i++ ) {
            if(data.rows[i].swagger){
                $( '#input_baseUrl' ).append( '<option name="' + id + '" value="' + data.rows[i].swagger + '">' + data.rows[i].name +': ' + data.rows[i].swagger + '</option>' );
                data.rows[i].id = id++;
            }
        }
        return data.rows[0].swagger;
    } else{
        console.log("No Data found in MongoDB response");
    }
}
