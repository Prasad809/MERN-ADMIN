import { useState } from "react"

function Toggle() {
    const [theme, setTheme] = useState('light')
    const changeTheme = () => {
        if (theme === 'light') {
            console.log('dark');
            setTheme('dark')
        } else {
            console.log("light")
            setTheme('light')
        }
    }
    return (
        <Toggle className={`${theme}`}>
            <button onClick={changeTheme}>theme</button>
            {theme === 'light' ? <i></i> : <i></i>}
        </Toggle>
    )
}
export default Toggle;