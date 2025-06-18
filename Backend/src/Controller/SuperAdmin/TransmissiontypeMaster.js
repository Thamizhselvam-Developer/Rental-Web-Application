const TransmissionServices = require ("../../Service/SuperAdmin/TransmissionServices")

const TransmissionControllerGet= async(req,res)=>{
    try{
        await TransmissionServices.TransmissionServicesDataGet()
      .then((results)=>{
        res.send(results)
      }) 
      .catch((err)=>{
        res.send("Not Valid")
      })

    }
    catch(err){


    }
}

const TransmissionControllerUpdate=(req,res)=>{
    return new Promise((resolve, reject) => {
        let body=""
    req.on("data",(packet)=>(body+=packet));
    req.on("end",()=>{
        try{
            let output = JSON.parse(body)
            console.log(output)
            TransmissionServices.TransmissionServicesUpdate(output)
            resolve(res.send("Transmission Added"))

        }
        catch(error){
            console.log(error.message +"no")
            reject()


        }


    })

    })  
}

const transmission=(req,res)=>{
    return new Promise((resolve, reject) => {
        let body=""
    req.on("data",(packet)=>(body+=packet));
    req.on("end",()=>{
        try{
            let output = JSON.parse(body)
            console.log(output)
            TransmissionServices.TransmissionServicesData(output)
            resolve(res.send("Transmission Added"))

        }
        catch(error){
            console.log(error.message +"no")
            reject()


        }


    })

    })
    
}
module.exports={transmission,TransmissionControllerGet,TransmissionControllerUpdate}