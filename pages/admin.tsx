import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";

const admin = () => {
    return (
        <div>
            <p>Hi Laura</p>
        </div>
    )
}

export default admin


export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    if (session.user.email !== "gaolauro@gmail.com") return {notFound: true};
    return {props: {}};
}