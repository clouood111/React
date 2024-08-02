import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SnsLinks from "./components/SnsLinks";
import "@/styles/reset.css";  
import "@/styles/SnsLink.css"; 

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <SnsLinks />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}
