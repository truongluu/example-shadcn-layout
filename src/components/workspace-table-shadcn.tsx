import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clock, LayoutGrid, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const workspaces = [
  {
    name: "Workspace 1",
    location: "Brazil",
    users: 43,

    lastUsed: "3 hours ago",
    color: "bg-pink-500",
  },
  {
    name: "Workspace 2",
    location: "Chile",
    users: 13,

    lastUsed: "3 days ago",
    color: "bg-purple-500",
  },
  {
    name: "Workspace 3",
    location: "Argentina",
    users: 64,

    lastUsed: "24 days ago",
    color: "bg-orange-500",
  },
  {
    name: "Workspace 4",
    location: "Brazil",
    users: 9,

    lastUsed: "13 days ago",
    color: "bg-pink-500",
  },
  {
    name: "Workspace 5",
    location: "Brazil",
    users: 78,

    lastUsed: "9 months ago",
    color: "bg-yellow-500",
  },
  {
    name: "Workspace 6",
    location: "Brazil",
    users: 8,

    lastUsed: "1 year ago",
    color: "bg-purple-500",
  },
  {
    name: "Workspace 7",
    location: "Venezuela",
    users: 2,
    lastUsed: "1 year ago",
    color: "bg-yellow-500",
  },
];

const WorkspaceSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Workspace</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-w-7xl mx-auto p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">
                  <div className="flex items-center">
                    <LayoutGrid className="mr-2 h-4 w-4" />
                    Workspace
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Location
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Users
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Last used
                  </div>
                </TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workspaces.map((workspace) => (
                <TableRow key={workspace.name}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <div
                        className={`w-1 h-6 ${workspace.color} mr-3 rounded`}
                      ></div>
                      {workspace.name}
                    </div>
                  </TableCell>
                  <TableCell>{workspace.location}</TableCell>
                  <TableCell>{workspace.users}</TableCell>
                  <TableCell>{workspace.lastUsed}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Open
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkspaceSection;
