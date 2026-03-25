/**
 * WhatsappService.ts
 * Centralized service to handle WhatsApp URL generation and operations.
 */

// Default numbers found in the codebase
const DEFAULT_WHATSAPP_NUMBER = "918009212634";

export const WhatsappService = {
    /**
     * Get the WhatsApp phone number from environment variables or fallback
     */
    getNumber: (): string => {
        return process.env.WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
    },

    /**
     * Generates a direct WhatsApp wa.me URL with an optional pre-filled message.
     * 
     * @param message Optional message to pre-fill in the WhatsApp chat. If not provided, a default booking message is used.
     * @returns WhatsApp web intent URL
     */
    getBookingUrl: (message?: string): string => {
        const number = WhatsappService.getNumber();
        const defaultMessage = "Hello! I am interested in booking a room at The Shyama Palace. Please share availability. 🙏";

        const textToEncode = message || defaultMessage;

        return `https://wa.me/${number}?text=${encodeURIComponent(textToEncode)}`;
    },

    /**
     * Opens WhatsApp directly in a new tab (useful for onClick handlers).
     * 
     * @param message Optional message to pre-fill
     */
    openWhatsApp: (message?: string): void => {
        if (typeof window !== "undefined") {
            const url = WhatsappService.getBookingUrl(message);
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }
};
