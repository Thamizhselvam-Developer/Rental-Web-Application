import React, { useEffect, useState } from "react";
import logo from "../../assets/Navbar/logo.png";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/Profile/profile.jpg"
import Cookies from "js-cookie";
import axios from "axios";

const UserNavbar = () => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [GetData, setGetData] = useState([])
  const [Img, setImg] = useState()
  const Id = Cookies.get('id')
  const Token = Cookies.get("Token")
  const arr = Object.keys(Cookies.get());

  // for(let i=0;i<arr.length;i++){
  //      console.log((arr[i]))
  //     }



  console.log(Object.keys(Cookies.get()))
  const [LoginAuth] = useState(Token)

  const Logout = () => {
    console.log("!")

    const keys = Object.keys(Cookies.get());
    console.log(keys);

    for (let i = 0; i < keys.length; i++) {
      Cookies.remove(keys[i]);
    }

    navigate("/login");
  };



  useEffect(() => {
    if (!Id) {
      console.log("No user ID.");
      return;
    }
    userData(Id);
  }, [Id]);



  const userData = async (id) => {

    await axios.get(`${app}userGet/${id}`)
      .then(response => {

        const Data = response.data
        console.log(Data[0].name)
        setGetData(Data[0])



      })

    await axios.get(`${app}userImage/${id}`)
      .then(response => {

        console.log(response.data.img)
        const imgData = (response.data.img)
        setImg(imgData)
      })
  }



  console.log(Img, "Data")


  const NavigateFunction = (id) => {
    const toView = document.getElementById(id)
    toView.scrollIntoView({ behavior: "smooth" })
  }





  return (
    <>


      <nav className="flex justify-between md:justify-around md:items-center text-black py-4 px-6 bg-white shadow-lg    font-main">

        <div className="flex items-center cursor-pointer hover:scale-105 transition-all">
          <div className="mr-3">
            <img src={logo} width="25px" alt="Logo" />
          </div>
          <div className="text-black text-2xl">Rentals</div>
        </div>

        <ul className="hidden md:flex md:gap-8 text-black text-xl">
          <li>

            <a href="/" className="hover:border-b-2 md:ms-2 cursor-pointer hover:border-primary">
              Home
            </a>

          </li>

          <li>
            <a className="hover:border-b-2 hover:border-primary">
              <button onClick={() => NavigateFunction("For_You")}>
                For You

              </button>
            </a>
          </li>
          <li>
            <a className="hover:border-b-2 hover:border-primary text-nowrap">
              <button onClick={() => NavigateFunction("Events")}>

                Today Events
              </button>
            </a>
          </li>
          <li>
            <a className="hover:border-b-2 hover:border-primary text-nowrap">
              <button onClick={() => NavigateFunction("Reviews")}>
                Reviews
              </button>
            </a>
          </li>
        </ul>


        <div className="flex mr-[40px]  gap-3">
          <Link to="/RentalForm">
            <div className="hidden md:flex md:justify-center md:items-center ">
              <button className="bg-primary text-sm text-white py-2.5  px-2 rounded-full hover:bg-[#f13939]  shadow-lg">
                Shop-Renter
              </button>
            </div>
          </Link>



          {

            LoginAuth ? (

              <>
                <div className="hidden md:flex md:justify-center md:items-center  ">
                  <button onClick={() => Logout()} className="bg-primary text-sm  text-white py-2.5  px-8 rounded-full hover:bg-[#f13939]  shadow-lg">
                    Logout
                  </button>
                </div>


                <Link to="/WishList">
                  <div className="hidden md:flex md:justify-center md:items-center">
                    <button className="bg-primary text-sm text-white py-2.5  px-3 rounded-full hover:bg-[#f13939]  shadow-lg">
                      <i className="fa-regular fa-heart me-2"></i> Wishlist
                    </button>
                  </div>
                </Link>
                <div className="relative ml-3">

                  <div
                    className="profile-trigger flex items-center cursor-pointer"
                    onClick={() => setProfileDropdown(!profileDropdown)}
                  >
                    <div className=" rounded- bg-white w-[45px] h-[40px] flex justify-center items-center  overflow-hidden">
                      <img src={Img} alt="" className="w-9 h-9 object-cover rounded-full" />
                    </div>
                    <div className=" grid-cols-1 ml-2 hidden md:block">
                      {
                        GetData ? (
                          <span className="font-Outfit font-bold tracking-wide text-sm">{GetData.name}</span>

                        ) : <span className="font-Outfit font-bold tracking-wide text-sm">User</span>
                      }
                    </div>
                  </div>

                  {profileDropdown && (
                    <div className="profile-menu absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <span className="block text-sm text-gray-900 font-medium">{GetData.name}</span>
                        <span className="block text-sm text-gray-500 truncate">{GetData.email}</span>
                      </div>
                      <ul>
                        <li>
                          <Link to="/userprofile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="Settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Settings
                          </Link>
                        </li>

                        <li className="border-t border-gray-100">
                          <Link to="/">
                            <button className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                              Sign out
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}

                </div>

              </>
            ) :

              <>

                <Link to="/login">
                  <div className="hidden md:flex md:justify-center md:items-center  ">
                    <button className="bg-primary text-sm  text-white py-2.5  px-8 rounded-full hover:bg-[#f13939]  shadow-lg">
                      Login
                    </button>
                  </div>
                </Link>


                <div className="relative ml-3">




                </div>



              </>



          }
        </div>


        <div
          className="flex flex-col items-end md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}

        >
          <div className="bg-black h-[3px] w-4 m-[2px]"></div>
          <div className="bg-black h-[3px] w-6 m-[2px]"></div>
          <div className="bg-black h-[3px] w-4 m-[2px]"></div>
        </div>

        <div
          className={`absolute md:hidden top-24 left-0 w-full h-[280px] mt-[-30px] bg-white flex flex-col items-center gap-2 rounded-bl-lg rounded-br-lg transform transition-transform z-50 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <ul className="">
 <li>

            <a href="/" className="hover:border-b-2 md:ms-2 cursor-pointer hover:border-primary">
              Home
            </a>

          </li>

          <li>
            <a className="hover:border-b-2 hover:border-primary">
              <button onClick={() => NavigateFunction("For_You")}>
                For You

              </button>
            </a>
          </li>
          <li>
            <a className="hover:border-b-2 hover:border-primary text-nowrap">
              <button onClick={() => NavigateFunction("Events")}>

                Today Events
              </button>
            </a>
          </li>
          <li>
            <a className="hover:border-b-2 hover:border-primary text-nowrap">
              <button onClick={() => NavigateFunction("Reviews")}>
                Reviews
              </button>
            </a>
          </li>

          </ul>
        

          

          <div className="md:hidden flex">
            <Link to="/Register">
              <button className="bg-primary text-white text-sm font-extralight py-2.5 px-8 ml-3 rounded-full hover:bg-[#f13939] shadow-lg">
                Login
              </button>
            </Link>
            <Link to="/RentalForm">
              <div className="md:hidden  md:justify-center md:items-center">
                <button className="bg-primary text-r text-sm font-extralight text-white py-2.5 ml-3 px-2 rounded-full hover:bg-[#f13939]  shadow-lg">
                  Shop-Renter
                </button>
              </div>
            </Link>
            <Link>
              <div className="md:hidden  md:justify-center md:items-center">
                <button className="flex items-center px-3 py-2.5 border text-sm font-extralight bg-red-500  rounded-full shadow-lg text-white hover:bg-primary ml-5">
                  <i className="fa-regular fa-heart me-2"></i> Wishlist
                </button>
              </div>

            </Link>

          </div>

        </div>
      </nav>
    </>
  );
};

export default UserNavbar;