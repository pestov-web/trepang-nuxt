export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const nodemailerConfig = useRuntimeConfig().nodemailer;
    // console.log("Nodemailer config:", nodemailerConfig);

    const { sendMail } = useNodeMailer();

    // Предполагаем, что в body есть поле `message`
    const message = JSON.stringify(body);
    console.log(message);

    const result = await sendMail({
      subject: "Заказ или Обратный звонок",
      text: `имя: ${body.name} , телефон: ${body.telephone} ,  ${
        body.goods || "Обратный звонок"
      }`,
      to: "info@trepang.online",
    });

    console.log("Почта отправлена:", result);
    return { success: true, result };
  } catch (error) {
    console.error("Ошибка отправки почты:", error);
    return { success: false, error: (error as Error).message };
  }
});
