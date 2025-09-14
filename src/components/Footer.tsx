import { Button } from "@/components/ui/button";
import { Rss, Linkedin, Github, Youtube, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "Contact", href: "#contact" },
      { label: "Shipping", href: "#shipping" },
      { label: "Careers", href: "#careers" },
      { label: "About Us", href: "#about" }
    ],
    support: [
      { label: "Sustainability", href: "#sustainability" },
      { label: "Privacy & Legal", href: "#privacy" },
      { label: "Blog", href: "#blog" },
      { label: "Donate", href: "#donate" }
    ]
  };

  const socialIcons = [
    { icon: Rss, href: "#rss" },
    { icon: Linkedin, href: "#linkedin" },
    { icon: Github, href: "#github" },
    { icon: Youtube, href: "#youtube" },
    { icon: Instagram, href: "#instagram" },
    { icon: Twitter, href: "#twitter" }
  ];

  return (
    <footer className="relative bg-hero-image bg-cover bg-center text-gray-300">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 py-16 relative z-10 text-center">
        {/* Newsletter */}
        <div className="max-w-xl mx-auto mb-12">
          <p className="mb-4 text-gray-300">
            Subscribe for updates on products, OS features, and promotions.
          </p>
          <Button variant="secondary" size="lg">
            SUBSCRIBE
          </Button>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12">
          {[...footerLinks.company, ...footerLinks.support].map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="text-gray-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-4 mb-12">
          {socialIcons.map(({ icon: Icon, href }, index) => (
            <a 
              key={index}
              href={href}
              className="w-10 h-10 bg-white/10 rounded flex items-center justify-center"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p className="mb-2">Copyright © 2025 System76, Inc</p>
          <p className="text-gray-500">
            * Financing subject by WebBank member FDIC and serviced by Affirm.
            Intel, the Intel Logo, Intel Core, Iris, and Xeon are trademarks of Intel Corporation or its subsidiaries in the US and/or other countries.
          </p>
          <a 
            href="#data-collection" 
            className="text-pop-teal mt-4 inline-block"
          >
            Manage Website Data Collection Preferences
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;