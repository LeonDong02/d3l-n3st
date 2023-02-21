import { next } from '../../src/members.js';

export default async function getServerSideProps(context) {
    var referrer = context.req.headers.referer;

    if (next.has(referrer)) {
        return {
            redirect: {
                destination: next.get(referrer),
                permanent: false,
            },
        }
    } else {
        return {
            redirect: {
                destination: '/notamember',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    };
}
