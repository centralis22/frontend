import React from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import sock from "../../config/socket";

import StudentLayout from '../StudentLayout';

export default function Survey() {
    const router = useRouter();

    sock.onmessage = function (e) {
        var parsedData = JSON.parse(e.data);

        if (parsedData.broadcast === "advance_stage") {
            router.push({
                pathname: studentPage[parsedData.content],
                query: { sessionID: router.query.sessionID },
            });
        }
    }

    return (
        <StudentLayout sessionID={router.query.sessionID} CurrentPage="Survey 1">
            <Head>
                <title>Survey 1</title>
            </Head>
            < Survey1 user="Student"/>
        </StudentLayout>
    );
}