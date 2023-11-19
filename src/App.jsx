import { useState } from 'react'

function notify(e)
{
    Notification.requestPermission()
    .then((x) => {
        if(x == "granted")
        {
            new Notification("Example", {
                body: "testing notification",
                tag: "price-change"
            });
        }
        console.log(x);
    });
}

function App() {
    setTimeout(() => {
        new Notification("hello");
    }, 1000)
  return (
    <>
      <button onClick={notify}>Click</button>
    </>
  )
}

export default App
