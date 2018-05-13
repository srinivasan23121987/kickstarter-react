import React from 'react';
import Header, { Component } from './header';
import Head from 'next/head';
import { Menu, Card } from 'semantic-ui-react';
export default () => {
    let paddingtop={
        'padding-top':'20px'
    }
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

            </Head>
            <Header />
        </div>
    )

}
