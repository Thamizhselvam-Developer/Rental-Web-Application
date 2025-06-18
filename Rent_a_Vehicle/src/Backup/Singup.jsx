import React from 'react'

// import log from'../assets/mobile-login-animate.svg'
import gif from'../assets/Signup/Mobile_login.gif' 
import stock from'../assets/Signup/istockphoto.png'

const Singup = () => {
  return (
<div className="container">
 <div className="singup-container  w-309  h-[681px] flex ml-[130px] mr-[-35px] mt-[40px] bg-[#f5eedc] rounded-4xl">


        <div className="singuppage ml-[35px] mt-[50px]">

           <div className="mx-auto max-w-[432px] bg-white  rounded-4xl  shadow-2xl drop-shadow-md ml-[60px]">
      <div className="px-4 py-3 flex justify-between">
        <div>
          <h2 className="font-bold font-sans" style={{fontSize: 32}}>Sign Up</h2>
          <p className="text-gray-500" style={{fontSize: 15}}>It's quick and easy.</p>
        </div>
        {/* <div style={{cursor: 'pointer'}} className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div> */}<button className="relative rounded-b-md rounded-t-md border-2 border-[#f5eedc] group hover:border-[#f5eedc] w-10 h-10 duration-500 overflow-hidden" type="button">
      <p className="font-bold text-3xl h-[20px] w-full flex items-center justify-center text-black duration-500 relative z-10 group-hover:scale-0">
        x
      </p>
      <span className="absolute w-full h-full bg-[#f5eedc] rotate-43 group-hover:top-9 duration-500 top-12 left-0" />
      <span className="absolute w-full h-full bg-[#f5eedc] rotate-43 top-0 group-hover:left-9 duration-500 left-14" />
      <span className="absolute w-full h-full bg-[#f5eedc] rotate-43 top-0 group-hover:right-9 duration-500 right-14" />
      <span className="absolute w-full h-full bg-[#f5eedc] rotate-43 group-hover:bottom-9 duration-500 bottom-14 right-0" />
    </button>
      </div>
      <hr className="bg-gray-600" />
      <div className="px-4 pt-3 pb-6 space-y-3">
        <div className="space-x-3 flex gap-8">
          <input type="text" placeholder="User name" className="flex-1 ring-1  ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500" />
          {/* <input type="text" placeholder="Surname" className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500" />
        </div> */}
        </div>

        <div>
          <input type="text" placeholder="Mobile number" className="w-full ring-1  ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500" />
        </div>
        <div>
          <input type="text" placeholder="Email address" className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500" />
        </div>
        <div>
          <input type="password" placeholder="New password" className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500" />
        </div>
        <div>
          <input type="password" placeholder="Conform password" className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500" />
        </div>
        <div>
          {/* <div className="text-gray-500" style={{fontSize: 12}}>
            Date of birth <a href> (?) </a>
          </div>
          <div className="mt-1 flex space-x-3">
            <select name="day" className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
            <select name="month" className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none">
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select name="year" className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none">
              <option>1990</option>
              <option>1991</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
              <option>1995</option>
              <option>1996</option>
              <option>1997</option>
              <option>1998</option>
              <option>1999</option>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
              <option>2006</option>
              <option>2007</option>
              <option>2008</option>
              <option>2009</option>
              <option>2010</option>
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
          </div>
        </div>
        <div>
          <div className="text-gray-500" style={{fontSize: 12}}>
            Gender <a href> (?) </a>
          </div>
          <div className="mt-1 flex space-x-3">
            <label htmlFor="female" className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400">
              <span>Female</span>
              <input type="radio" id="female" name="gender" />
            </label>
            <label htmlFor="male" className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400">
              <span>Male</span>
              <input type="radio" id="male" name="gender" />
            </label>
            <label htmlFor="other" className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400">
              <span>Custom</span>
              <input type="radio" id="other" name="gender" />
            </label>
          </div> */}
        </div>
        <div>
      
         <input type="checkbox" name="" id="" />
          <p className="text-gray-600 font-light" style={{fontSize: 11}}>
            
            People who use our service may have uploaded your contact information to
            Facebook.
            <a href className="hover:text-blue-900 font-medium hover:underline">Learn more</a>.
          </p>
          {/* <p className="text-gray-600 mt-4 font-light" style={{fontSize: 11}}>
            By clicking Sign Up, you agree to our
            <a href className="hover:text-blue-900 font-medium hover:underline">Terms</a>,
            <a href className="hover:text-blue-900 font-medium hover:underline">Privacy Policy</a>
            and
            <a href className="hover:text-blue-900 font-medium hover:underline">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any
            time.
          </p> */}
        </div>
        <div className="text-center">
          {/* <button className="text-white font-bold px-16 py-1 rounded-4xl mr-[3px]" style={{backgroundColor: '#ff0000', fontSize: 18}}>
            Sign Up
          </button> */}

           <button className="text-xl w-32 h-12  rounded-4xl bg-[#ff0000] text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
      <span className="absolute bg-amber-800 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all" />
      <span className="absolute bg-[#ff0000] w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all" />
      Sign up !
    </button>
        </div>
      </div>
    </div>    



        </div>





<div className="img-container pl-[60px] ml-[10px] ">
<img src={gif} alt=""className="h-70 w-[480px] rounded-4xl pr-[1px] pt-[1px] ml-[70px]  " />
<img src={stock} alt=""className='h-[214px] w-[530px] pr-[14px] ' />

</div>









 </div>




</div>
  )
}

export default Singup
