const dataconnect =require("../../DataBaseConnection")

const VehicleTypeModelDataGEt =()=>{
    return new Promise((resolve, reject) => {
        


        const query=`SELECT id,name,description from categories_tbl`
        dataconnect.query(query,(err,result)=>{
            if(err){
                return reject(err)

            }
            else{
            return resolve(result)


            }
        })
    })
}



const VehicleTypeModelDataUpadate =(name,des,updateBy,id)=>{
    
    return new Promise((resolve, reject) => {
        console.log(name,des,id     ,"MODELS")

        dataconnect.query(`UPDATE categories_tbl SET name=?,description=?,updatedBy=? where id=?`,[name,des,updateBy,id],(err,result)=>{
                    console.log(result)
        
                    if(err){
                      console.log("model reject"+err)
                      return  reject(err)
                    }
                    else{
                      // console.log("model resolved"+JSON.stringify(result))
                        console.log(result+"Model")
                        return resolve(result)
                        
                    }
        })

   })}



const VehicleTypeModelData=(name,des,CreatedBy)=>{
    return new Promise((resolve, reject) => {
        const query=`INSERT INTO categories_tbl(name,description,createdBy) VALUES(?,?,?)`;
        dataconnect.query(query,[name,des,CreatedBy], (error,results)=>{
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
module.exports={VehicleTypeModelData,VehicleTypeModelDataGEt,VehicleTypeModelDataUpadate}