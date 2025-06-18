import { useState } from "react";
//import {BaseAdmin} from "../../Db/BaseAdmin"
import Input from "../../Uitilites/Input"
import axios from "axios"
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import Loader from "../../@UI/loader";

function AdminRole() {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  const [show,setshow]=useState(false)
  const [Editshow,setEditshow]=useState(false)
  const [getdata,setgetdata]=useState([])
  const [loading,setloading]=useState(false)
  const[editFormData,seteditFormData]=useState({id:"",name:"",email:"",adminroleName:""})
  const [formData, setFormData] = useState({

    id: "",
    name: "",
    email:"",
    adminroleName:"",
  });


  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    // if (formData.id == "") {
    //   newErrors.id = "Id is required";
    // }

   if (!formData.name.trim()) {
    newErrors.name = 'Username is required';
} else if (formData.name.length < 3) {
    newErrors.name = 'Username must be at least 3 characters long';
} else if (/\d/.test(formData.name)) { 
    newErrors.name = 'Username must not contain numbers';
}

if (!formData.email.trim()) {
    newErrors.email = "Email address is required";
} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address";
}

if (!formData.adminroleName.trim()) {
    newErrors.adminroleName = "Role is required";
}

    

    return newErrors;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
    setloading(true)


      //console.log(formData)
         

      try {
        const response = await axios({
          method: "POST",
          url: `${app}baserole`,
          data: formData,
          headers: { "Content-Type": "application/json" },


        });

         console.log(response.data)
        if (response.data.message == "Added") {


            setshow(!show)
            
            setFormData({
              
              name: "",
              email:"",
              adminroleName:"",

            }

            );
            // navigate("/admin")



        }


      }

      catch (error) {
        console.log(error);
      }
    }

     
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 1000); 
  
    return () => clearTimeout(timeout);
  }, []);
  
  const get=async(items)=>{
    console.log(items.id)
    seteditFormData({
      id:items.id,
      name:items.name,
      email:items.email,
      adminRoleId :items.adminRoleId,
      adminroleName:items.adminroleName
    })
  }

  const handleChangeEdit=(e)=>{
    seteditFormData({...editFormData,[e.target.name]:e.target.value})
  }
  const updateData=async()=>{
    
    try{

      const response = await axios({
        method: "POST",
        url: `${app}UpdateData`,
        data: editFormData,
        headers: { "Content-Type": "application/json" },


      });
        console.log(response.data)
      if(response.data == "Updated"){
        alert ("Updated")


        seteditFormData({ 
          name: "",
          email:"",
          adminroleName:"",})

      }

    }
    catch(error){
      console.log(error+"Update Error")

    }
  }
   const Adminget=async()=>{
    await axios.get(`${app}api/BaseRole`)
    .then(response=>{
      setloading(false);
      const Data=response.data
      console.log(response)
      setgetdata(Data)
  
    })
   }
   useEffect(()=>{

Adminget()
   },[show])
    



  return (
    <>

{
        
        loading &&(
          <Loader/>
        )

    }
    
     <div className="flex justify-end">
        <button onClick={() => setshow(!show)} className="border-2 bg-red-500  rounded-xl p-1 mr-4 mt-2 text-sm px-4 font-bold text-white">Add</button>
        </div>
        {show ? (
                <div className=" absolute left-[0px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
                  <div className="rounded-xl ">
                  <div class="flex justify-center items-center min-h-screen">
                  {/* <div onClick={() => setshow(!show)} className="ml-80 text-2xl">
                        <IoMdClose />
                        </div> */}
                    <form onSubmit={handleSubmit}className="bg-white p-6 rounded-lg shadow-md w-96 ">
                    <div onClick={() => setshow(!show)} className="ml-80 text-2xl">
                        <IoMdClose />
                        </div>
                      {/* <div className="">
                      <label
                          className="block mb-2 mt-4">
                            ID</label>
                        <Input 
                        type={"text"}
                        name={"id"}
                        onChange={handleChange}
                        value={formData.id}
                        className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.id ? "border-red-500" : "border-gray-300"} `}             
                        placeholder={"Enter your ID" }/>
                      </div>
                      {
                        errors.id&&(
                          <p className="mt-1 text-xs text-red-500">{errors.id}</p>
                        )
                      } */}

                        
                        <label 
                        className="block mb-2 mt-2">
                            Name</label>
                            <Input 
                         type={"text" }
                         name={"name"}
                         onChange={handleChange}
                         value={formData.name}
                         className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.name ? "border-red-500" : "border-gray-300"} `}
                          placeholder="Enter your name" />
                          {
                        errors.name &&(
                          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                        )
                      }
                      

                        <label
                         className="block mb-2 mt-2">
                            Email</label>
                            <Input  
                        type={"text" }
                         name={"email" }
                         onChange={handleChange}
                         value={formData.email}
                         className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.email ? "border-red-500" : "border-gray-300"} `}

                          placeholder="Enter your email" />

{
                        errors.email &&(
                          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )
                      }
                      
                        <label 
                         className="block mb-2 mt-2">
                            Role</label>
                       <Input
                         type={"text"}  
                         name={"adminroleName"}
                         onChange={handleChange}
                         value={formData.adminroleName} 
                         className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.adminroleName ? "border-red-500" : "border-gray-300"} `}

                          placeholder="Enter your Role" />
                          {
                        errors.adminroleName &&(
                          <p className="mt-1 text-xs text-red-500">{errors.adminroleName}</p>
                        )
                      }
                         <button type="submit"  className="w-full bg-red-500 text-white  mt-4 p-2 rounded-md hover:bg-red-600">Submit</button>
                    </form>
                 

                    
                </div>

                  </div>
                  </div>
                
                
                
                
                ):null}
      
      <div className="overflow-x-auto mt-5 mx-4 rounded-3xl">
        
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              {/* <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th> */}
              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>

            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {getdata.map((items) => (
              <tr key={items.id} className="hover:bg-gray-50">
                {/* <td className="px-12 py-4 text-sm text-gray-700">
                  {items.id}
                </td> */}
                <td className="px-12 py-4 text-sm text-gray-700">
                  {items.name}
                </td>
                <td className="px-12 py-4  text-sm text-gray-700">
                  {items.email}
                </td>
                <td className="px-12 py-4  text-sm text-gray-700">
                  {items.adminroleName}
                </td>
    
                <td className="px-4 py-4 text-sm text-gray-700 ">
                  <div className="flex gap-8">
                    <div onClick={()=>setEditshow(!Editshow)}  className="">
                      <button onClick={()=>get(items)} className="bg-gray-200 hover:bg-green-100 hover:text-green-600 px-3 py-1 rounded-md text-sm transition-colors duration-300">
                        Edit
                      </button>
                    </div>

                    {Editshow && (
                <div className=" absolute left-[0px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
                  <div className="rounded-xl ">
                  <div class="flex justify-center items-center min-h-screen">
                  {/* <div onClick={() => setEditshow(false)} className="ml-80 text-2xl">
                        <IoMdClose />
                        </div> */}
                    <form className="bg-white p-6 rounded-lg shadow-md w-96 ">

                    <div onClick={() => setEditshow(false)} className="ml-80 text-2xl">
                        <IoMdClose />
                    </div>
                      {/* <div className="">
                      <label
                          className="block mb-2 mt-4">
                            ID</label>
                        <Input 
                        type={"text"}
                        name={"id"}
                        onChange={handleChange}
                        value={formData.id}
                        className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.id ? "border-red-500" : "border-gray-300"} `}             
                        placeholder={"Enter your ID" }/>
                      </div>
                      {
                        errors.id&&(
                          <p className="mt-1 text-xs text-red-500">{errors.id}</p>
                        )
                      } */}

                        
                        <label 
                        className="block mb-2 mt-2">
                            Name</label>
                            <Input 
                         type={"text" }
                         name={"name"}
                         onChange={handleChangeEdit}
                         value={editFormData.name}
                         className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.name ? "border-red-500" : "border-gray-300"} `}
                          placeholder="Enter your name" />
                          {
                        errors.name &&(
                          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                        )
                      }
                      

                        <label
                         className="block mb-2 mt-2">
                            Email</label>
                            <Input  
                        type={"text" }
                         name={"email" }
                         onChange={handleChangeEdit}
                         value={editFormData.email}
                         className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.email ? "border-red-500" : "border-gray-300"} `}

                          placeholder="Enter your email" />

{
                        errors.email &&(
                          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )
                      }
                      
                        <label 
                         className="block mb-2 mt-2">
                            Role</label>
                       <Input
                         type={"text"}  
                         name={"adminroleName"}
                         onChange={handleChangeEdit}
                         value={editFormData.adminroleName} 
                         className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.adminroleName ? "border-red-500" : "border-gray-300"} `}

                          placeholder="Enter your Role" />
                          {
                        errors.adminroleName &&(
                          <p className="mt-1 text-xs text-red-500">{errors.adminroleName}</p>
                        )
                      }

                    <button onClick={()=>updateData()} type="submit"  className="w-full bg-red-500 text-white  mt-4 p-2 rounded-md hover:bg-red-600">Update</button>
                      

                    </form>

                    
                </div>

                  </div>
                  </div>
                
                
                
                
                )}


                 

                    <div className="">
                      <button className="bg-gray-200 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-md text-sm transition-colors duration-300">
                        Delete
                      </button>
                    </div>
                    
                  </div>
                </td>




              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default AdminRole