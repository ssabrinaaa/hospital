import Banner from './components/Banner/index.tsx';
import Companies from './components/Companies/Companies.tsx';
import Courses from './components/Offerings/index.tsx';
import Mentor from './components/Mentor/index.tsx';
import Testimonials from './components/Testimonials/index.tsx';
import Newsletter from './components/Newsletter/Newsletter.tsx';


export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <Courses />
      {/* <Mentor />
      <Testimonials />
      <Newsletter /> */}
    </main>
  )
}
