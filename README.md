# 🎤 Concert-Alert-TicketBot 🎟️

A Puppeteer-powered bot that monitors concert ticket websites for ticket availability. Receive instant notifications when your favorite shows have tickets available. Stay ahead in the race to secure your spot! 🚀

## 📑 Table of Contents

-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Configuration](#configuration)
-   [Usage](#usage)
-   [Contributing](#contributing)

## 🌟 Features

-   **Real-time Monitoring**: 🕐 Constantly checks the availability of concert tickets.
-   **Instant Notifications**: 📲 Sends SMS notifications as soon as tickets are available.
-   **Modular Design**: 🔧 Easily expandable to include more websites or services.

## 📚 Prerequisites

-   Node.js and npm installed.
-   A Twilio account for sending SMS notifications.

## 🔧 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Broken972/Concert-Alert-TicketBot.git
    ```
2. Change into the directory:
    ```bash
    cd Concert-Alert-TicketBot
    ```
3. Install the required packages:
    ```bash
    npm install
    ```

## ⚙️ Configuration

-   Rename .env.example to .env.
-   Update the .env file with your Twilio credentials:s
    ```bash
    TWILIO_ACCOUNT_SID=YOUR_TWILIO_ACCOUNT_SID
    TWILIO_AUTH_TOKEN=YOUR_TWILIO_AUTH_TOKEN
    MY_PHONE_NUMBER=YOUR_PHONE_NUMBER
    ```

## 🚀 Usage

1. Start the bot:
    ```bash
    node main.js
    ```
2. The bot will now start monitoring the specified websites for ticket availability and will send an SMS 📩 to the provided phone number when tickets are found.

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes.
4. Submit a pull request
