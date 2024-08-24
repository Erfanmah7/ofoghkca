// import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import Layout from "./layout/Layout";
import Router from "./routers/Router";

function App() {
  // const queryClient = new useQueryClient();

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <Layout>
        <Router />
      </Layout>
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
