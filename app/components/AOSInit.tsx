"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      offset: 120,
    });

    AOS.refresh();
  }, []);

  return null;
}