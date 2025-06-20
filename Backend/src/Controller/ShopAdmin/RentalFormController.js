const RentalFormServices = require("../../Service/ShopAdmin/RentalFormServices")

const Email = require("../../Utilities/Email/Email");
require("dotenv").config();


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
       const  Data=   await RentalFormServices.RentalFormServicesData(output,files)
        res.send({msg:"Form Submitted Succesfully"})
                 } 
  catch (err) {
    console.log(err.messge)
    res.send("Error")
  }






  // });

};

module.exports = { RentalFormControllerFunction, RentalFormControllerGet };
