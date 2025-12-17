"use client";

import { Copy } from "lucide-react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import ClipboardJS from "clipboard";

export const ConnectAddress = () => {
  useEffect(() => {
    const clipboard = new ClipboardJS(".copy-btn");

    clipboard.on("success", (e) => {
      const copiedText = e.text.includes("15547926009")
        ? "Утасны дугаар"
        : "Хаяг";
      toast.success(`${copiedText} амжилттай хуулсан!`, {
        position: "top-right",
        autoClose: 3000,
      });
    });

    clipboard.on("error", () => {
      toast.error("Хуулахад алдаа гарлаа!", {
        position: "top-right",
        autoClose: 3000,
      });
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full my-20 h-full max-lg:px-5">
      <h1 className="text-2xl font-normal text-center text-gray-600">
        Хаяг холбох заавар
      </h1>
      <div className="max-w-[1050px] flex items-start gap-24 flex-col mt-10">
        <div className="flex flex-col items-start max-w-[1000px] gap-10">
          <div className="flex items-center gap-3">
            <h1 className="font-medium text-md">Утасны дугаар:</h1>
            {/* <h1 className="font-medium text-md">155 4792 6009</h1> */}
            <button
              className="copy-btn cursor-pointer"
              data-clipboard-text="15547926009"
              aria-label="Copy phone number"
            >
              <Copy />
            </button>
          </div>
          <div className="flex items-start flex-col gap-3">
            <h1 className="font-medium text-md">Хаяг:</h1>
            <h1 className="font-medium text-md">
              Ewt cargo 中国电话：15647994899
            </h1>
            <h1 className="font-medium text-md">
              内蒙古锡林郭勒盟二连浩特市环宇商贸城8-11
            </h1>
            <h1 className="font-medium text-md">
              Ewt kargo + Нэр+ Утасны дугаар
            </h1>
            <button
              className="copy-btn cursor-pointer"
              data-clipboard-text="Ewt cargo 中国电话：15647994899
              内蒙古锡林郭勒盟二连浩特市环宇商贸城8-11（Ewt kargo + Нэр+ Утасны
              дугаар"
              aria-label="Copy address"
            >
              <Copy />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h1 className="font-medium text-md">Санамж:</h1>
          <h1 className="font-medium text-md">
            Тэмдэг дээр дарж хуулж авна уу! (Copy)
          </h1>
          <h1 className="font-medium text-md">
            Хаягаа үнэн зөв оруулсан эсэхээ шалгана уу!
          </h1>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
