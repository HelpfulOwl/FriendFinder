module.exports = function(app){
    var check1 = false;
    var check2 = false;
    var values1 = [];
    var values2 = [];
    var name1;
    var name2;
    app.post("/api/new",function(req,res){
        //console.log("REQ BODY BACK END: ",req.body)
        person1(req);
        console.log("THIS IS CHECK1: ", check1)
        
       
       
    });

    app.get("/api",function(req,res){
        res.json()
    })

    function person1 (req){
        name1 = req.body.name+" "+req.body.last;
        values1 = req.body.vals;
        console.log("THIS IS VALUES1: ",values1);
        check1 = true;
    }

    function person2 (req){
        name2 = req.body.name+" "+req.body.last;
        values2 = req.body.vals;
        console.log("THIS IS VALUES2: ",values2);
        check2 = true;
    }

}