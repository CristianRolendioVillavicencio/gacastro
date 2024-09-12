// featuresData.ts
export interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
    buttonText: string;
}

export const features: Feature[] = [
    {
        id: "1", // Puedes usar ids generados o mantener simples identificadores string
        icon: "📄",
        title: "Roofing Services",
        description:
            "Ensure the durability and safety of your home with our expert roofing services. We offer installation, repair, and maintenance to keep your roof in top condition.",
        buttonText: "READ MORE",
    },
    {
        id: "2",
        icon: "🎥",
        title: "Siding Services",
        description:
            "Enhance the look and protection of your home with our siding services. We provide high-quality siding installation and repair to suit your style and budget.",
        buttonText: "READ MORE",
    },
    {
        id: "3",
        icon: "💬",
        title: "Copper Services",
        description:
            "We specialize in copper roofing and guttering solutions. Our copper services add elegance and longevity to your property, ensuring superior weather resistance.",
        buttonText: "READ MORE",
    },
    {
        id: "4",
        icon: "💬",
        title: "Wind Damage Services",
        description:
            "Protect your home from severe weather. Our wind damage services include assessment, repair, and reinforcement to keep your home safe and secure.",
        buttonText: "READ MORE",
    },
    {
        id: "5",
        icon: "💬",
        title: "Water Damage Services",
        description:
            "Address water damage promptly with our specialized services. We provide comprehensive water damage assessment, repair, and prevention solutions.",
        buttonText: "READ MORE",
    },

    {
        id: "6",
        icon: "💬",
        title: "Painting Services",
        description:
            "Our tree damage services help you recover from fallen or damaged trees. We offer removal, repair, and preventive measures to protect your property.",
        buttonText: "READ MORE",
    },
    {
        id: "6",
        icon: "💬",
        title: "Carpentry Services",
        description:
            "Our tree damage services help you recover from fallen or damaged trees. We offer removal, repair, and preventive measures to protect your property.",
        buttonText: "READ MORE",
    },
    {
        id: "7",
        icon: "💬",
        title: "More Services",
        description:
            "Our tree damage services help you recover from fallen or damaged trees. We offer removal, repair, and preventive measures to protect your property.",
        buttonText: "READ MORE",
    },
];
