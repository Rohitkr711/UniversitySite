import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import ScholorshipHeroComp from '../../Components/ScholorShipAndVoucherComps/ScholorshipHeroComp';
import ScholarshipListComp from '../../Components/ScholorShipAndVoucherComps/ScholorshipListComp';
import VoucherClaim from '../../Components/ScholorShipAndVoucherComps/VoucherClaimComp';


function ScholorshipAndVoucher() {
  return (
    <>

        <Navbar />
      <div className='px-44 pt-6'>
        <ScholorshipHeroComp />
        <div className='flex'>
          <ScholarshipListComp />
          <VoucherClaim />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ScholorshipAndVoucher