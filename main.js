const puppeteer = require("puppeteer");
const twilio = require("twilio");

// Load environment variables
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const MY_PHONE_NUMBER = process.env.MY_PHONE_NUMBER;

// Initialize the Twilio client
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Define selectors, URLs and other constants for LiveNation
const LIVE_NATION_URL = "...";
const LIVE_NATION_BUTTON_SELECTOR = "...";
const LIVE_NATION_AVAILABLE_SELECTOR = "...";

// Define selectors, URLs and other constants for TicketMaster
const TICKETMASTER_URL = "...";
const TICKETMASTER_BUTTON_SELECTOR = "...";
const TICKETMASTER_AVAILABLE_SELECTOR = "...";

/**
 * Checks the ticket availability on a given website.
 * @param {string} url - Website URL to check
 * @param {string} buttonSelector - Selector for a button to be clicked
 * @param {string} availableSelector - Selector to check ticket availability
 * @returns {boolean} - True if tickets are available, otherwise false
 */
async function checkAvailability(url, buttonSelector, availableSelector) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url);

    // TODO: Add logic to click the button and check availability
    // For example:
    // await page.click(buttonSelector);
    // const isAvailable = await page.$(availableSelector);
    // return !!isAvailable;

    await browser.close();
}

/**
 * Sends an SMS notification.
 * @param {string} message - Message to be sent
 */
async function notify(message) {
    await client.messages.create({
        body: message,
        from: "+15675295466", // Phone number provided by Twilio
        to: MY_PHONE_NUMBER,
    });
}

/**
 * Checks ticket availability on LiveNation and sends notification if available.
 */
async function checkLiveNation() {
    const isAvailable = await checkAvailability(
        LIVE_NATION_URL,
        LIVE_NATION_BUTTON_SELECTOR,
        LIVE_NATION_AVAILABLE_SELECTOR
    );
    if (isAvailable) {
        notify("Tickets available on LiveNation!");
    }
}

/**
 * Checks ticket availability on TicketMaster and sends notification if available.
 */
async function checkTicketMaster() {
    const isAvailable = await checkAvailability(
        TICKETMASTER_URL,
        TICKETMASTER_BUTTON_SELECTOR,
        TICKETMASTER_AVAILABLE_SELECTOR
    );
    if (isAvailable) {
        notify("Tickets available on TicketMaster!");
    }
}

/**
 * Main function that runs both checkers and sets an interval to repeat checks.
 */
async function main() {
    await checkLiveNation();
    await checkTicketMaster();

    // Check both sites every minute
    setInterval(main, 1000 * 60);
}

// Start the main function
main();
