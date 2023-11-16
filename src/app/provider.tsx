"use client";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider> {children}</NextUIProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}
