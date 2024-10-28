import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IssuesList from './components/Core/IssuesList'
import { useRepository } from './contexts/RepositoryContext'
import RepoForm from './components/Core/RepoForm'
import { AlertProvider } from './contexts/AlertContext'

const App = () =>{
  const { repository } = useRepository()

  return (
    <AlertProvider>
      <div className='app'>
        <Router >
          <Routes>
            <Route path="/" element={<RepoForm />} />
            <Route path="/issues" element={<IssuesList name={repository.name} owner={repository.owner}/>} />
          </Routes>
        </Router>
      </div>
    </AlertProvider>
  )
}

export default App
