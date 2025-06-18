const dataconnect =require("../../DataBaseConnection")

const TransmissionTypeModelDataGet=()=>{
    return new Promise((resolve, reject) => {
        const query=`SELECT id,name from transmission_tbl`
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

const TransmissionTypeModelUpdate=(id,name,updateBy)=>{
    return new Promise((resolve, reject) => {
        dataconnect.query(`UPDATE transmission_tbl SET name=? ,updatedBy=? where id=?`,[name,updateBy,id],(err,result)=>{
            if (err) {
                console.log(error.message)

                return reject( );
            }
            else{
                console.log(result)
                return resolve();
            }

            
        })
       

    })
}



const TransmissionTypeModelData=(name,CreatedBy)=>{
    return new Promise((resolve, reject) => {
        const query=`INSERT INTO transmission_tbl(name,createdBy) VALUES(?,?)`;
        dataconnect.query(query,[name,CreatedBy], (error,results)=>{
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

module.exports={TransmissionTypeModelData,TransmissionTypeModelDataGet,TransmissionTypeModelUpdate}