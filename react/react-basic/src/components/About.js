import { useSearchParams, useParams } from "react-router-dom"

function About() {
  // const [params] = useSearchParams()
  // const id = params.get('id')
  const params = useParams()
  return (
    <div>
      About
      <p>路由传参{params.id}</p>
    </div>
  )
}

export default About