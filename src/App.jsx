import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>React World On The Go</h1>
      <Suspense fallback={<p>Nadir Vai Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
