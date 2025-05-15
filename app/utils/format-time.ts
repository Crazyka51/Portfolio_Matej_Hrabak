/**
 * Formátuje aktuální čas do českého formátu (HH:MM:SS)
 * @returns Formátovaný čas jako string
 */
export function formatCurrentTime(): string {
  const now = new Date()

  // Použití toLocaleTimeString s explicitními parametry pro konzistentní formátování
  return now.toLocaleTimeString("cs-CZ", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}
