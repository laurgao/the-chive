import Link from "next/link";
import MoreMenuItem from "./MoreMenuItem";
import InlineButton from './InlineButton';
import MoreMenu from './MoreMenu';
import { FiGrid, FiSearch, FiUser } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { BsLightning } from "react-icons/bs"
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
    return (
        <nav className="w-full bg-white sticky items-center mb-8 top-0 z-30 flex border-b-2 px-8">
            <div className="max-w-7xl h-16 flex items-center mr-auto my-auto">
                <Link href={"/home"}><a>
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Logo of The Chive" className="h-12"/>
                        <p className="text-2xl font-bold mt-1.5">The Chive</p>
                    </div>
                </a></Link>
            </div>
            <div className="flex flex-row">
                <Link href="/news">
                    <a className="hidden md:flex items-center opacity-50 hover:opacity-100 mr-10">
                        <div className="mr-3 -mt-1">
                            <BiNews/>
                        </div>
                        News
                    </a>
                </Link>
                <Link href="/social">
                    <a className="hidden md:flex items-center opacity-50 hover:opacity-100 mr-10">
                        <div className="mr-3 -mt-1">
                            <BsLightning/>
                        </div>
                        Social
                    </a>
                </Link>
                <PrimaryButton href="/home#newsletter">Sign up for newsletter</PrimaryButton>

                {/* <Link href="/science">
                    <a className="hidden md:flex items-center opacity-50 hover:opacity-100 mr-10">
                        <div className="mr-3 -mt-1">
                            <FiSearch/>
                        </div>
                        Science
                    </a>
                </Link>
                <Link href="/tech">
                    <a className="hidden md:flex items-center opacity-50 hover:opacity-100 mr-10">
                        <div className="mr-3 -mt-1">
                            <FaLaptop/>
                        </div>
                        Tech
                    </a>
                </Link>
                <Link href="/about">
                    <a className="hidden md:flex items-center opacity-50 hover:opacity-100 mr-10">
                        <div className="mr-3 -mt-1">
                            <FiUser/>
                        </div>
                        About
                    </a>
                </Link>*/}
            </div> 
            {/* {session ? ( 
                <>
                    <MoreMenu
                        customButton={
                            <img
                                src={session.user.image}
                                alt={`Profile picture of ${session.user.name}`}
                                className="w-10 h-10 ml-2 rounded-full"
                            />
                        }
                        openMenuClassName="mt-2"
                    >
                        <MoreMenuItem text="Sign out" onClick={signOut}/>
                    </MoreMenu>
                </>
            ) : loading ? (
                <p>Loading...</p>
            ) : (
                <InlineButton href="/auth/sign-in">Sign in</InlineButton>
            )}   */}
        </nav>
    )
}

export default Navbar