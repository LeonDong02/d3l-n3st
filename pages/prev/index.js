import { prev } from '../src/members.js';

export default function Next() {
    var referer = document.referrer;

    return (
        <>
        {prev.has(referer) ? (
            <div>
                
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
