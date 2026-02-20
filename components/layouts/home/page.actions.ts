"use server";

import { supabase } from "@/lib/supabase/server";

export async function createBooking(formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const subject = formData.get("subject") as string | null;
  const message = formData.get("message") as string | null;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return { error: "جميع الحقول مطلوبة" };
  }

  const { error } = await supabase.from("home_contact").insert([
    { name, email, subject, message },
  ]);


  if (error) {
    return { error: error.message || "حدث خطأ أثناء إرسال الرسالة" };
  }

  return { success: true };
}
