import '@styles/globals.css';

export const metadata = {
    title: "Get Your Prompts",
    description: "Discover and Share AI prompts."
}  

const RootLayout = () => {
  return (
    <html len='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
