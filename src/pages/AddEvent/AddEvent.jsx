import Swal from "sweetalert2";

const AddEvent = () => {

      const handleAdd=(e)=>{
        e.preventDefault();
         const form=e.target;
          const title=form.title.value;
          const date=form.date.value;
          const photo=form.img.value;
          const description=form.description.value;
          const eventData={title,date,photo,description}
          
          fetch(`http://localhost:5050/events`,
          {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(eventData)
          }
          )
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added an event successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset();
            }
          })
        
      }
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className=" px-4  mx-auto max-w-xl  space-y-8 ">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new Event
        </h2>
        <form onSubmit={handleAdd}>
          <div className="grid gap-4 ">
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Event Title
              </label>
              <input
                type="text"
                name="title"
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Event Title"
                required=""
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date
              </label>
              <input
                type="date"
                name="date"
              
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required=""
              />
            </div>

            <div>
              <label className="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image URL
              </label>
              <input
                type="text"
                name="img"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Image URL"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                name="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-blue-500 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddEvent;
