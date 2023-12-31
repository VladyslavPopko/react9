
import './user.css'

const UserCard = ({ userData }) => {

    const { avatar, title, description } = userData;

    return (
        <div className="cardBox">

            <div className="img">
                <img src={avatar} alt="" />
            </div>
            <div className="title">
                {title}
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    )

}

export default UserCard;