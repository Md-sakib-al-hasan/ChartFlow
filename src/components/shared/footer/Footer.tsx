import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react"
import footerlogo from "@/assets/footerlogo.png"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-100 py-10 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  xl:gap-[150px]">
          {/* Logo and Description */}
          <div className="space-y-4 lg:col-span-1">
            <Image src={footerlogo.src} width={100} height={50} alt="Logo" /> 
            <p className="text-sm text-slate-600 leading-relaxed">
              SalesRank AI offers a comprehensive suite of AI-powered solutions to help you find expert sales
              professionals who can elevate every aspect of your business. From performance ranking and skill
              verification to industry benchmarking and real-time analytics, we provide the insights and tools to
              optimize your sales strategy and drive growth.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-slate-500 hover:text-slate-800">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-800">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-800">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-800">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 ">
             {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[18px] text-slate-800">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-800">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-800">
                  Agency
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-800">
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-800">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* License Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[18px] text-slate-800">Licence</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-800">
                  Copyright
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-800">
                  Email Address
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[18px] text-slate-800">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-slate-600 mt-0.5" />
                <span className="text-sm text-slate-600">(408) 555-0120</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-slate-600 mt-0.5" />
                <span className="text-sm text-slate-600">hey@locoism.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-slate-600 mt-0.5" />
                <span className="text-sm text-slate-600">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center">© 2023 SalesRank AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
