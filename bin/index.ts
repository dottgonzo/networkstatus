import netstatus from "../index"

netstatus().then(function(d){
        console.log(JSON.stringify(d));
}).catch(function(err){
    console.log(err);
});