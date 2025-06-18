import { useEffect, useState } from "react";
import { VBrand } from "../../Db/VBrand";
import Input from "../../Uitilites/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Brand() {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  const id =Cookies.get("id")
  
  const [show, setshow] = useState(false);
  const [edshow, setedshow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    CreatedBy:id

  });
  const [EditformData, setEditformData] = useState({
    id:"",
    name: "",
    updatedBy:id
  });

  const navigate = useNavigate;

  const [Data, setData] = useState([]);

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const BrandData = async () => {
    await axios.get(`${app}api/BrandTypes`).then((response) => {
      const Data = response.data;

      setData(Data);
    });
  };
  useEffect(() => {
    BrandData();
  }, [show == true]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (formData.name == "") {
      newErrors.name = "Name is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      console.log(formData);
      try {
        const response = await axios({
          method: "POST",
          url: `${app}brandtypes`,
          data: formData,
          headers: { "Content-Type": "application/json" },
        });

        if (response.data == "Brand Added") {
          setTimeout(() => {
            setIsSubmitting(false);
            setFormData({
              name: "",
              CreatedBy:id

            });
            setshow(!show);
            // navigate("/admin")
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getdata = (items) => {

    setEditformData({
          id:items.id,
          name:items.name,
    updatedBy:id

     
 })
  };
  const handleChangeEdit = (e) => {
    setEditformData ({...EditformData,[e.target.name]:e.target.value});
  };
  const updateData= async()=>{
     
    try {
      const response = await axios({
        method: "POST",
        url: `${app}Brandupdate`,
        data: EditformData,
        headers: { "Content-Type": "application/json" },
  
  
      });
      console.log(response.data)
    }
    catch(err){
      console.log(err+"UPDAte ERROR")
  
    }
  }

  return (
    <>
      <div
        onClick={() => setshow(!show)}
        className="mt-5 flex justify-end px-8"
      >
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm ">
          Add Brand Model
        </button>
      </div>
      {show ? (
        <div className=" absolute left-[100px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
          <div className="bg-gray-50 rounded-xl ">
            <div className=" p-8 rounded-lg shadow-lg w-full max-w-2xl  ">
              <div className="flex justify-evenly">
                <div className="">
                  <h2 className="text-3xl font-semibold mb-4 text-center">
                    Brand Model
                  </h2>
                </div>
                <div
                  onClick={() => setshow(!show)}
                  className="cursor-pointer ml-auto text-2xl text-end"
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>

              <div className="">
                <div className="mb-6">
                  <form onSubmit={handleSubmit} className="">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className=" text-gray-700">Name</label>
                        <Input
                          type={"text"}
                          name={"name"}
                          onChange={handleChange}
                          value={formData.name}
                          className={`w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1 ${errors.name ? "border-red-500" : "border-gray-300"} `}
                        />
                        {errors.name && (
                          <p className=" mt-1 text-xs text-red-500">
                            {errors.name}{" "}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-8  flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-8 py-2 rounded-lg "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="overflow-x-auto mt-5 mx-4 rounded-3xl">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Brand Name
              </th>

              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Data.map((items) => (
              <tr key={items.id} className="hover:bg-gray-50">
                <td className="px-[100px] py-4 text-sm text-gray-700">
                  {items.name}
                </td>

                <td className="px-4 py-4 text-sm text-gray-700 ">
                  <div className="flex gap-8">
                    <div onClick={() => getdata(items)} className="">
                      <button
                        onClick={() => setedshow(!edshow)}
                        className="bg-gray-200 hover:bg-green-100 hover:text-green-600 px-3 py-1 rounded-md text-sm transition-colors duration-300"
                      >
                        Edit
                      </button>

                    </div>
                    <div className="">
                      <button className="bg-gray-200 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-md text-sm transition-colors duration-300">
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}

            {edshow ? (
              <div className=" absolute left-[100px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
                <div className="bg-gray-50 rounded-xl ">
                  <div className=" p-8 rounded-lg shadow-lg w-full max-w-2xl  ">
                    <div className="flex justify-evenly">
                      <div className="">
                        <h2 className="text-3xl font-semibold mb-4 text-center">
                          Brand Model
                        </h2>
                      </div>
                      <div
                        onClick={() => setedshow(!edshow)}
                        className="cursor-pointer ml-auto text-2xl text-end"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                    </div>

                    <div className="">
                      <div className="mb-6">
                        <form  className="">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className=" text-gray-700">Name</label>
                              <Input
                                type={"text"}
                                name={"name"}
                                onChange={handleChangeEdit}
                                value={EditformData.name}
                                className={`w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1 ${errors.name ? "border-red-500" : "border-gray-300"} `}
                              />
                              {errors.name && (
                                <p className=" mt-1 text-xs text-red-500">
                                  {errors.name}{" "}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="mt-8  flex justify-center">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              onClick={()=>updateData()}
                              className="bg-blue-600 text-white px-8 py-2 rounded-lg "
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Brand;
