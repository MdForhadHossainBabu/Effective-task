import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleCard = ({ assignment, cardData, setCardData }) => {
  const {
    _id,
    title,
    photo,
    description,
    Deadline,

    label,
    name,
    mark,
  } = assignment;

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        console.log('data');
        fetch(
          `https://assignment-11-server-two-navy.vercel.app/create-assignment/${_id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            //  console.log(data);
            if (data.deletedCount > 0) {
              //  console.log('data delete successfully');
              Swal.fire({
                title: 'Success!',
                text: 'Assignment Delete Successfully!',
                icon: 'success',
              });
            }
          });
        const remaining = cardData.filter(item => item._id !== _id);
        setCardData(remaining);
      }
    });
  };

  return (
    <SkeletonTheme>
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 font-Roboto">
        <Skeleton count={3} />
        <img
          className="object-cover w-full flex-1 shadow-2xl drop-shadow-2xl h-64"
          src={photo}
          alt="Article"
        ></img>

        <div className="p-6">
          <div>
            <span>
              <h1
                className={`text-sm
               ${status === 'pending' && 'text-orange-500'}
               ${status === 'In Progress' && 'text-cyan-500'}
               ${
                 status === 'Complete' && 'text-rose-500'
               }border-cyan-500 rounded font-Raleway
               `}
              >
                {' '}
                {status}
              </h1>
            </span>
            <a
              title={title}
              href=""
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              role="link"
            >
              {title.substring(0, 50)}
            </a>
            <div className="flex items-center justify-between mx-4">
              <div>
                {' '}
                <span
                  className={` ${label === 'easy' && 'text-cyan-500'} ${
                    label === 'medium' && 'text-amber-500'
                  } ${
                    label === 'hard' && 'text-rose-600'
                  } bg-[#E9F2FE] px-4 pb-1 rounded-full font-Space`}
                >
                  {label}
                </span>
              </div>
              <div>
                <h1 className="text--500">
                  Marks:{' '}
                  <span
                    className={`${mark <= 30 && 'text-red-600'} ${
                      mark <= 50 && 'text-rose-600'
                    } ${mark <= 70 && 'text-blue-500'} ${
                      mark <= 100 && 'text-green-600'
                    }`}
                  >
                    {mark}
                  </span>
                </h1>
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description || ''}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  role="link"
                >
                  {name}
                </a>
              </div>
              <div className="flex items-center gap-12">
                <div>
                  <span className="mx-1 text-xs text-rose-600 flex items-center gap-1 dark:text-gray-300 font-Space ">
                    Date :
                    <span className="text-green-500">
                      {new Date(Deadline).toLocaleDateString() ||
                        new Date().toLocaleDateString()}
                    </span>
                  </span>
                </div>
                <div>
                  {/* <h1
                 className={`text-sm
               ${status === 'pending' && 'text-orange-500'}
               ${status === 'In Progress' && 'text-cyan-500'}
               ${
                 status === 'Complete' && 'text-rose-500'
               } border px-2 border-cyan-500 rounded font-Raleway
               `}
               >
                 {' '}
                 {status}
               </h1> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col flex-1">
            <div className="flex items-center gap-4 justify-around mt-8 text-balance">
              <div>
                <Link to={`/view/${_id}`}>
                  <button className="border-2 py-1 rounded-md text-lg font-medium bg-cyan-700 text-white font-Space px-5">
                    View
                  </button>
                </Link>
              </div>
              <Link to={`/update/${_id}`}>
                <button className="border-2 py-1 rounded-md text-lg font-medium bg-cyan-700 text-white font-Space px-5">
                  Update{' '}
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="border-2 py-1 rounded-md text-lg font-medium bg-rose-500 text-white font-Space px-5"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SingleCard;
