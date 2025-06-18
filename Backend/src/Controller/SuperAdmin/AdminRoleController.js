const AdminRoleService=require("../../Service/SuperAdmin/AdminRoleService")
require("dotenv").config();
const Email = require("../../Utilities/Email/Email");


const baseControllerGet = async (req, res) => {
    try {
        const data = await AdminRoleService.baseServiceGetData();
        res.send(data);
    } catch (error) {
        res.status(500).send("ERROR");
    }
};

const baseControl = async(req, res) => {
        
            try {
                let output = req.body;
                const email = output.email
                 await AdminRoleService.baseServiceData(output)

                .then(async(result)=>{
                    if(result.password){
                        const options = {
                            to: email,
                            subject:"Password" ,
                            message: result.password,
                        };
                
                        await Email.sendEmail(options);
                        res.send({
                            info: "Check your mail!",
                            message:"Added"
                        })
        
                    }
                    // console.log(result.password,email)
                })
                
                
            } catch (error) {
                console.log("Adding CError:", error.message);
                res.send("Error adding data");
            }
};


const baseControllerUpdate = async(req, res) => {
    
            try {
                let output = JSON.parse(body);
                console.log(output,"controller")
                await AdminRoleService.baseServiceUpdateData(output);
                res.send("Updated");
                resolve();
            } catch (error) {
                console.log("Update CError:", error.message);
                res.status(500).send("Error updating data");
                reject(error);
            }
};

module.exports = { baseControl, baseControllerGet, baseControllerUpdate };



