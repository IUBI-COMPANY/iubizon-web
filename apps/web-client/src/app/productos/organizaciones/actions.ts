"use server";

export async function sendProductRequestEmail(
  formProductRequest: LeadForIubizon,
): Promise<void> {
  const mapProductRequestData = (data: LeadForIubizon) => ({
    // Core Fields
    client_id: "gYn8QUB8g35wEAZcZz7D" /* Iubizon Client ID for Web Leads */,
    lead_type: data.lead_type, // "sale"
    client_type: data.client_type, // "individual" | "organization"
    status: data.status, // "new"
    archived: data.archived, // false

    // Contact Information (Step 2)
    contact: {
      first_name: data.contact.first_name,
      last_name: data.contact.last_name,
      full_name: data.contact.full_name,
      full_name_or_social_reason: data.contact.full_name_or_social_reason,
      email: data.contact.email,
      phone: {
        prefix: data.contact.phone.prefix,
        number: data.contact.phone.number,
      },
    },

    // Document Information (Step 2)
    document: data.document
      ? {
          type: data.document.type,
          number: data.document.number,
        }
      : undefined,

    // Organization Info (Step 2 - only if RUC)
    organization_info: data.organization_info
      ? {
          company_name: data.organization_info.company_name,
          tax_id: data.organization_info.tax_id,
        }
      : undefined,

    // Products (Step 1)
    products: data.products?.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      brand: product.brand,
      model: product.model,
      type: product.type, // "sale"
    })),

    // Additional product details (Step 1)
    description_more_details: data.description_more_details,

    // Service Details (Step 3)
    service_details: data.service_details
      ? {
          attendance_type: data.service_details.attendance_type,
        }
      : undefined,

    // Visit Schedule (Step 3 - only if home_visit)
    visit_schedule: data.visit_schedule
      ? {
          preferred_date: data.visit_schedule.preferred_date,
          preferred_time: data.visit_schedule.preferred_time,
        }
      : undefined,

    // Address (Step 3 - only if home_visit or send_to_store)
    address: data.address
      ? {
          street: data.address.street,
          department: data.address.department,
          province: data.address.province,
          district: data.address.district,
        }
      : undefined,

    // Communication
    hostname: data.hostname,
    terms_and_conditions: data.terms_and_conditions,

    // Tracking
    tracking: {
      source: data.tracking.source,
      landing_page: data.tracking.landing_page,
    },
  });

  try {
    const response = await fetch(
      `https://api-iubisales.web.app/iubizon/leads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapProductRequestData(formProductRequest)),
      },
    );

    const responseText = await response.text();

    if (!response.ok) {
      console.error(
        `HTTP error! status: ${response.status}, message: ${responseText}`,
      );
      throw new Error(`Error ${response.status}: ${responseText}`);
    }

    console.log("Product request email sent successfully:", responseText);
  } catch (error) {
    console.error("Error sending product request email: ", error);
    throw error;
  }
}
