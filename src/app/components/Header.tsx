import Image from "next/image";
import Logo from '@/assets/images-removebg-preview 2.png'
import { Button } from "./Button";
import Dashboard from '@/assets/Pixel True Mockup 1.png'
import { Container } from "./Container";

export function Header() {
  return (
    <Container>
      <header className="h-[820px] max-w-[1367px] px-14 py-6">
        <div className="flex items-center justify-between">
          <div className="">
            <Image src={Logo} alt="Logo" />
          </div>
          <div>
            <nav>
              <ul className="flex gap-7">
                <li className="text-white text-[20px]">
                  <a href="#">Home</a>
                </li>
                <li className="text-white text-[20px] opacity-70">
                  <a href="#">About</a>
                </li>
                <li className="text-white text-[20px] opacity-70">
                  <a href="#">Contact</a>
                </li>
                <li className="text-white text-[20px] opacity-70">
                  <a href="#">Testimonial</a>
                </li>
                <li className="text-white text-[20px] opacity-70">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="flex items-start justify-center mt-12">
          <div className="max-w-[464px] mt-8">
            <p className="text-white uppercase text-[20px] tracking-wide">
              Inspiration technology.
            </p>
            <h1 className="text-white text-[61px] leading-[73.2px]">
              <span className="font-bold whitespace-nowrap">Runs faster.</span> Costs less and never breaks.
            </h1>

            <div className="bg-white max-w-[365px] h-[1px] my-5"></div>

            <p className="opacity-70 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat </p>
            <div className="flex items-center justify-between mt-4">
              <Button>Get Started</Button>
              <button className="py-[15px] px-[30px] outline outline-1 outline-white rounded">
                <span className="text-white">Free Trial</span>
              </button>
            </div>
          </div>
          <div className="flex-1 items-center justify-center">
            <Image src={Dashboard} alt="Dashboard" />
          </div>
        </div>
      </header>
    </Container>
  )
}