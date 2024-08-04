import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SnsLinksList from "@/components/SnsLinksList";
import "@/styles/reset.css";  
import "@/styles/SnsLinksList.css"; 

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(
    <StrictMode>
      <SnsLinksList />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}
