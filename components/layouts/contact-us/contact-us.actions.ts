"use server";

import { supabase } from "@/lib/supabase/server";

export async function createBooking(formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const date = formData.get("date") as string | null;
  const time = formData.get("time") as string | null;

  if (!name || !email || !phone || !date || !time) {
    return { error: "يرجى ملء جميع الحقول المطلوبة واختيار التاريخ والوقت" };
  }

  try {
    const { error } = await supabase.from("Consultation").insert([
      { name, email, phone, date, time },
    ]);

    if (error) {
      console.error("Supabase error (Consultation):", error.message);
      return { error: "حدث خطأ أثناء حفظ الحجز" };
    }

    return { success: true };
  } catch (error) {
    console.error("Booking action error:", error);
    return { error: "حدث خطأ غير متوقع أثناء الحجز" };
  }
}

export async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const Subject = formData.get("Subject") as string | null;
  const Service = formData.get("Service") as string | null;
  const Message = formData.get("Message") as string | null;

  if (!name || !email || !phone || !Subject || !Service || !Message) {
    return { error: "يرجى ملء جميع الحقول المطلوبة" };
  }

  try {
    const { error } = await supabase.from("Contact").insert({
      name,
      email,
      phone,
      Subject,
      Service,
      Message,
    });

    if (error) {
      console.error("Supabase error (Contact):", error.message);
      return { error: "حدث خطأ أثناء إرسال الرسالة" };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact action error:", error);
    return { error: "حدث خطأ غير متوقع أثناء إرسال الرسالة" };
  }
}

