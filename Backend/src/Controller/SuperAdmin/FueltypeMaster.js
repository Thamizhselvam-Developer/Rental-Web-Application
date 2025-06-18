const FuelServices = require ("../../Service/SuperAdmin/FuelServices")


const FuelControllerUpdate=(req,res)=>{
    return new Promise((resolve, reject) => {
        let body=""
 
        try{

            let output = req.body
            FuelServices.FuelServicesUpdate(output)
            resolve(res.send("Fuel Added"))

        }
        catch(error){
            console.log(error.message +"no")
            reject()


        }


    })

}



const FuelControllerGet=async(req,res)=>{
    try{
        await FuelServices.FuelServicesDataGet()
        .then((results)=>{
            res.send(results)
        })
        .catch((error)=>{
            res.send("error")
        })
    }
    catch(error){
        
    }

}

const fuel=(req,res)=>{
    return new Promise((resolve, reject) => {
        
        try{
            let output = req.body
            console.log(output,"FUEL")
            FuelServices.FuelServicesData(output)
            resolve(res.send("Fuel Added"))

        }
        catch(error){
            console.log(error.message +"no")
            reject()


        }


    })

    
}
module.exports={fuel,FuelControllerGet,FuelControllerUpdate}