import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IssuesList from './components/Core/IssuesList'
import { useRepository } from './contexts/RepositoryContext'
import RepoForm from './components/Core/RepoForm'

const App = () =>{
  const { repository } = useRepository()

  return (
    <div className='app'>
      <Router >
        <Routes>
          <Route path="/" element={<RepoForm />} />
          <Route path="/issues" element={<IssuesList name={repository.name} owner={repository.owner}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
