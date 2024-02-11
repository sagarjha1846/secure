import React from 'react'

const ImageDetails=({handleInputChange, handleSubmit}) => {
    return (
        <div className=' justify-start w-full p-2'>
            <div className='justify-start w-full'>
                <h1 className='font-bold font-Nun uppercase border-b-2 shadow-sm'>Image Details</h1>
            </div>

            <form className="w-full max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="imageName" className="block text-gray-700 text-sm font-bold mb-2">Image Name</label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        id="imageName"
                        name="imageName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="imageName" className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                            </svg>
                        </div>
                        <input
                            onChange={handleInputChange}
                            type="number"
                            id="currency-input"
                            name="amount"
                            className="block p-2.5 w-full z-20 ps-10 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter amount"
                            required />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">View Limit</label>
                    <div className="flex items-center gap-10">
                        <label className="inline-flex items-center">
                            <input onChange={handleInputChange} type="radio" className="form-radio text-blue-500" name="viewLimit" value="once" />
                            <span className="ml-2"><i className="fa-solid fa-1"></i></span>
                        </label>
                        <label className="inline-flex items-center">
                            <input onChange={handleInputChange} type="radio" className="form-radio text-blue-500" name="viewLimit" value="twice" />
                            <span className="ml-2"><i className="fa-solid fa-2"></i></span>
                        </label>
                        <label className="inline-flex items-center">
                            <input onChange={handleInputChange} type="radio" className="form-radio text-blue-500" name="viewLimit" value="life-time" />
                            <span className="ml-2"><i className="fa-regular fa-hourglass"></i></span>
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="uploadDatetime" className="block text-gray-700 text-sm font-bold mb-2">Upload Datetime</label>
                    <input onChange={handleInputChange} type="text" id="uploadDatetime" name="uploadDatetime" className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
                </div>

                <div className="mb-4">
                    <label htmlFor="imageId" className="block text-gray-700 text-sm font-bold mb-2">Image ID</label>
                    <input onChange={handleInputChange} type="text" id="imageId" name="imageId" className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
                </div>

                {/* Add other form fields as needed */}

                <div className="flex items-center justify-between mt-6">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default ImageDetails
