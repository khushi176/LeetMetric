# 🚀 LeetMetric - LeetCode Analytics Dashboard

LeetMetric is a sleek, modern web application designed to track and visualize LeetCode user statistics. It fetches real-time data using GraphQL and presents it through a trendy Glassmorphism UI with animated progress trackers.

![LeetMetric Preview](https://via.placeholder.com/800x400?text=LeetMetric+Dashboard+Preview)

## ✨ Features

* **Real-time Data Fetching:** Connects directly to LeetCode's GraphQL API.
* **Glassmorphism UI:** A transparent, frosted-glass design with a dynamic mesh gradient background.
* **Animated Progress:** Circular progress bars for Easy, Medium, and Hard problems solved.
* **Floating Code Graphics:** Subtle, animated coding symbols (`< />`, `{ }`) for a professional developer aesthetic.
* **Responsive Design:** Works beautifully on desktops, tablets, and mobile phones.
* **CORS Bypass:** Integrated with `corsproxy.io` for seamless local and production data fetching.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Custom animations, Glassmorphism, and Flexbox/Grid layouts.
* **JavaScript (ES6+):** Asynchronous API handling (Fetch API) and DOM manipulation.
* **LeetCode GraphQL API:** Source of user statistics.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

1.  **Clone the repo**
    ```bash
    git clone [https://github.com/yourusername/leetmetric.git](https://github.com/yourusername/leetmetric.git)
    ```
2.  **Open the project**
    Simply open the `index.html` file in any modern web browser.

3.  **Enter Username**
    Type a valid LeetCode username (e.g., `lakshayk12`) and hit Search!

## 📂 File Structure

* `index.html` - The core structure and UI entry point.
* `style.css` - Custom styles including the animated background and glass effects.
* `script.js` - The logic for data fetching, validation, and UI updates.

## ⚠️ Important Note on CORS
This project uses a public proxy (`https://corsproxy.io/`) to bypass Cross-Origin Resource Sharing (CORS) restrictions. If you deploy this to a production environment and encounter issues, ensure the proxy is whitelisting your domain.

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
Built with ❤️ by Kidi & Team
