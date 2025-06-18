const RentalFormServices = require("../../Service/ShopAdmin/RentalFormServices")

const Email = require("../../Utilities/Email/Email");


const RentalFormControllerGet = async (req, res) => {

  try {
    const id = Number(req.params.id)
    const Data = await RentalFormServices.RentalFormServicesGet(id)

    res.send(Data)
  }
  catch (err) {
    res.send("Not Valid")
  }


}



const RentalFormControllerFunction = async (req, res) => {


  try {
let files = req.files
    let output = req.body;
    // console.log(output,"OUTPUT",files)
     await RentalFormServices.RentalFormServicesData(output,files)
     .then(async(result)=>{
      console.log(result)
                        if(result.password){
                            const options = {
                                to: output.Email,
                                subject:"Password" ,
                                message: result.hashedPassword,
                            };
                    
                            await Email.sendEmail(options);
                            res.send({
                                info: "Check your mail!",
                                message:"Added"
                            })
            
                        }
                        // console.log(result.password,email)
                    })
  
  }
  catch (err) {
    res.send(err)
  }






  // });

};

module.exports = { RentalFormControllerFunction, RentalFormControllerGet };
