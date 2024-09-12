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
        description: "Rapidiously incentivize professional e-tailers and interactive web-readiness",
        buttonText: "READ MORE",
    },
    {
        id: "2",
        icon: "🎥",
        title: "Siding Services",
        description: "Rapidiously incentivize professional e-tailers and interactive web-readiness",
        buttonText: "READ MORE",
    },
    {
        id: "3",
        icon: "💬",
        title: "Water Damage",
        description: "Rapidiously incentivize professional e-tailers and interactive web-readiness",
        buttonText: "READ MORE",
    },
    {
        id: "4",
        icon: "💬",
        title: "Wind Damage",
        description: "Rapidiously incentivize professional e-tailers and interactive web-readiness",
        buttonText: "READ MORE",
    },
    {
        id: "5",
        icon: "💬",
        title: "Carpentry Services",
        description: "Rapidiously incentivize professional e-tailers and interactive web-readiness",
        buttonText: "READ MORE",
    },
    {
        id: "6",
        icon: "💬",
        title: "Painting Services",
        description: "Rapidiously incentivize professional e-tailers and interactive web-readiness",
        buttonText: "READ MORE",
    },
];
