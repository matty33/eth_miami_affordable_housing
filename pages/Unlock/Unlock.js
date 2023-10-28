import Router from "next/router";
import Link from "next/link";

 function Unlock() {
    return(
        <nav className="unlock__navbar">
            <Link href="../SecondPage/SecondPage">
                <button className="unlock__button">Unlock</button>
            </Link>
        </nav>
    )
 }

 export default Unlock;