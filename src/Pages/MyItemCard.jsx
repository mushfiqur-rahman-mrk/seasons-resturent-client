 
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyItemCard = ({myItem}) => {
    const {_id,fname,fimage,category,price,origin,stock,addBy,description,count}=myItem || {}

    const hangleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/api/v1/all-foods/${id}`)
                .then(res=>{
                console.log(res.data);
                console.log('product deleted successfully');
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            })
              
            }
          });
        
    }

    return (
        <>
            <div className='grid grid-cols-3 my-10 gap-5 border shadow-xl rounded-xl'>
        <div>
        <img
            src={fimage}
            alt="Black Leather Bag"
            className="h-60 object-center object-cover w-full rounded-xl"
          />
        </div>
        <div className='col-span-2'>
            <h1>{fname}</h1>
            <h1>{category}</h1>
            <h1>{price}</h1>
            <div>
                
                <Link to={`/update-item/${_id}`}>
                <button className='btn btn-accent'>Edit</button>
                </Link>
                <button onClick={()=>hangleDelete(_id)} className='btn btn-error'>Delete</button>
            </div>
        </div>
      </div>   
        </>
    );
};

export default MyItemCard;