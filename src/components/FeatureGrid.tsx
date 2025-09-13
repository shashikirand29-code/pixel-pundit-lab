import { Bug, Lightbulb, Network } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: Bug,
      title: "Error Detection",
      description: "Advanced static analysis to detect errors and potential bugs in your code."
    },
    {
      icon: Lightbulb,
      title: "Debugging Suggestions",
      description: "Get intelligent suggestions for fixing errors and improving code quality."
    },
    {
      icon: Network,
      title: "Exercise Generation",
      description: "Personalized coding exercises based on your skill level and learning goals."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="glass-card rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:bg-white/10"
        >
          <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
          <p className="text-muted-foreground text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;