import { createContext, useState } from "react"


export const GlobalData = createContext()
export function UserContext({ child }) {
    const [user, setUser] = useState(null)
    return (
        // <GlobalData.Provider value={{user,setUser}}>
        //     {child}
        // </GlobalData.Provider>
        <div>
            <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{"--bs-nav-link-color": "var(--bs-white)","--bs-nav-pills-link-active-color": "var(--bs-primary)","--bs-nav-pills-link-active-bg": "var(--bs-white)"}}>
                <li className="nav-item" role="presentation">
                    <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
                </li>
            </ul>
        </div>
    )
}


function UserProvider() {
    return (
        <div>

        </div>
    )
}
