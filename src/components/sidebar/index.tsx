import {
  Home,
  LogOut,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside
        className="fixed inset-y-0 left-0 z-10 hidden 
      w-14 border-r bg-background sm:flex flex-col"
      >
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="flex h-9 w-9 shink-0 items-center 
            justify-center bg-primary text-primary-foreground rounded-full"
            >
              <Package className="h4 w-4">
                <span className="sr-only">Logotype</span>
              </Package>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shink-0 items-center 
            justify-center rounded-lg text-muted-foreground transition-colors 
            hover:text-foreground"
                >
                  <Home className="h4 w-4">
                    <span className="sr-only">Home</span>
                  </Home>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shink-0 items-center 
            justify-center rounded-lg text-muted-foreground transition-colors 
            hover:text-foreground"
                >
                  <ShoppingBag className="h4 w-4">
                    <span className="sr-only">Orders</span>
                  </ShoppingBag>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Orders</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shink-0 items-center 
            justify-center rounded-lg text-muted-foreground transition-colors 
            hover:text-foreground"
                >
                  <Package className="h4 w-4">
                    <span className="sr-only">Products</span>
                  </Package>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shink-0 items-center 
            justify-center rounded-lg text-muted-foreground transition-colors 
            hover:text-foreground"
                >
                  <Users className="h4 w-4">
                    <span className="sr-only">Clients</span>
                  </Users>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clients</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shink-0 items-center 
            justify-center rounded-lg text-muted-foreground transition-colors 
            hover:text-foreground"
                >
                  <Settings2 className="h4 w-4">
                    <span className="sr-only">Settings</span>
                  </Settings2>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shink-0 items-center 
            justify-center rounded-lg text-muted-foreground transition-colors 
            hover:text-foreground"
                >
                  <LogOut className="h4 w-4">
                    <span className="sr-only">Exit</span>
                  </LogOut>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Exit</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden   sm:gap-4 sm:py-4 sm:pl-14 ">
        <header
          className="sticky top-0 z-30 flex h-14 items-center px-4 border-b-background gap-4 
        sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5 "></PanelBottom>
                <span className="sr-only">Open / Close menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x flex flex-col">
              <nav className="grid gap-6 text-lg font-medium px-2 py-2 ">
                <p className="flex items-center gap-2 px-2">
                  <Link
                    href="#"
                    className="flex h-10 w-10 bg-primary rounded-full text-lg 
                   items-center justify-center text-primary-foreground md:text-base gap-2"
                    prefetch={false}
                  >
                    <Package className="h-5 w-5 transition-all"></Package>
                    <span className="sr-only">Logotype</span>
                  </Link>
                  Dashboard
                </p>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2 text-muted-foreground
                   hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all"></Home>
                  Inicio
                  <span className="sr-only">Inicio</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2 text-muted-foreground
                   hover:text-foreground"
                  prefetch={false}
                >
                  <ShoppingBag className="h-5 w-5 transition-all"></ShoppingBag>
                  Orders
                  <span className="sr-only">Shopping Bag</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2 text-muted-foreground
                   hover:text-foreground"
                  prefetch={false}
                >
                  <ShoppingBag className="h-5 w-5 transition-all"></ShoppingBag>
                  Products
                  <span className="sr-only">Products</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2 text-muted-foreground
                   hover:text-foreground"
                  prefetch={false}
                >
                  <Users className="h-5 w-5 transition-all"></Users>
                  Users
                  <span className="sr-only">Users</span>
                </Link>
              </nav>

              <nav className="mt-auto gap-6 text-lg font-medium px-2 py-2 flex flex-col">
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2 text-muted-foreground
                   hover:text-foreground"
                  prefetch={false}
                >
                  <Settings2 className="h-5 w-5 transition-all"></Settings2>
                  Settings
                  <span className="sr-only">Settings</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2 text-muted-foreground
                   hover:text-foreground"
                  prefetch={false}
                >
                  <LogOut className="h-5 w-5 transition-all"></LogOut>
                  Settings
                  <span className="sr-only">LogOut</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  );
}
