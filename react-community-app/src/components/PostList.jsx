

export const PostList = ({ id, title, description, image, navTo}) => {
    return (

        <div className ="grid grid-cols-1 rounded-2xl shadow-xl text-center my-1 bg-white h-200">
            <div className="grid bg-cyan-400 h-100">
                <h2 className="leading-5 p-5">{title}</h2>
                <p className="text-base p-5">
                    {description}
                </p>
            </div>
            <div className="grid grid-cols-1 bg-cyan-500 h-15">
                <div className="flex items-center justify-center text-white p-5" style={{textTransform: "capitalize"}}>

                </div>
            </div>
        </div>

    );
};
