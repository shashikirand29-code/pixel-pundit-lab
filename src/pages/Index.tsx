import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import InteractiveTutorial from "@/components/InteractiveTutorial";
import FeatureGrid from "@/components/FeatureGrid";
import ProgressTracker from "@/components/ProgressTracker";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <main className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <CodeEditor />
            <InteractiveTutorial />
          </div>
          
          <FeatureGrid />
          
          <div className="max-w-2xl mx-auto">
            <ProgressTracker />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
