import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
};

export default LoadingSpinner;
