import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(3).max(40),
  email: z.string().trim().email().max(255),
  topic: z.string().trim().min(1).max(100),
  message: z.string().trim().max(2000).optional().default(""),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const gKey = process.env.GOOGLE_SHEETS_API_KEY;
    const sheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    if (!lovableKey) throw new Error("Missing LOVABLE_API_KEY");
    if (!gKey) throw new Error("Missing GOOGLE_SHEETS_API_KEY");
    if (!sheetId) throw new Error("Missing GOOGLE_SHEETS_SPREADSHEET_ID");

    const range = "Sheet1!A:F";
    const url = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const row = [
      new Date().toISOString(),
      data.name,
      data.phone,
      data.email,
      data.topic,
      data.message,
    ];

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Google Sheets append failed (${res.status}): ${text}`);
    }

    return { success: true };
  });
