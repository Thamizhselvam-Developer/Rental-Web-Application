const BrandServices = require ("../../Service/SuperAdmin/BrandServices")




const BrandControllerUpdate= async(req,res)=>{
    return new Promise((resolve, reject) => {

        try{
            let output = req.body
            console.log(output)
            BrandServices.BrandServicesUpdate(output)
            resolve(res.send("Brand Added"))

        }
        catch(error){
            console.log(error.message +"no")
            reject()


        }


    })

}





const BrandControllerGet= async(req,res)=>{
    try{
            await BrandServices.BrandServicesDataGet()
      .then((ress)=>{
        res.send(ress)
      }) 
      .catch((err)=>{
        res.send("Not Valid")
      })

    }
    catch(err){


    }
}


const brand=(req,res)=>{
    return new Promise((resolve, reject) => {
 
        try{
            let output = req.body
            console.log(output)
            BrandServices.BrandServicesData(output)
            resolve(res.send("Brand Added"))

        }
        catch(error){
            console.log(error.message +"no")
            reject()


        }


    })

    
}
module.exports ={brand,BrandControllerGet,BrandControllerUpdate}