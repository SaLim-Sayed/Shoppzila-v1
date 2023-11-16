"use client";
import CollectionPage from "@/components/Collection";
import BoxPage from "./boxes/page";
import Products from "./products/page";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "@/store/store"; 

const queryClient = new QueryClient();

export default function Home() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Products />
        <BoxPage />
        <CollectionPage />
        
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}
