import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProgressTracker = () => {
  const progressItems = [
    { subject: "JavaScript Basics", status: "Completed", statusType: "success" },
    { subject: "Algorithms", status: "80% Completed", statusType: "success" },
    { subject: "Data Structures", status: "40% Completed", statusType: "warning" },
    { subject: "Web Development", status: "20% Completed", statusType: "warning" }
  ];

  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          {progressItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm">{item.subject}:</span>
              <span className={`text-sm font-medium ${
                item.statusType === 'success' ? 'text-success' : 'text-warning'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
        <Button className="w-full bg-primary hover:bg-secondary">
          Generate New Exercise
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;