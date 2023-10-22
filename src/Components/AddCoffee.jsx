const AddCoffee = () => {


    const handleCoffeeForm = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        console.log(name, supplier, category, chef, taste, details, photo)
    }






  return (
    <div>
      <div className="bg-[#F4F3F0] p-20 m-10">
        <h2 className="text-center text-5xl my-6">Add New Coffee</h2>
        <p className="w-[900px] text-center mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleCoffeeForm}>
          <div className="grid grid-cols-2 container mx-auto justify-center items-center mx-12 mt-12">
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter coffee name"
                name="name"
                className="input input-bordered input-error w-full max-w-lg  mt-2 mb-4 bg-white border-0 rounded"
              />{" "}
              <br />
              <label htmlFor="supplier">Supplier</label> <br />
              <input
                type="text"
                placeholder="Enter coffee supplier"
                name="supplier"
                className="input input-bordered input-error w-full max-w-lg  mt-2 mb-4 bg-white border-0 rounded"
              />{" "}
              <br />
              <label htmlFor="category">Category</label> <br />
              <input
                type="text"
                placeholder="Enter coffee category"
                name="category"
                className="input input-bordered input-error w-full max-w-lg  mt-2 mb-4 bg-white border-0 rounded"
              />{" "}
              <br />
            </div>
            <div>
              <label htmlFor="chef">Chef</label>
              <br />
              <input
                type="text"
                placeholder="Enter coffee chef"
                name="chef"
                className="input input-bordered input-error w-full max-w-lg  mt-2 mb-4 bg-white border-0 rounded"
              />{" "}
              <br />
              <label htmlFor="taste">Taste</label> <br />
              <input
                type="text"
                placeholder="EEnter coffee taste"
                name="taste"
                className="input input-bordered input-error w-full max-w-lg  mt-2 mb-4 bg-white border-0 rounded"
              />{" "}
              <br />
              <label htmlFor="details">Details</label> <br />
              <input
                type="text"
                placeholder="Enter coffee details"
                name="details"
                className="input input-bordered input-error w-full max-w-lg  mt-2 mb-4 bg-white border-0 rounded"
              />{" "}
              <br />
            </div>
            <label htmlFor="photo">Photo</label> <br />
            <input
              type="url"
              placeholder="Enter photo URL"
              name="photo"
              className="input input-bordered input-error w-full lg:w-[1068px]  mt-2 mb-4 bg-white border-0 rounded"
            />{" "}
            <br />
            <input
              type="submit"
              value="Add Coffee"
              className="bg-[#331A15] w-[1068px] rounded btn text-white hover:bg-red-500 my-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
