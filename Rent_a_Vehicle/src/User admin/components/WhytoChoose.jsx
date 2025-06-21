import React from "react";

function Choose() {
    return (
        <>
            <div className="bg-gray-50 py-12 px-4 md:px-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Why Choose <span className="text-primary">Rentorent?</span>
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Here's why thousands of happy customers choose us for their daily travel needs
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    <div className="group bg-white border rounded-lg p-6 shadow-sm text-center hover:bg-red-600 transition-all duration-300">
                        <div className="text-primary text-4xl mt-6 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-10 w-10 text-[var(--animated-text)] group-hover:text-white transition-all duration-300">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z"></path>
                                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z"></path>
                                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 transition-all group-hover:text-white">Wide Range of Vehicles</h3>
                        <p className="text-gray-500 text-sm transition-all group-hover:text-white">
                            From scooters to sedans, find the perfect ride for every journey and budget
                        </p>
                    </div>


                    <div className="group bg-white border rounded-lg p-6 shadow-sm text-center hover:bg-red-600 transition-all duration-300">
                        <div className=" text-primary text-4xl mb-4 ml-28">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" 
                            className="h-10 w-10 text-[var(--animated-text)] group-hover:text-white transition-all duration-300"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-all ">Affordable Pricing</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white transition-all ">Competitive rental rates with no hidden charges. Transparent and budget-friendly</p>
                    </div>

                    <div className=" group bg-white border rounded-lg p-6 shadow-sm text-center hover:bg-red-600 transition-all duration-300">
                        <div className=" text-primary text-4xl mb-4 ml-28">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" 
                            class="h-10 w-10 text-[var(--animated-text)] group-hover:text-white transition-all duration-300"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd"></path></svg>

                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-all ">24/7 Availability</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white transition-all ">Book anytime, anywhere. Our support and rentals are available around the clock</p>
                    </div>

                    <div className="group bg-white border rounded-lg p-6 shadow-sm text-center hover:bg-red-600 transition-all duration-300">
                        <div className="text-primary text-4xl mb-4 ml-28">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" 
                            className="h-10 w-10 text-[var(--animated-text)] group-hover:text-white transition-all duration-300"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"></path></svg>

                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-all ">Pickup & Drop</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white transition-all ">Convenient doorstep delivery and pickup service to save your time and hassle</p>
                    </div>

                    <div className=" group bg-white border rounded-lg p-6 shadow-sm text-center hover:bg-red-600 transition-all duration-300">
                        <div className=" text-primary text-4xl mb-4 ml-28 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"
                             className=" h-10 w-10 text-[var(--animated-text)] group-hover:text-white transition-all duration-300"><path fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clip-rule="evenodd"></path></svg>

                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-all ">Easy Booking</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white transition-all ">Simple online booking process with minimal documentation and instant confirmation</p>
                    </div>

                    <div className="group bg-white border rounded-lg p-6 shadow-sm text-center hover:bg-red-600 transition-all duration-300">
                        <div className="text-primary text-4xl mb-4 ml-28">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"
                             className="h-10 w-10 text-[var(--animated-text)] group-hover:text-white transition-all duration-300"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-all ">Safe & Secure</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white transition-all ">Regularly serviced vehicles with insurance coverage for a worry-free ride</p>
                    </div>

                    <div className="group bg-white border rounded-lg p-6 shadow-sm text-center hover:bg-red-600 transition-all duration-300">
                        <div className=" text-primary text-4xl mb-4 ml-28  ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"
                             className="h-10 w-10 text-[var(--animated-text)] group-hover:text-white transition-all duration-300"><path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"></path></svg>

                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-all ">Trusted by Thousands</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white transition-all ">Thousands of happy customers across the city trust us for their daily travel</p>
                    </div>

                    <div className="group bg-white border rounded-lg p-6 shadow-sm text-center hover:bg-red-600 transition-all duration-300">
                        <div className=" text-primary text-4xl mb-4 ml-28  ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"
                             className="h-10 w-10 text-[var(--animated-text)] group-hover:text-white transition-all duration-300"><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd"></path></svg>

                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-all ">Instant Confirmation</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white transition-all ">Real-time availability and instant booking confirmation—no waiting required</p>
                    </div>
                </div>
            </div>



        </>
    )


}
export default Choose;