import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
];

const ComplexDashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <nav className="mt-6">
          <Button
            variant="ghost"
            className="w-full justify-start text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Overview
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Analytics
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Reports
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
              <div className="ml-4">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-64"
                  icon={<Search className="h-4 w-4" />}
                />
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" className="ml-2">
                John Doe <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>

            <div className="mt-4">
              <div className="flex flex-wrap -mx-6">
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$24,000</div>
                      <p className="text-xs text-gray-500">
                        +18% from last month
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>New Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,200</div>
                      <p className="text-xs text-gray-500">
                        +5% from last week
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">25</div>
                      <p className="text-xs text-gray-500">
                        2 completed this week
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full" style={{ height: "400px" }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ComplexDashboardLayout;
