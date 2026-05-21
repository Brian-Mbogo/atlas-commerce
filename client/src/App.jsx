// App mounts the router so every page in Atlas Commerce is controlled from one place.
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'

function App() {
  return <RouterProvider router={router} />
}

export default App
