import { Link, Outlet } from "react-router-dom"

const About = () => {
    return (
      <>
        <div>오늘의 이벤트</div>
        <Link to="/event/one">1</Link>
        <h4>/</h4>
        <Link to="/event/two">2</Link>
        <Outlet></Outlet>
      </>
    )
  }
  export default About