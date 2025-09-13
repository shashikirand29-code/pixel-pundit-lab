import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InteractiveTutorial = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          Interactive Tutorial
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="javascript" className="mb-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="java">Java</TabsTrigger>
          </TabsList>
          <TabsContent value="javascript" className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Functions & Recursion</h3>
            <p className="text-muted-foreground mb-4">
              Recursion is a technique where a function calls itself to solve a smaller instance of the same problem.
            </p>
          </TabsContent>
          <TabsContent value="python" className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Python Fundamentals</h3>
            <p className="text-muted-foreground mb-4">
              Learn Python basics with interactive examples and exercises.
            </p>
          </TabsContent>
          <TabsContent value="java" className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Java Essentials</h3>
            <p className="text-muted-foreground mb-4">
              Master Java programming with hands-on tutorials.
            </p>
          </TabsContent>
        </Tabs>
        
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="font-semibold mb-3">Exercise: Fix the Factorial Function</h4>
          <p className="text-sm text-muted-foreground mb-3">
            The factorial function on the left has a few issues. Fix the following:
          </p>
          <ul className="text-sm text-muted-foreground mb-4 space-y-1 ml-4">
            <li>• Use strict equality checks</li>
            <li>• Add handling for negative numbers</li>
            <li>• Prevent stack overflow for large numbers</li>
          </ul>
          <Button className="mb-3">Show Solution</Button>
          <div className="bg-warning/20 border border-warning/30 rounded-lg p-3 text-sm">
            <strong className="text-warning">Hint:</strong> Add a condition at the beginning of the function to check if n is negative and throw an error or return a special value.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveTutorial;