import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createQueryAsync } from '../../features/queriesSlice';
import toast from 'react-hot-toast';

const Contact = () => {
    const dispatch = useDispatch();
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { createLoading } = useSelector((state) => state.queries);

    // HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
        if (formdata.message) {
            dispatch(createQueryAsync(formdata))
                .then(() => (
                    setFormdata({
                        name: '',
                        email: '',
                        message: '',
                    })
                ))
        } else {
            toast.error("Oops! Please fill in all fields.")
        }
    }

    return (
        <>
            <section className="bg-white">
                <div className="max-w-full px-3 sm:px-6 py-12 mx-auto">

                    <h2 className='text-2xl sm:text-3xl tracking-wider underline underline-offset-8 font-bold pt-14 pb-8 text-gray-700 text-center'>CONTACT US</h2>


                    <div className="lg:flex lg:items-center">

                        <div className="lg:w-1/2 px-2 lg:mx-6">
                            <h3 className="text-sm uppercase font-semibold text-blue-600 lg:text-md">Contact Details</h3>
                            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">GET IN TOUCH</h2>
                            <p className='mt-4 text-sm w-[100%] sm:w-[90%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore esse itaque eligendi commodi expedita accusamus debitis cupiditate? Officiis, molestias ducimus!</p>


                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <svg
                                        className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="mx-2 text-gray-700 truncate w-72 text-wrap">
                                        405 Elaine Valley Dr  Katy TX 77493
                                    </span>
                                </p>
                                <p className="flex items-start -mx-2">
                                    <svg
                                        className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        +1 (281) 607-5120
                                    </span>
                                </p>
                                <p className="flex items-start -mx-2">
                                    <svg
                                        className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        info@octatechsolution.com
                                    </span>
                                </p>
                            </div>

                            <div className="mt-6 md:mt-8">
                                <h3 className="text-gray-600 dark:text-gray-300 ">
                                    Follow us
                                </h3>
                                <div className="flex mt-4 -mx-1.5 ">
                                    <a href="#" className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500">
                                        <svg
                                            className="w-10 h-10 fill-current"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500">
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500">
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500">
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6 ">
                            <div className="w-full px-4 sm:px-8 py-10 mx-auto overflow-hidden bg-blue-500 rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 ">
                                <h2 className="text-lg font-medium text-white">LET'S TALK</h2>
                                <h2 className="mt-2 text-2xl font-semibold tracking-wider text-white">READY TO GET STARTED?</h2>
                                <p className='mt-2 text-white'>Your email address will not be published. Required fields are marked *</p>
                                {/* FORM */}
                                <form className="mt-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                                        <div className="">
                                            <label className="block mb-2 text-sm text-white">
                                                Full Name *
                                            </label>
                                            <input
                                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                placeholder="Enter Full Name"
                                                type="text"
                                                value={formdata.name}
                                                onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="">
                                            <label className="block mb-2 text-sm text-white">
                                                Email address *
                                            </label>
                                            <input
                                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                placeholder="Enter Your Email"
                                                type="email"
                                                value={formdata.email}
                                                onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-sm text-white">
                                            Message *
                                        </label>
                                        <textarea
                                            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-36 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Enter Your Message"
                                            value={formdata.message}
                                            onChange={(e) => setFormdata({ ...formdata, message: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <button disabled={createLoading} type='submit' className="w-40  px-6 py-3 mt-6 text-sm font-medium tracking-wide text-blue-600 capitalize transition-colors duration-300 transform bg-white rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            {createLoading &&
                                                <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                                </svg>
                                            }
                                            Submit
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
