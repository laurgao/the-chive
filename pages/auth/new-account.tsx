import React, {useState} from "react";
import {GetServerSideProps} from "next";
import {getSession, signIn, useSession} from "next-auth/client";
import axios from "axios";
import {useRouter} from "next/router";
import Skeleton from "react-loading-skeleton";
import PrimaryButton from "../../components/PrimaryButton";
import { AccountModel } from "../../models/account";
import dbConnect from "../../utils/dbConnect";
import H2 from "../../components/H2";

export default function NewAccount() {
    const router = useRouter();
    const [session, loading] = useSession();
    const [error, setError] = useState<string>(null);

    function onSubmit() {
        axios.post("/api/account").then(res => {
            if (res.data.error) {
                setError(res.data.error);
            } else {
                console.log(res.data.message)
                console.log("redirecting...");
                router.push("/").catch(e => console.log(e));
            }
        }).catch(e => {
            setError("An unknown error occurred.");
            console.log(e.response.data);
        });
    }

    return (
        <div className="max-w-sm mx-auto px-4">
            <H2 className="up-h1">Welcome to The Chive</H2>
            <hr className="my-8"/>
            <p className="up-ui-title">Creating new account as:</p>
            {loading ? (
                <div className="my-4">
                    <Skeleton count={2}/>
                </div>
            ) : (
                <div className="flex items-center my-4">
                    <img
                        src={session.user.image}
                        alt={`Profile picture of ${session.user.name}`}
                        className="rounded-full h-12 h-12 mr-4"
                    />
                    <div>
                        <p className="up-ui-title">{session.user.name}</p>
                        <p>{session.user.email}</p>
                    </div>
                </div>
            )}            
            <hr className="my-8"/>
           
            {error && (
                <p className="text-red-500">{error}</p>
            )}
            
            <PrimaryButton
                onClick={onSubmit}
            >
                Let's get started!
            </PrimaryButton>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    await dbConnect();
    const user = await AccountModel.findOne({email: session.user.email});

    if (!session || user) {
        context.res.setHeader("location", !session ? "/auth/sign-in" : "/");
        context.res.statusCode = 302;
        context.res.end();
    }

    return {props: {}};
};