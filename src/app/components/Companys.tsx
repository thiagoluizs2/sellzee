import Image from "next/image";
import FedEx from '@/assets/image 25.png'
import FedEx90 from '@/assets/90a2c3b80d4b7a7599788bfeb9b848ce-removebg-preview 1.png'
import Google from '@/assets/google-1-removebg-preview 1.png'
import Ola from '@/assets/image 27.png'
import Microsoft from '@/assets/new-Microsoft-logo-removebg-preview 1.png'
import Amazon from '@/assets/539f3ffbecad044276726c01-removebg-preview 1.png'
import Walmart from '@/assets/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612 1.png'
import { Card } from "./Card";

export function Companys () {
  return (
    <section className="max-w-[1367px] px-14 py-10">
      <div className="grid grid-cols-4 place-items-center">
        <Card>
          <Image src={FedEx} alt="FedEx Logo" className="max-w-[164px] h-[46px]" />
        </Card>
        <Card>
          <Image src={Google} alt="" className="max-w-[164px] h-[46px]" />
        </Card>
        <Card>
          <Image src={Ola} alt="" className="max-w-[164px] h-[46px]" />
        </Card>
        <Card>
          <Image src={Microsoft} alt="" className="max-w-[164px] h-[46px]" />
        </Card>
      </div>
      <div className="grid grid-cols-3 place-items-center">
        <Card>
          <Image src={Amazon} alt="" className="max-w-[164px] h-[46px]" />
        </Card>
        <Card>
          <Image src={FedEx90} alt="" className="max-w-[164px] h-[46px]" />
        </Card>
        <Card>
          <Image src={Walmart} alt="" className="max-w-[164px] h-[46px]" />
        </Card>
      </div>
    </section>
  )
}