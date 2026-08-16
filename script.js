// script.js for the Northstar Clothing Co. customer support portal.
// Wires the order, returns, stock, and chat interfaces to the
// serverless support endpoint at POST /api/support.

const SUPPORT_ENDPOINT = "/api/support";

/**
 * Sends a support request to the backend and returns the parsed JSON.
 * Throws on network failure or a non-OK response so callers can show
 * a friendly fallback message.
 */
async function requestSupport(payload) {
  const response = await fetch(SUPPORT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === false) {
    const message =
      data.error ||
      "Something went wrong while contacting Northstar support. Please try again.";
    throw new Error(message);
  }

  return data;
}

function showResult(box, message, isError = false) {
  if (!box) return;
  box.hidden = false;
  box.textContent = message;
  box.classList.toggle("is-error", Boolean(isError));
}

function setLoading(button, loading, idleLabel) {
  if (!button) return;
  button.disabled = loading;
  button.textContent = loading ? "Checking..." : idleLabel;
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Mobile menu
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isActive = menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isActive));
    });

    navLinks.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });

    body.addEventListener("click", (event) => {
      const target = event.target;
      if (
        navLinks.classList.contains("active") &&
        target !== menuToggle &&
        !navLinks.contains(target)
      ) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Search panel
  const searchButton = document.getElementById("searchButton");
  const closeSearch = document.getElementById("closeSearch");
  const searchPanel = document.getElementById("searchPanel");
  const searchInput = document.getElementById("searchInput");
  if (searchButton && closeSearch && searchPanel && searchInput) {
    const openPanel = () => {
      searchPanel.classList.add("active");
      searchPanel.setAttribute("aria-hidden", "false");
      searchInput.focus();
      body.style.overflow = "hidden";
    };
    const closePanel = () => {
      searchPanel.classList.remove("active");
      searchPanel.setAttribute("aria-hidden", "true");
      body.style.overflow = "";
    };

    searchButton.addEventListener("click", openPanel);
    closeSearch.addEventListener("click", closePanel);
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closePanel();
    });
  }

  // Sticky header
  const siteHeader = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (!siteHeader) return;
    siteHeader.classList.toggle("scrolled", window.scrollY > 80);
  });

  // Order status form
  const orderForm = document.getElementById("orderForm");
  const orderResult = document.getElementById("orderResult");
  if (orderForm) {
    const orderInput = document.getElementById("orderId");
    const submitBtn = orderForm.querySelector('button[type="submit"]');
    orderForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const orderId = (orderInput?.value || "").trim();
      if (!orderId) {
        showResult(orderResult, "Please enter your Order ID.", true);
        return;
      }
      setLoading(submitBtn, true, "Track Order");
      try {
        const data = await requestSupport({ orderId });
        showResult(orderResult, data.reply);
      } catch (error) {
        showResult(orderResult, error.message, true);
      } finally {
        setLoading(submitBtn, false, "Track Order");
      }
    });
  }

  // Returns eligibility buttons
  const returnResult = document.getElementById("returnResult");
  const returnButtons = document.querySelectorAll(".return-option");
  returnButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const within30Days = button.dataset.within === "true";
      returnButtons.forEach((b) => (b.disabled = true));
      try {
        const data = await requestSupport({ within30Days });
        showResult(returnResult, data.reply);
      } catch (error) {
        showResult(returnResult, error.message, true);
      } finally {
        returnButtons.forEach((b) => (b.disabled = false));
      }
    });
  });

  // Stock availability form
  const stockForm = document.getElementById("stockForm");
  const stockResult = document.getElementById("stockResult");
  if (stockForm) {
    const productInput = document.getElementById("productName");
    const submitBtn = stockForm.querySelector('button[type="submit"]');
    stockForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const productName = (productInput?.value || "").trim();
      if (!productName) {
        showResult(stockResult, "Please enter a product name.", true);
        return;
      }
      setLoading(submitBtn, true, "Check Stock");
      try {
        const data = await requestSupport({ productName });
        showResult(stockResult, data.reply);
      } catch (error) {
        showResult(stockResult, error.message, true);
      } finally {
        setLoading(submitBtn, false, "Check Stock");
      }
    });
  }

  // Assistant chat
  const chatForm = document.getElementById("chatForm");
  const chatMessages = document.getElementById("chatMessages");
  const chatInput = document.getElementById("chatInput");
  if (chatForm && chatMessages && chatInput) {
    const appendMessage = (text, role, sender) => {
      const wrapper = document.createElement("div");
      wrapper.className = `message ${role}-message`;
      if (sender) {
        const strong = document.createElement("strong");
        strong.textContent = sender;
        wrapper.appendChild(strong);
      }
      const p = document.createElement("p");
      p.textContent = text;
      wrapper.appendChild(p);
      chatMessages.appendChild(wrapper);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      return wrapper;
    };

    chatForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      // Respect CJK IME composition before submitting.
      if (event.nativeEvent?.isComposing || event.keyCode === 229) return;

      const message = chatInput.value.trim();
      if (!message) return;

      appendMessage(message, "user");
      chatInput.value = "";
      chatInput.disabled = true;

      const pending = appendMessage("Typing...", "assistant", "Northstar Support");

      try {
        const data = await requestSupport({ message });
        pending.querySelector("p").textContent = data.reply;
      } catch (error) {
        pending.querySelector("p").textContent = error.message;
        pending.classList.add("is-error");
      } finally {
        chatInput.disabled = false;
        chatInput.focus();
      }
    });
  }

  // Scroll fade-in animations
  const fadeInSections = document.querySelectorAll(".fade-in-section");
  if (fadeInSections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    fadeInSections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.transition = "0.75s ease";
      observer.observe(section);
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      event.preventDefault();
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    });
  });

  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterMessage = document.getElementById("newsletterMessage");
  if (newsletterForm) {
    const emailInput = document.getElementById("newsletterEmail");
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailValue = (emailInput?.value || "").trim();
      if (emailValue && emailValue.includes("@")) {
        if (newsletterMessage) {
          newsletterMessage.textContent =
            "Thank you for joining Northstar. We'll be in touch.";
        }
        newsletterForm.reset();
      } else if (newsletterMessage) {
        newsletterMessage.textContent = "Please enter a valid email address.";
      }
    });
  }

  // Footer year
  const currentYear = new Date().getFullYear();
  document.querySelectorAll(".footer-year").forEach((elem) => {
    elem.textContent = String(currentYear);
  });
});
