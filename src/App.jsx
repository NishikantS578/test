import { useState } from 'react'

function notify(e)
{
    navigator.serviceWorker.register('sw.js');
    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Notification with ServiceWorker');
        });
      }
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
