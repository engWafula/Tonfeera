
import Link from 'next/link';


const Message = ({ msg }) => {
  return (
    <div className='flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img className='mx-auto h-10 w-auto' src='/logo.png' alt='Workflow' />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            {msg}
          </h2>
                            <Link
                           href='/product/new'
                    className='group relative w-full flex justify-center mt-2 py-5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Start Minting Your Product
                  </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;
