"use server";

import { supabase } from "@/lib/supabase/server";

export async function createBooking(formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const date = formData.get("date") as string | null;
  const time = formData.get("time") as string | null;

  if (!date || !time) {
    return { error: "يرجى اختيار التاريخ والوقت" };
  }

  const { error } = await supabase.from("Consultation").insert([
    { name, email, phone, date, time },
  ]);

  if (error) {
    return { error: "حدث خطأ أثناء الحجز" };
  }

  return { success: true };
}

export async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const Subject = formData.get("Subject") as string;
  const Service = formData.get("Service") as string;
  const Message = formData.get("Message") as string;

  const { error } = await supabase.from("Contact").insert({
    name,
    email,
    phone,
    Subject,
    Service,
    Message,
  });

  if (error) {
    console.error("Supabase error:", error.message);
    throw new Error("حدث خطأ أثناء إرسال الرسالة");
  }

  return { success: true };
}
