import { Form } from "react-bootstrap";
import "react-notifications/lib/notifications.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BulletGenerator from "./components/BulletGenerator/BulletGenerator";
import MyForm from "./components/MyForm";
//Component
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyForm />} />
        <Route path="/bullet-generator" element={<BulletGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}
