import React, { useEffect } from 'react';
import { next } from '../../src/members.js';

export default function Next({ context }) {
    var referer = context.req.headers.referrer;

    return (
        <>
        {next.has(referer) ? (
            <div>
                success
            </div>
        ) : (
            <div>
                <div>
                the previous website was not part of the webring
                </div>
                <div>
                    return <a href="https://d3l-n3st.vercel.app/">home</a>
                </div>
            </div>
        )}
        </>
    )
}

export function getServerSideProps(context) {
    return {
        props: {},
    };
}
