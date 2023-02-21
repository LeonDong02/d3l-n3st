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
            <p><a>&lt;</a>d3l n3st webring!<a>&gt;</a></p>
            <p>to join, make a pull request <a href="https://github.com/LeonDong02/d3l-n3st/pulls">here</a> by adding your name and link to the members map in the src/members.js file</p>
            <p>on anywhere on your website, include the links "https://d3l-n3st.vercel.app/prev" and "https://d3l-n3st.vercel.app/next" to link backwards and forwards in the webring</p>
            <p>the webring is currently invite only</p>
            <p>try out the webring here: <a href="/prev">prev</a> <a href="/next">next</a></p>
            <p>members list:</p>
        </main>
        </>
    )
}
