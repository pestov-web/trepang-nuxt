export const useSendMail = async (data: any) => {
  try {
    const response: Response = await fetch("/api/sendmail", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // const responseData = await response.json();
    // console.log(responseData);
  } catch (error) {
    console.error(error);
  }
};
