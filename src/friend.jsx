import Friends from "./friends";

export default function Friend({friend}){
    
    const {name, email} = friend;

    return(
        <div className="dosto">
            <h4>Friend:{name}</h4>
            <p>Email:{email}</p>
        </div>
    )
}    