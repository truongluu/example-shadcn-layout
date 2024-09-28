import { Button } from "@/components/ui/button";

const RingButtonExample = () => {
  return (
    <div className="p-4 space-y-4 space-x-4">
      <h2 className="text-lg font-semibold">
        Shadcn UI Buttons with Ring Effects
      </h2>

      <Button className="ring-1 ring-blue-500 ring-offset-2 hover:ring-blue-600">
        Default Ring
      </Button>

      <Button
        variant="outline"
        className="ring-1 ring-green-500 ring-offset-2 focus:ring-4"
      >
        Focus Ring
      </Button>

      <Button
        variant="ghost"
        className="ring-1 ring-purple-500 ring-offset-2 active:ring-purple-700"
      >
        Active Ring
      </Button>
    </div>
  );
};

export default RingButtonExample;
