import { BackgroundBoxesDemo } from "@components/Hero";
import { BoxesCore } from "@components/ui/background-boxes";
const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
import { FloatingNav } from "@components/ui/floatingNavbar";
import { Spotlight } from "@components/ui/spotLight";
export default function Home() {
  return (
    <div className="bg-background relative">
      <div className="w-1/2">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 absolute"
          fill="lightGray"
        />
      </div>
      <div className="">
        <BackgroundBoxesDemo />
      </div>
      <div className="border-black">
        <FloatingNav navItems={navItems} />
      </div>
      hello yaswanth
    </div>
  );
}
