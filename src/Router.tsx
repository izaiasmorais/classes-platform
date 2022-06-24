import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Susbcribe } from "./pages/Susbcribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Susbcribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
