export const Post = ({id, group, title, description, approve, disapprove, comments, share, timeSince}) => {
    return (
        <div className ="post-card">
            <div className="post-card-header">
                {group} - {timeSince}
            </div>
            <div className="post-card-body">
                <div className="post-title">
                    <label className="">
                        <b>
                            <u>
                                {title}
                            </u>
                        </b>
                    </label>
                </div>
                <p className="post-description">
                    {description}
                </p>
                <p className="interaction-box">
                    {approve}{disapprove}{share}{comments}
                </p>
            </div>
        </div>
    );
};
