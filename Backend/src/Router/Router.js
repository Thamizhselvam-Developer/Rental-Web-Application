const express = require("express")
  const dotEnv = require("dotenv") ;

const upload = require("../Middleware/uploadMiddleware")
const RegistrationController =require("../Controller/RegistrationController")
const LoginController =require ("../Controller/LoginController")
const LoginServices =require ("../Service/Login_Authication")
const Login_Authication =require ("../Service/Login_Authication")
const VechiletypeMaster =require ("../Controller/SuperAdmin/VehicletypeMaster")
const BrandtypeMaster=require("../Controller/SuperAdmin/BrandtypeMaster")
const FueltypeMaster=require("../Controller/SuperAdmin/FueltypeMaster")
const TransmissiontypeMaster=require("../Controller/SuperAdmin/TransmissiontypeMaster")
const RentalFormController = require("../Controller/ShopAdmin/RentalFormController")
const CardDataController = require("../Controller/UserAdmin/CardDataController") 
//Admin 
const AdminRoleController=require("../Controller/SuperAdmin/AdminRoleController")

const SuperLoginController =require("../Controller/SuperAdmin/SuperLoginController")
const ShopAdminLoginContoller = require("../Controller/ShopAdmin/ShopAdminLoginController")
//shop-admin
const FormStatus = require("../Controller/SuperAdmin/FormStatus")

const AddVehicle = require("../Controller/ShopAdmin/AddVehicle")
const route = express.Router()
route.post("/superloginData",SuperLoginController.SuperLoginControllerData)
route.post("/superlogin",SuperLoginController.SuperLogin)
route.get("/superloginGet/:id",SuperLoginController.SuperLoginGet)

route.post("/ShoploginData",ShopAdminLoginContoller.ShopAdminLogin)
route.get("/shoploginGet/:id",ShopAdminLoginContoller.shoploginGet)


route.post("/status/:bit/:id",FormStatus.formStatus)

route.post("/user", upload.single("File"), RegistrationController.RegistraionControllerFucntion);
route.get("/userImage/:id", RegistrationController.RegistraionControllerProfile);


route.get("/userGet/:id",RegistrationController.RegistraionControllerGet)

route.post("/login",LoginController.Login)


route.get("/CardData",CardDataController.cardDataGetControl)
route.get("/BookingDetails/:id",CardDataController.cardDataGetControlById)
route .get("/api/latestvehicle",CardDataController.LatestDateController)

route.post("/vehicletypesUpdate",VechiletypeMaster.VehicleControllerUpdate)
route.post("/vehicletypes",VechiletypeMaster.vehicle)
route.get("/api/VehicleTypes",VechiletypeMaster.VehicleControllerGet)
route.post("/brandtypes",BrandtypeMaster.brand)
route.get("/api/BrandTypes",BrandtypeMaster.BrandControllerGet)
route.post("/Brandupdate",BrandtypeMaster.BrandControllerUpdate)

route.post("/fueltypes",FueltypeMaster.fuel)
route.get("/api/FuelTypes",FueltypeMaster.FuelControllerGet)
route.post ("/FuelUpdate",FueltypeMaster.FuelControllerUpdate)



route.post("/transmittypes",TransmissiontypeMaster.transmission)
route.get("/api/TransmissionTypes",TransmissiontypeMaster.TransmissionControllerGet)
route.post("/TransmissionUpdate",TransmissiontypeMaster.TransmissionControllerUpdate)



route.post("/rentalform", upload.fields([
  { name: "OwnerImage", maxCount: 1 },
  { name: "image", maxCount: 1 },
  { name: "ShopImage", maxCount: 5 },
    ]),RentalFormController.RentalFormControllerFunction)
route.get("/OwnwerInfo/:id",RentalFormController.RentalFormControllerGet)

route.get("/AreaData",CardDataController.SearchCardDataController)
route.post("/Addvehicle",
    upload.fields([
  { name: "FrontImage", maxCount: 1 },
  { name: "image", maxCount: 5 }
    ]),AddVehicle.AddVehicleData)

route.patch("/AddvehicleUpdate", upload.fields([
  { name: "FrontImage", maxCount: 1 },
  { name: "AdditionalImages", maxCount: 5 }
]),AddVehicle.AddVehicleDataUpdate)

route.get("/AddvehicleGet/:id",AddVehicle.AddvehicleGet)

route.get("/AddvehicleGetImages/:id",AddVehicle.AddVehicleGetImages)

route.get("/AddVehicleGetByID/:id",AddVehicle.AddVehicleGetByID)


route.post("/baserole",AdminRoleController.baseControl)
route.get("/api/BaseRole",AdminRoleController.baseControllerGet)
route.post("/UpdateData",AdminRoleController.baseControllerUpdate)


route.get("/", (req, res) => {
    res.send("HI GUYS ITS CONNECTED ");
});


// Database schema for context



module.exports = {route};
