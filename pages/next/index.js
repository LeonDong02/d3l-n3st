import { next } from '../../src/members.js';

export default function Home({ referrer }) {

    return (
        <>
        {next.has(referrer) ? (
            <div>
                <a href={next.get(referrer)}>to next</a> 
            </div>
        ) : (
            <div>
                <div>
                the previous website was not part of the webring
                </div>
                <div>
                    return <a href="/">home</a>
                </div>
            </div>
        )}
        </>
    )
}

export function getServerSideProps(context) {
    return {
        props: {referrer: context.req.headers.referer},
    };
}
