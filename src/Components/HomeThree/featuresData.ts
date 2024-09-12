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
      id: '1', // Puedes usar ids generados o mantener simples identificadores string
      icon: '📄',
      title: 'Online Documentation',
      description: 'Rapidiously incentivize professional e-tailers and interactive web-readiness',
      buttonText: 'READ MORE',
    },
    {
      id: '2',
      icon: '🎥',
      title: 'Watch Video Tutorial',
      description: 'Rapidiously incentivize professional e-tailers and interactive web-readiness',
      buttonText: 'READ MORE',
    },
    {
      id: '3',
      icon: '💬',
      title: 'Dedicated Supports',
      description: 'Rapidiously incentivize professional e-tailers and interactive web-readiness',
      buttonText: 'READ MORE',
    },
  ];
  