const dataconnect = require("../../DataBaseConnection");

// const RentalFormModelGet=()=>{
//  return new Promise((resolve, reject) => {
//         dataconnect.query(`SELECT name,phoneNumber,email,address,aadhaarNumber from shop_owner_tbl`,(err,result)=>{
//               if(err){
//                   console.log(err.message)
//                 return  reject(err)
//               }
//               else{
//                   console.log(result)
//                   return resolve(result)
                  
//               }
//   })

//     })
// }
const RentalFormArea=(Area)=>{
  return new Promise((resolve, reject) => {
                const query = `INSERT INTO Area_tbl (Area_name) VALUES (?)`;
              
        
                dataconnect.query(query, [Area], (error,results) => {
                    if (error) {
                        console.log("Database erroru: " + error.message)
        
                        return reject("Database error: " + error.message);
                    }
                    resolve(results.insertId);
                });
            });
}

const RentalFormModelGet=(id)=>{
    return new Promise((resolve, reject) => {
           dataconnect.query(`SELECT so.id AS owner_id,so.name AS owner_name,so.phoneNumber,so.email, so.address AS owner_address, so.aadhaarNumber,
            rs.id AS shop_id,
            rs.name AS shop_name,
            rs.address AS shop_address,
            rs.gst_no,
            rs.pincode,
            rs.city,
            rs.state
            FROM 
            shop_owner_tbl AS so
            JOIN 
            rental_shop_tbl AS rs 
            ON 
            so.rentalShop_id = rs.id

        WHERE isApproved =? 
            `,[id],(err,result)=>{
                 if(err){
                     console.log(err.message)
                   return  reject(err)
                 }
                 else{
                     return resolve(result)
                     
                 }
     })
   
       })
   }
const RentalFormLicense=(licenseDataName,licenseDataPath)=>{
   

    return new Promise((resolve, reject) => {
        // console.log(name,path,"MODEL")
                const query = `INSERT INTO rental_License_img_tbl (image_name,image_path) VALUES(?,?)`;
              
        
                dataconnect.query(query, [licenseDataName,licenseDataPath], (error,results) => {

                    if (error) {
                        console.log("Database erroru: " + error.message)
        
                        return reject(error);
                    }else{
                    resolve(results.insertId);

                    }
                });
            });
}
const RentalFormImages =(name,path,ShopId)=>{
    const Values = (name,path).map((item)=>[item,item,ShopId])
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO rental_shop_img_tbl (image_name,image_path,Rental_shop_id) VALUES ?`;
      

        dataconnect.query(query, [Values], (error,results) => {

            if (error) {
                console.log("Database errory: " + error.message)

                return reject(error);
            }
            //  const insertIdArr= []
            // let  i=0;
            //  while(i<Values.length)
            //  {
            //     insertIdArr.push(results.insertId)
            //     i++
            //  }

            // console.log(insertIdArr,"ids")
            resolve(results);
        });
    });
}



const RentalFormOwnerData = (username,contactNumber,email,address,aadhaarNumber,password,proofName,proofPath,shopData) => {
    
   

    return new Promise((resolve, reject) => {


        const query = `INSERT INTO shop_owner_tbl (name,phoneNumber,email,address,aadhaarNumber,password,proofName,proofPath,rentalShop_id) VALUES (?,?,?,?,?,?,?,?,?)`;
      

        dataconnect.query(query, [username,contactNumber,email,address,aadhaarNumber,password,proofName,proofPath,shopData], (error,results) => {
            if (error) {
                console.log("Database error:r " + error.message)


                return reject(error);
            }
            resolve(results);
        });
    });
};

const RentalFormShopData = (id,shopName,streetAddress,gstNumber,pinCode,city,state,LicenseimageData,AreaData) => {
  

   
    return new Promise((resolve, reject) => {

        const query = `INSERT INTO rental_shop_tbl (id,name,address,gst_no,pincode,city,state,rental_License_img_id,Area_id) VALUES (?,?,?,?, ?, ?, ?, ?,?)`;
      

        dataconnect.query(query, [id,shopName,streetAddress,gstNumber,pinCode,city,state,LicenseimageData,AreaData], (error,results) => {
            if (error) {
                console.log("Database errorw: " + error.message)


                return reject("Database error: " + error.message);
            }
            // console.log(results.insertId)
            resolve(id);
        });
       
    });
}


module.exports = { RentalFormShopData,RentalFormOwnerData,RentalFormImages,RentalFormLicense,RentalFormModelGet,RentalFormArea};
