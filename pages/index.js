import Head from 'next/head'
import React, { useEffect } from 'react';
import { members } from '../src/members.js';

export default function Home() {

    useEffect(() => {

        const newDiv = document.createElement('div');

        for (const [name, link] of members) {
            var toAppend = document.createElement('a');
            toAppend.href = `${link}`;
            toAppend.text = `${name}`;
            newDiv.append(toAppend);
            newDiv.append(document.createElement('br'));
        }
        
        // for (var i = 0; i < toAppend.length; i++) {
        //   newDiv.append(toAppend[i]);
        // }

        document.body.append(newDiv);

    }, []);

    return (
        <>
        <Head>
            <title>d3l n3st</title>
        </Head>
        <main>
            <p><a>&lt;</a>d3l n3st webring⸸!<a>&gt;</a></p>
            <p>to join, make a branch <a href="https://github.com/LeonDong02/d3l-n3st">here</a> and add your name and website link to the src/members.js file, then make a pull request <a href="https://github.com/LeonDong02/d3l-n3st/pulls">here</a></p>
            <p>make sure that somewhere on your website you have the links "https://d3l-n3st.vercel.app/prev" and "https://d3l-n3st.vercel.app/next" to link backwards and forwards in the webring</p>
            <b>the webring is currently invite only</b>
            <p>try out the webring here: <a href="/prev">prev</a> <a href="/next">next</a></p>
            <p>members list:</p>
        </main>
        </>
    )
}
