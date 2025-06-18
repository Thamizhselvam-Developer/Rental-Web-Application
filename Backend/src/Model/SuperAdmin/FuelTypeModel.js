const dataconnect =require("../../DataBaseConnection")

const FuelTypeModelDataGet=()=>{
    return new Promise((resolve, reject) => {
        const query=`SELECT id,name from fuel_type_tbl`
        dataconnect.query(query,(error,results)=>{
            if(error)
            {
                return reject();
            }
            else{
                return resolve(results);
            }
        })
        
    })

}


const FuelTypeModelUpdate=(id,name,updatedBy)=>{
    console.log(id,name)
    return new Promise((resolve, reject) => {
  
        
            dataconnect.query(`UPDATE fuel_type_tbl SET name=?,updatedBy=? where id=?`,[name,updatedBy,id],(err,result)=>{
            if (err) {
                console.log(err.message)

                return reject( );
            }
            else{
                console.log(result)
                return resolve();
            }

            
        })
       

    })
}


const FuelTypeModelData=(name,createdBy)=>{
    console.log(name,createdBy)
    return new Promise((resolve, reject) => {
        const query=`INSERT INTO fuel_type_tbl(name,createdBy) VALUES(?,?)`;
        dataconnect.query(query,[name,createdBy], (error,results)=>{
            if (error) {
                console.log(error.message)

                return reject( );
            }
            else{
                console.log(results)
                return resolve();
            }

            
        })
       

    })
}

module.exports={FuelTypeModelData,FuelTypeModelDataGet,FuelTypeModelUpdate}