// featuresData.ts
export interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    link: string;
}

export const features: Feature[] = [
    {
        id: "1",
        icon: "🏠", // Cambia este icono a algo representativo de Roofing
        title: "Roofing Services",
        description: "Professional roofing services to protect your home.",
        buttonText: "READ MORE",
        link: "/services/roofing-services",
    },
    {
        id: "2",
        icon: "🏡", // Cambia este icono a algo representativo de Siding
        title: "Siding Services",
        description: "Enhance your home’s exterior with quality siding services.",
        buttonText: "READ MORE",
        link: "/services/siding-services",
    },
    {
        id: "3",
        icon: "🛠️", // Icono representativo de Carpentry
        title: "Carpentry Services",
        description: "Expert carpentry solutions for your home improvement needs.",
        buttonText: "READ MORE",
        link: "/services/carpentry-services",
    },
    {
        id: "4",
        icon: "🎨", // Icono representativo de Painting
        title: "Painting Services",
        description: "High-quality painting services to beautify your space.",
        buttonText: "READ MORE",
        link: "/services/painting-services",
    },
    {
        id: "5",
        icon: "🪙", // Icono representativo de Copper
        title: "Copper Services",
        description: "Specialized copper installations and maintenance services.",
        buttonText: "READ MORE",
        link: "/services/copper-services",
    },
    {
        id: "6",
        icon: "💨", // Icono representativo de Wind Damage
        title: "Wind Damage Services",
        description: "Repair services for damage caused by windstorms.",
        buttonText: "READ MORE",
        link: "/services/wind-damage-services",
    },
    {
        id: "7",
        icon: "💧", // Icono representativo de Water Damage
        title: "Water Damage Services",
        description: "Professional water damage restoration services.",
        buttonText: "READ MORE",
        link: "/services/water-damage-services",
    },
    {
        id: "8",
        icon: "🌳", // Icono representativo de Tree Damage
        title: "Tree Damage Services",
        description: "Repair services for damages caused by fallen trees.",
        buttonText: "READ MORE",
        link: "/services/tree-damage-services",
    },
    {
        id: "9",
        icon: "🔍", // Icono de búsqueda o navegación para "More Services"
        title: "More Services",
        description: "Explore more of our services to find what you need.",
        buttonText: "MORE SERVICES ➔",
        link: "/services",
    },
];
