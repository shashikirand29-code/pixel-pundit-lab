import { Play, Search, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CodeEditor = () => {
  const codeLines = [
    "// Calculate the factorial of a number",
    "function factorial(n) {",
    "  if (n == 0) {",
    "    return 1;",
    "  } else {",
    "    return n * factorial(n - 1);",
    "  }",
    "}",
    "",
    "// Test the function",
    "console.log(factorial(5));",
  ];

  const errorLines = [2, 5, 10];

  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary" />
          Code Editor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="editor-theme rounded-lg overflow-hidden mb-4">
          <div className="editor-header px-4 py-3 flex justify-between items-center">
            <span className="text-sm text-muted-foreground">script.js</span>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" className="h-7 text-xs">
                <Play className="w-3 h-3 mr-1" />
                Run
              </Button>
              <Button size="sm" variant="secondary" className="h-7 text-xs">
                <Search className="w-3 h-3 mr-1" />
                Analyze
              </Button>
              <Button size="sm" variant="secondary" className="h-7 text-xs">
                Format
              </Button>
            </div>
          </div>
          <div className="p-4 text-sm min-h-[200px] max-h-[300px] overflow-y-auto">
            {codeLines.map((line, index) => (
              <div key={index} className="flex mb-1">
                <span className="line-number w-8 text-right pr-3">
                  {index + 1}
                </span>
                <span className={`flex-1 ${errorLines.includes(index) ? 'error-line' : ''}`}>
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-black/20 rounded-lg p-4">
          <h3 className="font-semibold mb-3">Analysis Results</h3>
          <div className="space-y-2 text-sm">
            <p className="error-line">Line 3: Use strict equality (===) instead of loose equality (==)</p>
            <p className="error-line">Line 6: Missing base case for negative numbers</p>
            <p className="error-line">Line 11: Function works but will crash for negative inputs</p>
            <p className="text-warning mt-3">
              <strong>Suggestion:</strong> Add a condition to handle negative numbers and use strict equality checks.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeEditor;