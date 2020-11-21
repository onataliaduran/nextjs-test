import Document, { Html, Head, Main, NextScript } from 'next/document';

// IMPORTANT:  
// Keep this file as minimal as posible
// The content of this file is available on every page 
// This is a root file that can affect the whole aplicaction

class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="custom" content="yolo" />
                </Head>
                <body>
                    <Main></Main>
                </body>
                <NextScript />
            </Html>
        )
    }
}

export default CustomDocument;




