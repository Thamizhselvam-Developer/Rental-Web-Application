const dataconnect = require("../../DataBaseConnection");

const foemModelGet=(isApproved,id)=>{

    return new Promise((resolve, reject) => {
        const query = `UPDATE rental_shop_tbl SET isApproved =? WHERE id=? `

    dataconnect.query(query, [isApproved,id], (error,results) => {
                       if (error) {
                           console.log("Database error: " + error.message)
           
                           return reject("Database error: " + error.message);
                       }
                       console.log(results,"MODELS")
                       resolve(results);
                   });
    })

}

module.exports={foemModelGet}