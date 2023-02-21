import { next } from '../../src/members.js';

export default function Home(context) {
    var referrer = context.req.headers.referrer;

    return (
        <>
        {next.has(referrer) ? (
            <div>
                {referrer}
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
