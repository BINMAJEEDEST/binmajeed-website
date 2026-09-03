export const site = {
  name: "Bin Majeed Documents Clearing Services",
  shortName: "Bin Majeed",
  phoneDisplay: "+971 54 769 8830",
  phoneHref: "tel:+971547698830",
  whatsappNumber: "971547698830",
  email: "info@binmajeed.ae",
  address: "Office GR87, Al Safiya Building, Near Abu Hail Metro Station, Dubai, UAE",
  hours: "Saturday – Thursday, 9:00 AM – 6:30 PM",
  domain: "https://binmajeed.ae",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    slug: "pro-services",
    title: "PRO Services",
    short: "Ongoing government liaison and document processing for individuals and companies.",
  },
  {
    slug: "visa-immigration",
    title: "Visa & Immigration Services",
    short: "UAE, family and employment visa processing from application to approval.",
  },
  {
    slug: "business-setup",
    title: "Business Setup & Company Formation",
    short: "Mainland and free zone company formation and trade licence support.",
  },
  {
    slug: "government-labour",
    title: "Government & Labour Services",
    short: "MOHRE, labour contracts and Emirates ID related transactions.",
  },
  {
    slug: "other-services",
    title: "Other Services",
    short: "Document clearing, external approvals and additional government transactions.",
  },
];
