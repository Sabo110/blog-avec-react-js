import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NavbarTest from '../components/NavbarTest'

function Category({children}) {
  return (
    <>
        <NavbarTest />
        <div> {children} </div>
        <Footer />
    </>
  )
}
export default Category