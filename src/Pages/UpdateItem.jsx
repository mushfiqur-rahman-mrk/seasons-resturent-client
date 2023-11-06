import React from 'react';

const UpdateItem = () => {
    const handleSubmit=e=>{
        e.preventDefault()
    }

    return (
        <div>
            <div
        className="grid grid-cols-1 my-20 gap-8 px-5 max-w-6xl mx-auto justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="">
          <h2 className="mb-4 sm:text-4xl text-3xl tracking-tight font-extrabold text-center ">
            Update product
          </h2>

          <div>
            <div className="bg-gray-200 mt-5 rounded-xl shadow-lg">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <form onSubmit={handleSubmit} className="space-y-8">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Food Item Name
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="Food item name etc(biriyani,kabab)"
                        name="fname"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium ">
                      Food Item Price
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="$ price"
                        name="price"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Food Origin
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="Origin of this food item"
                        name="type"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Product image URL
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="Image url"
                        name="image"
                        required
                      />
                    </div>
                  </div>



                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Available Stock
                      </label>
                      <input
                        type="number"
                        id="subject"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="available stock"
                        name="type"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Added by
                      </label>
                      <p>user name</p>
                      <p>user email</p>
                      {/* <input
                        type="text"
                        id="email"
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                        placeholder="user name"
                        name="image"
                        required
                      /> */}
                    </div>
                  </div>

                   

                  <div className="grid grid-cols-1 gap-10">
                    <div>
                      <label className="block mb-2 text-sm font-medium  ">
                        Product Category
                      </label>
                      <select
                        id="countries"
                        name="brand"
                        required
                        className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                      >
                        <option selected value="">
                          Choose Your Product Category
                        </option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Xiaomi">Xiaomi</option>
                        <option value="Gigabite">Gigabite</option>
                        <option value="Asus">Asus</option>
                        <option value="Sony">Sony</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium">
                        Food Item Detail
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      name="detail"
                      className="p-2 border rounded-xl w-full outline-none focus:border-red-500"
                      placeholder="Enter your product detail . Word limit 200 word "
                    ></textarea>
                  </div>

                  <button className="px-5 w-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:ease-in py-3 transition duration-150 hover:text-black rounded-xl shadow-lg mx-auto md:w-1/2 ">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default UpdateItem;