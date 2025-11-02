import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
<<<<<<< HEAD
=======
import ProductDetail from "@/pages/ProductDetail";
>>>>>>> 34a4f782f312307699de96b76e2c43780e1deb25
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/over-ons" component={About} />
<<<<<<< HEAD
=======
      <Route path="/product/:id" component={ProductDetail} />
>>>>>>> 34a4f782f312307699de96b76e2c43780e1deb25
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
