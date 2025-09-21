import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Scholarships from "@/components/Scholarships";
import Books from "@/components/Books";
import { Calendar, Award, BookOpen } from "lucide-react";

const TimelineResourcesPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("timeline");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["timeline", "scholarships", "books"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Calendar className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold">Timeline & Resources</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="timeline" className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Timeline</span>
          </TabsTrigger>
          <TabsTrigger value="scholarships" className="flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span>Scholarships</span>
          </TabsTrigger>
          <TabsTrigger value="books" className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4" />
            <span>Books</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-6">
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Timeline Coming Soon</h3>
            <p className="text-muted-foreground">Academic timeline and important dates will be available here.</p>
          </div>
        </TabsContent>

        <TabsContent value="scholarships" className="mt-6">
          <Scholarships />
        </TabsContent>

        <TabsContent value="books" className="mt-6">
          <Books />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TimelineResourcesPage;