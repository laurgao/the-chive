import {signIn, useSession, getSession} from "next-auth/client"
import {GetServerSideProps} from "next";
import PrimaryButton from "../../components/PrimaryButton";

const SignIn = () => {
    const [session, loading] = useSession();
    
    return (
        <div>              
            {!session && (
            <>
                Not signed in <br />
                <PrimaryButton onClick={() => signIn('google')}>Sign in</PrimaryButton>
            </>
            )}
            
            {session && ( 
                <>
                Signed in as {session.user.email} <br />
                <div>You can now access our super secret pages</div>
                </>
            )}
        </div>
    )
}

export default SignIn

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (session) {
        console.log(session);
        context.res.setHeader("location", "/auth/new-account");
        context.res.statusCode = 302;
        context.res.end();
    }

    return {props: {}};
};
