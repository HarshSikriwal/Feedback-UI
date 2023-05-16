import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is my first React app in the process of learning
            React to leave feedback for a product or service
        </p>

        <p> Version: 1.0.0</p>
        <Link to='/'>Go to homepage</Link>
      </div>
    </Card>
  )
}

export default AboutPage
