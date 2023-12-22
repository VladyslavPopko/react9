import './card.css'


const Card = ({info}) => {

    const { image, level, title, user, rating, students, modules, duration} = info;

//         
    return (
            <div className="card">
                <div className="image__container">
                    <img
                        src={image}
                        alt=""
                    />
                    <div className="level">{level}</div>
                </div>
                <h3 className="card__title">{title}</h3>
                <div className="card__info">
                    <div className="user">
                        <img
                            src={user.avatar}
                            alt={user.name}
                        />
                        <p>{user.name}</p>
                    </div>
                    <div className="rating">
                        <p>{rating}</p>
                    </div>
                </div>



                <div className="card__info">
                    <div>{students} Student</div>
                    <div>{modules} Modules</div>
                    <div>{duration}</div>
                </div>
            </div>
    )
}

export default Card