import { useState } from "react"

export function Users()
{
    const [loggedIn, SetlogIn] = useState(2);

    //for multiple conditions like 1,2,3

    return(
        <div>
            {
                loggedIn==1 ? <h1>user1</h1> : loggedIn==2 ? <h1>user2</h1> :<h1>user3</h1>
            }
        </div>
    )
}