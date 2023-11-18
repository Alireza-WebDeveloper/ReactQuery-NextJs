'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
};

const ReactQueryPvorider: React.FC<PropsWithChildren> = ({ children }) => {
  const [queryClientStore] = useState(
    () => new QueryClient(queryClientOptions)
  );
  return (
    <QueryClientProvider client={queryClientStore}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default ReactQueryPvorider;
