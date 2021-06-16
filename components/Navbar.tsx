import Link from "next/link";
import MoreMenuItem from "./MoreMenuItem";
import InlineButton from './InlineButton';
import MoreMenu from './MoreMenu';

const Navbar = () => {
    return (
        <nav className="w-full bg-white sticky items-center mb-8 top-0 z-30 flex border-b-2 px-8">
            <div className="max-w-7xl h-16 flex items-center mr-auto my-auto">
                <Link href={"/"}><a><p className="text-2xl font-bold">The Chive</p></a></Link>
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