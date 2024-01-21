import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css"
import Link from "next/link"

const Navbar = () => {
    const address = useAddress();

    return(
        <div className={styles.navContainer}>
            <h3 className={styles.navTitle}>Digital Art</h3>
            <div style={{display:"flex", flexDirection:"row"}}>
                {address && (
                    <div style={{display:"flex", flexDirection:"row", marginRight:"40px", gap:"10px"}}>
                        <Link href='/'>
                            <p className={styles.navlink}>Shop</p>
                        </Link>

                        <Link href={`/account/${address}`}>
                            <p className={styles.navlink}>My Collection</p>
                        </Link>
                    </div>
                )
                }
                <ConnectWallet
                btnTitle="Sign In"
                modalTitle="Sign In"
                modalTitleIconUrl=""
                />
            </div>
        </div>
    )
}

export default Navbar;