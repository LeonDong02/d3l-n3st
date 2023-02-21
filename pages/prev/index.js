import { prev } from '../../src/members.js';

export default function Home() {
    return (<></>)
}

export async function getServerSideProps(context) {
    var referrer = context.req.headers.referer;

    if (prev.has(referrer)) {
        return {
            redirect: {
                destination: prev.get(referrer),
                permanent: false,
            },
        }
    } else {
        console.log(referrer);
        
        return {
            redirect: {
                destination: '/notmember',
                permanent: false,
            },
        }
    }
    
    return {
        props: {},
    };
}
