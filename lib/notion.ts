import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export interface ContactData {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje?: string;
}

export async function writeContact(data: ContactData): Promise<void> {
  const dbId = process.env.NOTION_CONTACTS_DB_ID;
  if (!dbId) throw new Error("NOTION_CONTACTS_DB_ID not set");

  await notion.pages.create({
    parent: { database_id: dbId },
    properties: {
      Nombre: {
        title: [{ text: { content: data.nombre } }],
      },
      Email: {
        email: data.email,
      },
      ...(data.telefono && {
        Teléfono: {
          phone_number: data.telefono,
        },
      }),
      ...(data.mensaje && {
        Mensaje: {
          rich_text: [{ text: { content: data.mensaje } }],
        },
      }),
      Fecha: {
        date: { start: new Date().toISOString() },
      },
    },
  });
}

export async function getCVUrl(): Promise<string> {
  const pageId = process.env.NOTION_RESUME_PAGE_ID;
  if (!pageId) throw new Error("NOTION_RESUME_PAGE_ID not set");

  const response = await notion.blocks.children.list({ block_id: pageId });

  for (const block of response.results) {
    if ("type" in block) {
      if (block.type === "file" && "file" in block) {
        const fileBlock = block as { type: "file"; file: { type: string; file?: { url: string }; external?: { url: string } } };
        if (fileBlock.file.type === "file" && fileBlock.file.file) {
          return fileBlock.file.file.url;
        }
        if (fileBlock.file.type === "external" && fileBlock.file.external) {
          return fileBlock.file.external.url;
        }
      }
      if (block.type === "pdf" && "pdf" in block) {
        const pdfBlock = block as { type: "pdf"; pdf: { type: string; file?: { url: string }; external?: { url: string } } };
        if (pdfBlock.pdf.type === "file" && pdfBlock.pdf.file) {
          return pdfBlock.pdf.file.url;
        }
        if (pdfBlock.pdf.type === "external" && pdfBlock.pdf.external) {
          return pdfBlock.pdf.external.url;
        }
      }
    }
  }

  throw new Error("No se encontró un archivo PDF en la página Resume de Notion");
}
