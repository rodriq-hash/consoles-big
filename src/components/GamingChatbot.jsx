import React, { useState } from "react";

const GamingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "🎮 Hi! I'm the Gaming Store Assistant. Ask me about consoles, how to use the store, sign in/up, shopping, or features!"
    }
  ]);
  const [input, setInput] = useState("");

  // Product Prices Database
  const products = {
    ps5: {
      name: "PlayStation 5",
      basePrice: 499,
      variants: [
        { model: "PS5 Standard Edition (500GB)", price: 499 },
        { model: "PS5 Digital Edition (500GB)", price: 399 }
      ],
      description: "🔥 PS5 supports 4K gaming, ray tracing, and ultra-fast SSD loading."
    },
    xbox: {
      name: "Xbox Series X",
      basePrice: 499,
      variants: [
        { model: "Xbox Series X (1TB)", price: 499 },
        { model: "Xbox Series S (500GB)", price: 299 }
      ],
      description: "💚 Xbox Series X is powerful and includes Xbox Game Pass support."
    },
    nintendo: {
      name: "Nintendo Switch",
      basePrice: 299,
      variants: [
        { model: "Nintendo Switch (Standard)", price: 299 },
        { model: "Nintendo Switch OLED", price: 349 },
        { model: "Nintendo Switch Lite", price: 199 }
      ],
      description: "🕹 Nintendo Switch can be played handheld or connected to a TV."
    }
  };

  // Bot replies
  const getBotReply = (message) => {
    const text = message.toLowerCase();

    // Project/Store Information
    if (text.includes("about") || text.includes("what is")) {
      return "🎮 Welcome to Rodrique's Gaming Store! We sell premium gaming consoles and accessories. You need to sign in to browse and purchase products.";
    }

    if (text.includes("how to sign") || text.includes("signup") || text.includes("sign up")) {
      return "📝 Sign Up Process:\n1. Click 'Signup' in the navbar\n2. Enter username, email, password, and phone\n3. Create your account\n4. You'll be redirected to browse products!";
    }

    if (text.includes("how to login") || text.includes("signin") || text.includes("sign in")) {
      return "🔐 Sign In Process:\n1. Click 'Signin' in the navbar\n2. Enter your email and password\n3. Access exclusive products and shopping features!";
    }

    if (text.includes("add product") || text.includes("developer")) {
      return "👨‍💻 Developer Feature:\n• Only developers can add products\n• You must be signed in as a developer\n• Go to 'Add product' link in the navbar\n• Fill in product details and upload an image";
    }

    if (text.includes("cart") || text.includes("shopping")) {
      return "🛒 Shopping Cart:\n1. Click the cart icon (only visible when logged in)\n2. Click 'Add to Cart' on any product\n3. Review items in the cart dropdown\n4. Click 'View Cart' to proceed to checkout";
    }

    if (text.includes("logout") || text.includes("log out")) {
      return "🚪 Logout:\n• Click 'Logout' button in the navbar (appears when logged in)\n• You'll be logged out and returned to the home page\n• You can sign in again anytime";
    }

    if (text.includes("payment") || text.includes("checkout")) {
      return "💳 Payment:\n1. Click 'Purchase Now' on any product\n2. Or go to your cart and proceed to payment\n3. Enter payment details\n4. Confirm your order!";
    }

    if (text.includes("shop") || text.includes("browse")) {
      return "🛍️ Shop:\n1. Sign in to your account\n2. Click 'Shop' in the navbar\n3. Search and filter products\n4. Sort by price or name\n5. Add items to cart or purchase directly";
    }

    if (text.includes("search")) {
      return "🔍 Search Products:\n• Use the search box on the products page\n• Search by product name or description\n• Results update in real-time";
    }

    if (text.includes("filter") || text.includes("sort")) {
      return "📊 Sorting:\n• Sort by Price: Low → High or High → Low\n• Sort by Name: A → Z or Z → A\n• Use search to narrow results";
    }

    // Console Products
    if (text.includes("ps5")) {
      const ps5 = products.ps5;
      return `${ps5.description}\n\n💵 PS5 Prices:\n${ps5.variants.map(v => `• ${v.model}: $${v.price}`).join("\n")}`;
    }

    if (text.includes("xbox")) {
      const xbox = products.xbox;
      return `${xbox.description}\n\n💵 Xbox Prices:\n${xbox.variants.map(v => `• ${v.model}: $${v.price}`).join("\n")}`;
    }

    if (text.includes("nintendo")) {
      const nintendo = products.nintendo;
      return `${nintendo.description}\n\n💵 Nintendo Prices:\n${nintendo.variants.map(v => `• ${v.model}: $${v.price}`).join("\n")}`;
    }

    if (text.includes("best console")) {
      return "🏆 Console Comparison:\n• PS5: Best for exclusive games & performance\n• Xbox: Game Pass value & online play\n• Nintendo: Family-friendly & portability";
    }

    if (text.includes("price")) {
      return "💰 Our Console Prices:\n• PS5 Standard: $499\n• PS5 Digital: $399\n• Xbox Series X: $499\n• Xbox Series S: $299\n• Nintendo Switch: $299-$349";
    }

    if (text.includes("features")) {
      return "✨ Store Features:\n✅ User authentication (Sign in/Up)\n✅ Product catalog with search/filter\n✅ Shopping cart system\n✅ Developer product management\n✅ Payment integration\n✅ Real-time inventory updates";
    }

    if (text.includes("contact") || text.includes("support")) {
      return "📞 Support:\n• Customer Service available 24/7\n• Email: support@rodriquestore.com\n• Phone: 1-800-GAMING-1\n• Live chat available on the website";
    }

    return "🤖 I can help with:\n• Console info & prices\n• How to sign in/up\n• Shopping & cart\n• Developer features\n• Store navigation\n\nWhat would you like to know?";
  };

  // Send message
  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: input
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(input)
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#f00606ff",
          color: "#fff",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000
        }}
      >
        🎮
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            height: "450px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#111",
              color: "#fff",
              padding: "15px",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            Gaming Console Chatbot
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              background: "#f5f5f5"
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "10px"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px",
                    borderRadius: "10px",
                    background:
                      msg.sender === "user" ? "#007bff" : "#28a745",
                    color: "#fff",
                    maxWidth: "80%"
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #ddd"
            }}
          >
            <input
              type="text"
              placeholder="Ask about consoles..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                marginLeft: "10px",
                padding: "10px 15px",
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GamingChatbot;