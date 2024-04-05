import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App Hai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "www.google.com",
//         target: "_blank",
//     },
//     children : "Click me to visit google"
// }

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'Google par jao',
    anotherUser
)

const anotherElement = (<a href="https://google.com" target='_blank'>Visit Google</a>)

ReactDOM.createRoot(document.getElementById('root')).render(
    // ReactElement
    // anotherElement
    reactElement
    // <App/>

)
