const ErrorMessage = ({error}) => {
    return (
        <div className="w-full bg-red-600 border py-1 px-2 ">
            <p className="text-white">{error}</p>
        </div> 
    );
}

export default ErrorMessage;