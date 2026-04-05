import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildWhatsAppLink(
  message: string,
  phoneNumber: string = "6285723966650",
) {
  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

/**
 * Membuka WhatsApp dengan pesan template yang sudah dikustomisasi
 * @param message - Pesan yang akan dikirim
 * @param phoneNumber - Nomor WhatsApp (default: nomor perusahaan)
 */
export function contactViaWhatsApp(message: string, phoneNumber: string = "6285723966650") {
  window.open(buildWhatsAppLink(message, phoneNumber), "_blank")
}
