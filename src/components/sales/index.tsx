import { AvatarFallback } from "@radix-ui/react-avatar";
import { CircleDollarSign } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-grey-800">
            Last clients
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4"></CircleDollarSign>
        </div>
        <CardDescription className="text-xs font-normal">
          Your last clients.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/lleoserrano.png" />
            <AvatarFallback>LS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold ">
              Leonardo Serrano
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              my_email@gmail.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/lleoserrano.png" />
            <AvatarFallback>LS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold ">
              Leonardo Serrano
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              my_email@gmail.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/lleoserrano.png" />
            <AvatarFallback>LS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold ">
              Leonardo Serrano
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              my_email@gmail.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
