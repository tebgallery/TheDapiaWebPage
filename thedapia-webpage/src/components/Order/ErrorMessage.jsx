const ErrorMessage = ({error}) => {
    return (
        <div className="w-full bg-red-500 border px-2 ">
            <p className="text-white text-center">{error}</p>
        </div> 
    );
}

export default ErrorMessage;