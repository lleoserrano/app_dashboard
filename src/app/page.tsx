import { Chart } from "@/components/chart";
import { Sales } from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Store, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="text-lg font-semibold">
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Total Revenue
              </CardTitle>
              <DollarSign className="ml-auto h-6=4 w-4"></DollarSign>
            </div>
            <CardDescription className="text-xs font-normal">
              Total revenue generated this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base font-bold sm:text-lg">$ 40.000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-lg font-semibold">
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                New clients
              </CardTitle>
              <Users className="ml-auto h-6=4 w-4"></Users>
            </div>
            <CardDescription className="text-xs font-normal">
              New clients this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base font-bold sm:text-lg">120</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-lg font-semibold">
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Orders today
              </CardTitle>
              <Store className="ml-auto h-6=4 w-4"></Store>
            </div>
            <CardDescription className="text-xs font-normal">
              Total orders today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base font-bold sm:text-lg">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-lg font-semibold">
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Orders monthly
              </CardTitle>
              <Store className="ml-auto h-6=4 w-4"></Store>
            </div>
            <CardDescription className="text-xs font-normal">
              Total order this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base font-bold sm:text-lg">12</p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-4 flex flex-col gap-4 md:flex-row">
        <Chart />
        <Sales />
      </section>
    </main>
  );
}
