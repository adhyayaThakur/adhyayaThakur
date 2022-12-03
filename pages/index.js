import Header from '../components/Header'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar';
import NameCardV1 from '../components/NameCardV1';

export default function Home() {
  return (
    <>
      <Header />
      <NameCardV1/>
      <LeftSideBar />
      <RightSideBar />
    </>
  )
}
