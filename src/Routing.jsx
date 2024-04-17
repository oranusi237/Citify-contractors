import { Link } from "react-router-dom"

export default function Routing() {
    const profiles = [1, 2, 3, 4, 5];

    return(
        <div>{profiles.map((profile) => (
        <Link key={profile} to={`/profiles/${profile}`}>
            profile {profile}
            </Link>
        ))}
        </div>
    )
}