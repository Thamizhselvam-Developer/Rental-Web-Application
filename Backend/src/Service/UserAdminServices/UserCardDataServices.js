
const CardDataModel = require("../../Model/USerAdminModel/CardDataModel")

const LatestDateServices = async () => {
    
    try {
        let date = [];
        for (let i = 0; i <= 3; i++) {
            date.push(new Date().getFullYear() - i);
        }
        const vehicles = await CardDataModel.LatestDataModel(date);
        return vehicles

       
}
catch(err){
return err
}
}

const cardDataGetServicesByID = async(Id)=>{
 
      try {
    const Data = await CardDataModel.cardDataGetModelByID(Id);
   
    const vehicle = Data[0];

     let arr=[]
         Data.map((items)=>{
         arr.push(items.image_name)
        })

return {Data:vehicle,images:arr}

  } catch (err) {
    return { error: err.message };
  }
}

const cardDataGetServices = async () => {
    
 
        try {
            const Data = await CardDataModel.cardDataGetModel();
            return {data:Data}
        }
        catch(err){
            console.log(err.message)
            return err.message

        }
    }
const SearchCardDataServices=()=>{
     return new Promise((resolve, reject) => {
    
    
            try{
    
                CardDataModel.SearchCardDataGet()
                .then((results)=>{
                    resolve(results)
        
            })
            .catch((err)=>{
                        reject(err)
            })
            }
            catch(err){
    
            }
          
            
        })
}
module.exports={cardDataGetServices,cardDataGetServicesByID,LatestDateServices,SearchCardDataServices}